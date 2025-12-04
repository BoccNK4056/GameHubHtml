let currentUser = null;

function saveUser(username) {
  localStorage.setItem('htmlgh_user', username);
  currentUser = username;
  updateUI();
}

function logout() {
  localStorage.removeItem('htmlgh_user');
  currentUser = null;
  updateUI();
}

function loadUser() {
  const saved = localStorage.getItem('htmlgh_user');
  if (saved) {
    currentUser = saved;
    updateUI();
  }
}

function updateUI() {
  const usernameDisplay = document.getElementById('username-display');
  const loginSection = document.getElementById('auth-section');
  const rewardSection = document.getElementById('reward-section');
  const gamesSection = document.getElementById('games-section');
  const shopSection = document.getElementById('shop-section');
  const logoutBtn = document.getElementById('logout-btn');

  if (currentUser) {
    usernameDisplay.textContent = currentUser;
    loginSection.style.display = 'none';
    rewardSection.style.display = 'block';
    gamesSection.style.display = 'block';
    shopSection.style.display = 'block';
    logoutBtn.style.display = 'inline-block';
  } else {
    usernameDisplay.textContent = 'Гость';
    loginSection.style.display = 'block';
    rewardSection.style.display = 'none';
    gamesSection.style.display = 'none';
    shopSection.style.display = 'none';
    logoutBtn.style.display = 'none';
  }
}

document.getElementById('login-btn').addEventListener('click', () => {
  const input = document.getElementById('username-input');
  const name = input.value.trim();
  if (name && name.length >= 2) {
    saveUser(name);
    input.value = '';
  } else {
    alert('Имя должно содержать хотя бы 2 символа.');
  }
});

document.getElementById('logout-btn').addEventListener('click', logout);

// Загрузка при старте
loadUser();
