// Функция переключения страниц
function showPage(pageIds, e) {
    // скрываем все верхние секции
    document.querySelectorAll('main > section.page').forEach(page => {
        page.classList.remove('active');
    });

    // если передана строка — превращаем её в массив
    if (!Array.isArray(pageIds)) {
        pageIds = [pageIds];
    }

    // показываем нужные секции
    pageIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
    });

    // обновляем активную кнопку
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (e && e.currentTarget) {
        e.currentTarget.classList.add('active');
    }
}

const carePlantSelect = document.getElementById('plant-select');
const actionSelect = document.getElementById('action-select');
const dateInput = document.getElementById('care-date');
const historyList = document.querySelector('.history-list');

// --- Обновляем список растений из коллекции ---
function updateCarePlantSelect() {
  const collectionCards = document.querySelectorAll('.collection-card');
  carePlantSelect.innerHTML = ''; // очищаем список

  if (collectionCards.length === 0) {
    const option = document.createElement('option');
    option.textContent = 'Нет растений в коллекции';
    option.disabled = true;
    carePlantSelect.appendChild(option);
    return;
  }

  collectionCards.forEach(card => {
    const name = card.getAttribute('data-name');
    const option = document.createElement('option');
    option.textContent = name;
    carePlantSelect.appendChild(option);
  });
}

// Вызываем при загрузке страницы
updateCarePlantSelect();

// --- Когда в коллекцию добавляют/удаляют растения, тоже обновляем ---
const observer = new MutationObserver(updateCarePlantSelect);
observer.observe(document.querySelector('#collection .grid'), { childList: true });

