// ДОБАВЛЯЕМ: База данных растений с полной информацией
const plantsDatabase = {
  'Монстера Делициоза': {
      latinName: 'Monstera deliciosa',
      description: 'Крупное тропическое растение с характерными разрезами на листьях. Идеально подходит для просторных помещений.',
      origin: 'Тропические леса Центральной Америки',
      blooming: 'В комнатных условиях цветет редко, обычно летом',
      category: 'monstera',
      image: 'monstera_d.png'
  },
  'Орхидея Фаленопсис': {
      latinName: 'Phalaenopsis sp.',
      description: 'Популярная орхидея с изящными цветами. Требует особого ухода и внимания к поливу.',
      origin: 'Тропики Юго-Восточной Азии',
      blooming: 'Цветет несколько раз в год, продолжительность цветения 2-3 месяца',
      category: 'orchid',
      image: 'orhidea_f.png'
  },
  'Филодендрон Биркин': {
      latinName: 'Philodendron Birkin',
      description: 'Эффектное растение с белыми полосами на темно-зеленых листьях. Неприхотлив в уходе.',
      origin: 'Тропические регионы Южной Америки',
      blooming: 'В комнатных условиях цветет редко',
      category: 'philodendron',
      image: 'philo_birkin.png'
  },
  'Филодендрон Миканс': {
      latinName: 'Philodendron micans',
      description: 'Вьющееся растение с бархатистыми листьями. Отлично смотрится в подвесных кашпо.',
      origin: 'Центральная Америка и Карибский бассейн',
      blooming: 'В комнатных условиях цветет редко',
      category: 'philodendron',
      image: 'philo_mikans.png'
  },
  'Филодендрон Фаленопсис': {
      latinName: 'Philodendron pedatum',
      description: 'Красивое растение с резными листьями. Быстро растет и легко размножается.',
      origin: 'Тропики Южной Америки',
      blooming: 'В комнатных условиях не цветет',
      category: 'philodendron', 
      image: 'philo_karamel.png'
  },
  'Фикус Бенджамина': {
      latinName: 'Ficus benjamina',
      description: 'Изящное деревце с мелкими листьями. Чувствителен к переменам места и сквознякам.',
      origin: 'Юго-Восточная Азия, Австралия',
      blooming: 'В комнатных условиях не цветет',
      category: 'ficus',
      image: 'fikus_ben.png'
  },
  'Фикус Лирата': {
      latinName: 'Ficus lyrata',
      description: 'Крупное растение с большими кожистыми листьями. Любит яркий рассеянный свет.',
      origin: 'Западная Африка',
      blooming: 'В комнатных условиях не цветет',
      category: 'ficus',
      image: 'ficus_lirat.png'
  },
  'Фикус Каучуконосный': {
      latinName: 'Ficus elastica',
      description: 'Выносливое растение с крупными глянцевыми листьями. Очищает воздух в помещении.',
      origin: 'Индия и Индонезия',
      blooming: 'В комнатных условиях не цветет',
      category: 'ficus',
      image: 'ficus_kauch.png'
  },
  'Фикус Микрокарпа': {
      latinName: 'Ficus microcarpa',
      description: 'Интересное растение, часто формируемое как бонсай. Требует регулярной обрезки.',
      origin: 'Юго-Восточная Азия',
      blooming: 'В комнатных условиях не цветет',
      category: 'ficus',
      image: 'ficus_micro.png'
  },
  'Фикус Тинеке': {
      latinName: 'Ficus elastica "Tineke"',
      description: 'Пестролистная форма фикуса каучуконосного. Требует больше света, чем зеленые формы.',
      origin: 'Культурный сорт',
      blooming: 'В комнатных условиях не цветет',
      category: 'ficus',
      image: 'ficus_tineke.png'
  },
  'Папоротник Нефролепис': {
      latinName: 'Nephrolepis exaltata',
      description: 'Пышный папоротник с ажурными вайями. Любит высокую влажность и рассеянный свет.',
      origin: 'Тропические регионы по всему миру',
      blooming: 'Не цветет, размножается спорами',
      category: 'fern',
      image: 'fern_nefro.png'
  },
  'Орхидея Лудизия': {
      latinName: 'Ludisia discolor',
      description: 'Драгоценная орхидея с бархатистыми листьями. Ценится за декоративную листву.',
      origin: 'Юго-Восточная Азия',
      blooming: 'Зимой, мелкими белыми цветами',
      category: 'orchid',
      image: 'orchidea_dr.png'
  },
  'Пальма Драцена': {
      latinName: 'Dracaena fragrans',
      description: 'Популярное комнатное растение, похожее на пальму. Очень неприхотливо в уходе.',
      origin: 'Тропическая Африка',
      blooming: 'В комнатных условиях цветет редко',
      category: 'palm',
      image: 'palm_dr.png'
  },
  'Суккулента': {
      latinName: 'Echeveria sp.',
      description: 'Декоративный суккулент с розеткой мясистых листьев. Любит солнце и умеренный полив.',
      origin: 'Полупустыни Центральной Америки',
      blooming: 'Весной-летом, цветоносом с мелкими цветами',
      category: 'succulent',
      image: 'succu.png'
  },
  'Кактус Цереус': {
      latinName: 'Cereus peruvianus',
      description: 'Колонновидный кактус, способный вырасти до значительных размеров. Очень вынослив.',
      origin: 'Пустыни Южной Америки',
      blooming: 'Цветет ночью, крупными белыми цветами',
      category: 'cactus',
      image: 'cactus_cer.png'
  },
  'Кактус Гросса': {
      latinName: 'Rebutia heliosa',
      description: 'Небольшой шаровидный кактус с золотистыми колючками. Обильно цветет весной.',
      origin: 'Горные районы Боливии',
      blooming: 'Весной, яркими оранжевыми цветами',
      category: 'cactus',
      image: 'cactus_gross.png'
  }
};

