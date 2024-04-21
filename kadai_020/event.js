const btm = document.getElementById('btn');
const text = document.getElementById('text');

function handleclick() {
  text.textContent = 'ボタンをクリックしました';
}

btn.addEventListener('click', handleclick);