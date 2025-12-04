function getBalance() {
  return parseInt(localStorage.getItem('htmlgh_balance') || '0');
}

function setBalance(amount) {
  localStorage.setItem('htmlgh_balance', amount.toString());
  document.getElementById('balance').textContent = `HTMLoins: ${amount}`;
}

function getLastClaimDate() {
  return localStorage.getItem('htmlgh_last_claim');
}

function setLastClaimDate(dateStr) {
  localStorage.setItem('htmlgh_last_claim', dateStr);
}

function claimReward() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const lastClaim = getLastClaimDate();

  if (lastClaim === today) {
    document.getElementById('reward-status').textContent = 'Вы уже получили награду сегодня!';
    return;
  }

  const balance = getBalance();
  setBalance(balance + 1);
  setLastClaimDate(today);
  document.getElementById('reward-status').textContent = '✅ Получено 1 HTMLoin!';
}

// Инициализация баланса на странице
document.addEventListener('DOMContentLoaded', () => {
  setBalance(getBalance());
  document.getElementById('claim-reward-btn').addEventListener('click', claimReward);
});