// ДОБАВЛЯЕМ: Система пользователей с localStorage
let users = {};
let currentUser = null;

// Загружаем данные при запуске
try {
  const savedUsers = localStorage.getItem('flowersLiveUsers');
  const savedCurrentUser = localStorage.getItem('flowersLiveCurrentUser');
  
  users = savedUsers ? JSON.parse(savedUsers) : {};
  currentUser = savedCurrentUser ? JSON.parse(savedCurrentUser) : null;
} catch (e) {
  console.log('Ошибка загрузки данных:', e);
  users = {};
  currentUser = null;
}

// Функция для сохранения данных
function saveData() {
  localStorage.setItem('flowersLiveUsers', JSON.stringify(users));
  localStorage.setItem('flowersLiveCurrentUser', JSON.stringify(currentUser));
}

// ДОБАВЛЯЕМ: Временные аватарки (emoji)
function getAvatarImage(avatarName) {
  const avatars = {
    'avatar1': '<img src="sinsha.jfif" alt="Аватар 1">',
    'avatar2': '<img src="sinshlyuxi.jfif" alt="Аватар 2">', 
    'avatar3': '<img src="general.png" alt="Аватар 3">',
    'avatar4': '<img src="UNfWwpc0baPnN7WUAMbcT-04m0lo5m-GOH227eOcm1a-HozGtbu0OT77DoPX_kvsxGdxM_hdBJOBcg3i2WF9jOLH.jpg" alt="Аватар 4">',
    'avatar5': '<img src="котлы.png" alt="Аватар 5">'
    };
  return avatars[avatarName] || '<img src="avatars/avatar1.png" alt="Аватар">';
}

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

// ДОБАВЛЯЕМ: Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
  updateUIForAuth();
  initializeCatalogButtons();
  
  // Показываем главную страницу по умолчанию
  showPage(['home','news','expert']);
});