// --- Фильтры истории ухода ---
document.querySelectorAll('.history-filter').forEach(button => {
  button.addEventListener('click', function() {
    // переключение активной кнопки
    document.querySelectorAll('.history-filter').forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');

    const filter = this.textContent.trim();

    document.querySelectorAll('.history-item').forEach(item => {
      const action = item.querySelector('.history-action').textContent.trim();
      if (filter === 'Все' || filter === action) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// --- Добавление новой записи об уходе ---
document.querySelector('.add-care-btn').addEventListener('click', function() {
  if (!carePlantSelect.value || carePlantSelect.value === 'Нет растений в коллекции') {
    alert('Сначала добавьте растение в коллекцию!');
    return;
  }

  const plant = carePlantSelect.value;
  const action = actionSelect.value;
  let dateText = 'Только что';

  if (dateInput.value) {
    const date = new Date(dateInput.value);
    dateText = date.toLocaleString('ru-RU');
  }

  // Создаем новую запись
  const newItem = document.createElement('div');
  newItem.className = 'history-item headercl';
  newItem.innerHTML = `
      <div>
          <div class="history-plant">${plant}</div>
          <div class="history-action">${action}</div>
      </div>
      <div class="history-date">${dateText}</div>
  `;

  // Добавляем в начало списка
  historyList.prepend(newItem);

  // Сброс даты
  dateInput.value = '';
});


const info = document.getElementById('info');
const collectionGrid = document.querySelector('#collection .grid');

// контейнер для уведомлений
const notificationContainer = document.createElement('div');
notificationContainer.classList.add('notification-container');
document.body.appendChild(notificationContainer);

// --- ФУНКЦИЯ УВЕДОМЛЕНИЯ ---
function showNotification(message) {
  const note = document.createElement('div');
  note.classList.add('notification');
  note.textContent = message;
  notificationContainer.appendChild(note);

  setTimeout(() => note.classList.add('show'), 10);

  setTimeout(() => {
    note.classList.remove('show');
    setTimeout(() => note.remove(), 300);
  }, 2500);
}

// --- ФИЛЬТР ---
const filterForm = document.querySelector('.catalog-filter form');
const catalogCards = document.querySelectorAll('.catalog-card');

if (filterForm) {
  filterForm.addEventListener('change', () => {
    const checked = [...filterForm.querySelectorAll('input:checked')].map(cb => cb.value);

    catalogCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (checked.length === 0 || checked.includes(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// --- ДОБАВЛЕНИЕ В КОЛЛЕКЦИЮ ---
document.querySelectorAll('.add-catalog-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.catalog-card');
    const name = card.querySelector('.catalog-name').textContent;
    const imgSrc = card.querySelector('img').src || "https://via.placeholder.com/200";
    const status = card.querySelector('.catalog-status').textContent;

    // создаём карточку для коллекции
    const newCard = document.createElement('div');
    newCard.classList.add('collection-card');
    newCard.setAttribute('data-name', name);
    newCard.setAttribute('data-img', imgSrc);
    newCard.setAttribute('data-health', "100");
    newCard.setAttribute('data-age', "0");
    newCard.setAttribute('data-status', status);

    newCard.innerHTML = `<img src="${imgSrc}" alt="${name}">`;

    collectionGrid.appendChild(newCard);

    // уведомление
    showNotification(`"${name}" добавлен в коллекцию!`);

    // обработчик для отображения в info
    newCard.addEventListener('click', () => renderInfo(newCard));
  });
});

// --- ОТОБРАЖЕНИЕ ИНФО С КНОПКОЙ УДАЛЕНИЯ ---
function renderInfo(card) {
  const name = card.getAttribute('data-name');
  const img = card.getAttribute('data-img');
  const health = card.getAttribute('data-health');
  const age = card.getAttribute('data-age');
  const status = card.getAttribute('data-status');

  info.innerHTML = `
    <img src="${img}" alt="${name}">
    <h2>${name}</h2>
    <div class="stats">
      <p>Здоровье: ${health}</p>
      <p>Жизнь: ${age}</p>
      <p>Описание: ${status}</p>
    </div>
    <button class="remove-btn">Убрать из коллекции</button>
  `;

  // кнопка "убрать"
  const removeBtn = info.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => {
    card.remove();
    showNotification(`"${name}" удалён из коллекции!`);
    info.innerHTML = `<p>Выберите растение</p>`;
  });
}



let users = {};
    let currentUser = null;

    function showModal(type) {
      closeModals();
      document.getElementById('overlay').style.display = 'block';
      document.getElementById(type === 'login' ? 'loginModal' : 'registerModal').style.display = 'block';
    }

    function closeModals() {
      ['loginModal', 'registerModal', 'userModal', 'overlay'].forEach(id => {
        document.getElementById(id).style.display = 'none';
      });
    }

    function register() {
      const username = document.getElementById('regUsername').value.trim();
      const password = document.getElementById('regPassword').value;

      if (!username || !password) return alert('Заполните все поля');
      if (users[username]) return alert('Пользователь уже существует');

      users[username] = { password };
      alert('Регистрация успешна!');
      closeModals();
    }

    function login() {
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;

      if (!users[username] || users[username].password !== password) {
        return alert('Неверный логин или пароль');
      }

      currentUser = username;
      closeModals();
    }

    function logout() {
      currentUser = null;
      closeModals();
    }

    function toggleUserModal() {
        const modal = document.getElementById('userModal');
        const overlay = document.getElementById('overlay');
        const content = document.getElementById('userProfileContent');
        const actions = document.getElementById('profileActions');
      
        if (modal.style.display === 'block') {
          modal.style.display = 'none';
          overlay.style.display = 'none';
        } else {
          if (currentUser) {
            content.innerHTML = `
              <div class="profile-box">
                <p><strong>Имя пользователя:</strong> ${currentUser}</p>
                <p>Вы авторизованы. Добро пожаловать!</p>
              </div>
            `;
            actions.innerHTML = `<button onclick="logout()">Выйти</button>`;
          } else {
            content.innerHTML = `
              <div class="profile-box not-auth">
                <p>Вы не вошли в систему</p>
              </div>
            `;
            actions.innerHTML = `
              <button class="auth__btn" onclick="showModal('login')">Войти</button>
              <button class="auth__btn" onclick="showModal('register')">Регистрация</button>
            `;
          }
      
          modal.style.display = 'block';
          overlay.style.display = 'block';
        }
      }
      
      