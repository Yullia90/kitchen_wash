var openButtons = document.querySelectorAll('.button-about');
var modals = document.querySelectorAll('.modal');

if (openButtons.length > 0) {
  openButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modalId = button.dataset.modalId;
      var modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';

        // Додати обробник подій для закриття модального вікна при натисканні на крестик
        var closeButtons = modal.getElementsByClassName('close');
        for (var i = 0; i < closeButtons.length; i++) {
          closeButtons[i].addEventListener('click', function () {
            modal.style.display = 'none';
          });
        }
      }
    });
  });
}

// Додати обробник подій для закриття модального вікна при натисканні на клавішу Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modals.forEach(function (modal) {
      modal.style.display = 'none';
    });
  }
});

// Додати обробник подій для закриття модального вікна при натисканні де-небудь на сторінці
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});