// ДОБАВЛЯЕМ: Функция обновления интерфейса при авторизации
// ДОБАВЛЯЕМ: Функция обновления интерфейса при авторизации
function updateUIForAuth() {
  const collectionSection = document.getElementById('collection');
  const careSection = document.getElementById('care');
  const authButtons = document.querySelector('.auth-buttons');
  
  if (currentUser) {
      // Пользователь авторизован - скрываем кнопки входа/регистрации
      if (authButtons) {
          authButtons.style.display = 'none';
      }
      
      // Показываем контент коллекции и ухода
      collectionSection.innerHTML = `
          <h2 class="section-title">Моя коллекция растений</h2>
          <p>Здесь находятся все растения, за которыми вы ухаживаете</p>
          <div class="collection-plants">
              <div class="container-plants">
                  <div class="grid headercl"></div>
                  <div class="info" id="info"><p>Выберите растение</p></div>
              </div>
          </div>
      `;
      
      careSection.innerHTML = `
          <h2 class="section-title">История ухода за растениями</h2>
          <p>Здесь отображается история всех действий по уходу за вашими растениями</p>
          
          <div class="history-filters">
            <button class="history-filter headercl-btn active">Все</button>
            <button class="history-filter headercl-btn">Полив</button>
            <button class="history-filter headercl-btn">Удобрение</button>
            <button class="history-filter headercl-btn">Опрыскивание</button>
            <button class="history-filter headercl-btn">Пересадка</button>
        </div>
          
          <div class="history-list">
              <!-- История будет добавляться через JS -->
          </div>
          
          <div class="add-care-form headercl">
              <h3 class="form-title">Добавить действие по уходу</h3>
              <div class="form-group">
                  <label for="plant-select">Растение:</label>
                  <select id="plant-select"></select>
              </div>
              <div class="form-group">
                  <label for="action-select">Действие:</label>
                  <select id="action-select">
                      <option>Полив</option>
                      <option>Удобрение</option>
                      <option>Опрыскивание</option>
                      <option>Пересадка</option>
                      <option>Обрезка</option>
                  </select>
              </div>
              <div class="form-group">
                  <label for="care-date">Дата и время:</label>
                  <input type="datetime-local" id="care-date">
              </div>
              <button class="add-care-btn headercl-btn">Добавить запись</button>
          </div>
      `;
      
      loadUserCollection();
      loadUserCareHistory();
      initializeCareFunctionality();
  } else {
      // Пользователь не авторизован - показываем кнопки входа/регистрации
      if (authButtons) {
          authButtons.style.display = 'flex';
      }
      
      // Показываем сообщения о необходимости авторизации
      showAuthRequiredMessages();
  }
}

// ДОБАВЛЯЕМ: Сообщения о необходимости авторизации
function showAuthRequiredMessages() {
  const collectionSection = document.getElementById('collection');
  const careSection = document.getElementById('care');
  
  collectionSection.innerHTML = `
      <div class="auth-required-message headercl">
          <h2>Доступ к коллекции</h2>
          <p>Для просмотра вашей коллекции растений необходимо войти в систему</p>
          <div class="auth-buttons">
              <button class="auth-btn" onclick="showModal('login')">Войти</button>
              <button class="auth-btn" onclick="showModal('register')">Регистрация</button>
          </div>
      </div>
  `;
  
  careSection.innerHTML = `
      <div class="auth-required-message headercl">
          <h2>Доступ к истории ухода</h2>
          <p>Для ведения истории ухода за растениями необходимо войти в систему</p>
          <div class="auth-buttons">
              <button class="auth-btn" onclick="showModal('login')">Войти</button>
              <button class="auth-btn" onclick="showModal('register')">Регистрация</button>
          </div>
      </div>
  `;
}

