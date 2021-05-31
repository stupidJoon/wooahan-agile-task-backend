const numberSpan = document.querySelector('span');
const numberInput = document.querySelector('input');
const retrieveButton = document.querySelector('#retrieve');
const addButton = document.querySelector('#add');
const modifyButton = document.querySelector('#modify');
const resetButton = document.querySelector('#reset');

retrieveButton.addEventListener('click', async () => {
  const response = await fetch('/api/number');
  const number = await response.json();
  numberSpan.textContent = number;
});

addButton.addEventListener('click', async () => {
  const number = parseInt(numberInput.value);
  await fetch('/api/number', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ number })
  });
});

modifyButton.addEventListener('click', async () => {
  const number = parseInt(numberInput.value);
  await fetch('/api/number', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ number })
  });
});

resetButton.addEventListener('click', async () => {
  await fetch('/api/number', {
    method: 'DELETE'
  });
});
