//document.getElementsByClassName('main-title')[0].style.color = 'red'; //меняем цвет заголовка
//робимо скрол от кнопки Новое меню
document.getElementById('main-action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

//делаем скрол по якорям
let links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}