// ДОБАВЛЯЕМ: Функция загрузки коллекции пользователя
function loadUserCollection() {
  if (!currentUser || !users[currentUser]) return;
  
  const collectionGrid = document.querySelector('#collection .grid');
  if (!collectionGrid) return;
  
  collectionGrid.innerHTML = '';
  
  users[currentUser].collection.forEach(plantName => {
      const plantData = plantsDatabase[plantName];
      if (plantData) {
          const plantCard = document.createElement('div');
          plantCard.className = 'collection-card';
          plantCard.setAttribute('data-name', plantName);
          plantCard.innerHTML = `<img src="${plantData.image}" alt="${plantName}">`;
          plantCard.onclick = () => showPlantInfo(plantName);
          collectionGrid.appendChild(plantCard);
      }
  });
}

// ДОБАВЛЯЕМ: Функция показа информации о растении
function showPlantInfo(plantName) {
    const plantData = plantsDatabase[plantName];
    const info = document.getElementById('info');
    
    if (!plantData || !info) return;
    
    info.innerHTML = `
        <img src="${plantData.image}" alt="${plantName}">
        <h2>${plantName}</h2>
        <h3>${plantData.latinName}</h3>
        <div class="stats">
            <p><strong>Описание:</strong><br>${plantData.description}</p>
            <p><strong>Происхождение:</strong><br>${plantData.origin}</p>
            <p><strong>Цветение:</strong><br>${plantData.blooming}</p>
        </div>
        <button class="remove-btn" onclick="removeFromCollection('${plantName}')">Убрать из коллекции</button>
    `;
}

// ДОБАВЛЯЕМ: Инициализация кнопок в каталоге
function initializeCatalogButtons() {
  document.querySelectorAll('.add-catalog-btn').forEach(btn => {
      btn.addEventListener('click', function() {
          if (!currentUser) {
              alert('Для добавления растений в коллекцию необходимо войти в систему');
              showModal('login');
              return;
          }
          
          // Проверяем ограничение в 10 растений
          if (users[currentUser].collection.length >= 10) {
              alert('Максимальное количество растений в коллекции - 10!');
              return;
          }
          
          const card = this.closest('.catalog-card');
          const name = card.querySelector('.catalog-name').textContent;
          
          if (!users[currentUser].collection.includes(name)) {
              users[currentUser].collection.push(name);
              saveData();
              loadUserCollection();
              showNotification(`"${name}" добавлен в коллекцию!`);
              
              // Обновляем ранг пользователя
              updateUserRank();
          } else {
              showNotification(`"${name}" уже есть в вашей коллекции!`);
          }
      });
  });
}

// ДОБАВЛЯЕМ: Функция удаления из коллекции
function removeFromCollection(plantName) {
  if (!currentUser) return;
  
  users[currentUser].collection = users[currentUser].collection.filter(name => name !== plantName);
  saveData();
  loadUserCollection();
  loadUserCareHistory(); // ДОБАВЛЯЕМ эту строку!
  showNotification(`"${plantName}" удалён из коллекции!`);
  
  const info = document.getElementById('info');
  if (info) {
      info.innerHTML = `<p>Выберите растение</p>`;
  }
  
  updateUserRank();
}

// ДОБАВЛЯЕМ: Функция обновления ранга пользователя
function updateUserRank() {
  if (!currentUser || !users[currentUser]) return;
  
  const plantCount = users[currentUser].collection.length;
  let newRank = 'Новичок';
  
  if (plantCount >= 10) newRank = 'Эксперт';
  else if (plantCount >= 5) newRank = 'Продвинутый';
  
  users[currentUser].rank = newRank;
  saveData();
}

