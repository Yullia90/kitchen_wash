//при нажатии на кнопку купить, попадаем оформить заказ
let buttons = document.getElementsByClassName('product-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
});

//обращаемся к каждому полю
let sink = document.getElementById('sink');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let promo = document.getElementById('promo');

//делаем валидацию форми
document.getElementById('order-action').onclick = function () {
  let hasError = false;
  [sink, name, phone].forEach(item => {
    if (!item.value) {
      item.parentElement.style.background = 'red';
      hasError = true;
    } else {
      item.parentElement.style.background = '';
    }
  });
  //проверяем на ошибки
  if (!hasError) {
    [sink, name, phone, promo].forEach(item => {
      item.value = ' '; //чистим строку
    });
    alert('Дякую за замовлення!');
  }
};