// ДОБАВЛЯЕМ: Функционал ухода за растениями
function loadUserCareHistory() {
  if (!currentUser || !users[currentUser]) return;
  
  const historyList = document.querySelector('.history-list');
  const plantSelect = document.getElementById('plant-select');
  
  if (!historyList || !plantSelect) return;
  
  // Обновляем список растений в селекте
  plantSelect.innerHTML = '';
  
  if (users[currentUser].collection.length === 0) {
      const option = document.createElement('option');
      option.textContent = 'Нет растений в коллекции';
      option.disabled = true;
      plantSelect.appendChild(option);
  } else {
      users[currentUser].collection.forEach(plantName => {
          const option = document.createElement('option');
          option.textContent = plantName;
          option.value = plantName;
          plantSelect.appendChild(option);
      });
  }
  
  // Показываем историю ухода
  historyList.innerHTML = '';
  if (users[currentUser].careHistory && users[currentUser].careHistory.length > 0) {
      users[currentUser].careHistory.forEach(record => {
          const historyItem = document.createElement('div');
          historyItem.className = 'history-item headercl';
          historyItem.innerHTML = `
              <div>
                  <div class="history-plant">${record.plant}</div>
                  <div class="history-action">${record.action}</div>
              </div>
              <div class="history-date">${record.date}</div>
          `;
          historyList.appendChild(historyItem);
      });
  } else {
      // Если истории нет, показываем сообщение
      historyList.innerHTML = '<p style="text-align: center; padding: 20px;">История ухода пуста</p>';
  }
}

function initializeCareFunctionality() {
  const addCareBtn = document.querySelector('.add-care-btn');
  const historyFilters = document.querySelectorAll('.history-filter');
  
  if (addCareBtn) {
      addCareBtn.addEventListener('click', function() {
          const plantSelect = document.getElementById('plant-select');
          const actionSelect = document.getElementById('action-select');
          const dateInput = document.getElementById('care-date');
          
          if (!plantSelect.value || plantSelect.value === 'Нет растений в коллекции') {
              alert('Сначала добавьте растение в коллекцию!');
              return;
          }
          
          const plant = plantSelect.value;
          const action = actionSelect.value;
          let dateText = 'Только что';
          
          if (dateInput.value) {
              const date = new Date(dateInput.value);
              dateText = date.toLocaleString('ru-RU');
          }
          
          // Добавляем запись в историю пользователя
          if (!users[currentUser].careHistory) {
              users[currentUser].careHistory = [];
          }
          
          users[currentUser].careHistory.unshift({
              plant: plant,
              action: action,
              date: dateText
          });
          
          saveData();
          loadUserCareHistory();
          
          // Сброс даты
          dateInput.value = '';
          
          showNotification('Запись об уходе добавлена!');
      });
  }
  
  // Фильтры истории
  if (historyFilters) {
      historyFilters.forEach(button => {
          button.addEventListener('click', function() {
              historyFilters.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');
              
              const filter = this.textContent.trim();
              const historyItems = document.querySelectorAll('.history-item');
              
              historyItems.forEach(item => {
                  const action = item.querySelector('.history-action').textContent.trim();
                  if (filter === 'Все' || filter === action) {
                      item.style.display = 'flex';
                  } else {
                      item.style.display = 'none';
                  }
              });
          });
      });
  }
}

// ДОБАВЛЯЕМ: Функции для работы с модальными окнами
function showModal(type) {
  closeModals();
  document.getElementById('overlay').style.display = 'block';
  document.getElementById(type === 'login' ? 'loginModal' : 'registerModal').style.display = 'block';
}

function closeModals() {
  ['loginModal', 'registerModal', 'userModal', 'overlay'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
          element.style.display = 'none';
      }
  });
}

function register() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;

  if (!username || !password) {
      alert('Заполните все поля');
      return;
  }
  
  if (users[username]) {
      alert('Пользователь уже существует');
      return;
  }

  users[username] = { 
      password: btoa(password), // простая "шифровка"
      avatar: 'avatar1',
      rank: 'Новичок',
      collection: [],
      careHistory: []
  };
  
  saveData();
  alert('Регистрация успешна!');
  closeModals();
}

function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!users[username] || users[username].password !== btoa(password)) {
      alert('Неверный логин или пароль');
      return;
  }

  currentUser = username;
  saveData();
  updateUIForAuth();
  closeModals();
  showNotification(`Добро пожаловать, ${username}!`);
}

function logout() {
  currentUser = null;
  saveData();
  updateUIForAuth();
  closeModals();
  showNotification('Вы вышли из системы');
}

function toggleUserModal() {
  const modal = document.getElementById('userModal');
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('userProfileContent');
  const actions = document.getElementById('profileActions');
  const avatarSelection = document.getElementById('avatarSelection');

  if (modal.style.display === 'block') {
      modal.style.display = 'none';
      overlay.style.display = 'none';
      if (avatarSelection) avatarSelection.style.display = 'none';
  } else {
    if (currentUser) {
        const user = users[currentUser];
        content.innerHTML = `
            <div class="profile-box">
                <div class="avatar-display">
                    <div>${getAvatarImage(user.avatar)}</div>
                    <button class="edit-profile-btn" onclick="showAvatarSelection()">Сменить аватар</button>
                </div>
                <div class="profile-details">
                    <div class="profile-detail"><strong>Никнейм:</strong> @${currentUser}</div>
                    <div class="profile-detail"><strong>Пароль:</strong> ${'*'.repeat(8)}</div>
                    <div class="profile-detail"><strong>Ранг:</strong> ${user.rank}</div>
                    <div class="profile-detail"><strong>Растений в коллекции:</strong> ${user.collection.length}</div>
                </div>
            </div>
        `;
        actions.innerHTML = `<button class="auth__btn" onclick="logout()">Выйти</button>`;
        
        // Создаем выбор аватарок
        if (avatarSelection) {
            avatarSelection.innerHTML = '';
            for (let i = 1; i <= 5; i++) {
                const avatarDiv = document.createElement('div');
                avatarDiv.className = `avatar-option ${user.avatar === 'avatar' + i ? 'selected' : ''}`;
                avatarDiv.innerHTML = getAvatarImage('avatar' + i);
                avatarDiv.onclick = () => changeAvatar(i);
                avatarSelection.appendChild(avatarDiv);
            }
        }
    }
      else {
          content.innerHTML = `
              <div class="profile-box not-auth">
                  <p>Вы не вошли в систему</p>
              </div>
          `;
          actions.innerHTML = `
              <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
                  <button class="auth__btn" onclick="showModal('login')" style="width: 100%;">Войти</button>
                  <button class="auth__btn" onclick="showModal('register')" style="width: 100%;">Регистрация</button>
              </div>
          `;
          if (avatarSelection) avatarSelection.style.display = 'none';
      }

      modal.style.display = 'block';
      overlay.style.display = 'block';
  }
}

function showAvatarSelection() {
  const avatarSelection = document.getElementById('avatarSelection');
  if (avatarSelection) {
      avatarSelection.style.display = 'grid';
  }
}

function changeAvatar(avatarNum) {
  if (currentUser) {
      users[currentUser].avatar = 'avatar' + avatarNum;
      saveData();
      toggleUserModal(); // закрываем и открываем заново для обновления
      toggleUserModal();
  }
}

// ДОБАВЛЯЕМ: Функция уведомлений
const notificationContainer = document.createElement('div');
notificationContainer.classList.add('notification-container');
document.body.appendChild(notificationContainer);

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

// ДОБАВЛЯЕМ: Фильтрация в каталоге
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

// Остальной существующий код для ухода за растениями
const carePlantSelect = document.getElementById('plant-select');
const actionSelect = document.getElementById('action-select');
const dateInput = document.getElementById('care-date');
const historyList = document.querySelector('.history-list');

// Функция обновления списка растений в селекте ухода
function updateCarePlantSelect() {
  if (!carePlantSelect) return;
  
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

// Наблюдатель за изменениями в коллекции
if (document.querySelector('#collection .grid')) {
  const observer = new MutationObserver(updateCarePlantSelect);
  observer.observe(document.querySelector('#collection .grid'), { childList: true });
}
      
      