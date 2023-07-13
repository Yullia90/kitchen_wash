function zoomImage(image) {
  // Створюємо модальне вікно для збільшення картинки
  var modalImageCard = document.createElement('div');
  modalImageCard.classList.add('modal-image-card');
  modalImageCard.addEventListener('click', function () {
    modalImageCard.remove(); // При кліку на модальне вікно воно закриється
  });

  // Створюємо зображення в модальному вікні
  var modalImage = document.createElement('img');
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalImage.classList.add('modal-image');

  // Додаємо зображення в модальне вікно
  modalImageCard.appendChild(modalImage);

  // Додаємо модальне вікно до body
  document.body.appendChild(modalImageCard);
}

// Отримання всіх елементів зображень слайдера
const sliderItems = document.querySelectorAll('.slider-item');

// Перехід до наступного зображення при кліку на поточне зображення
sliderItems.forEach(item => {
  item.addEventListener('click', () => {
    // Вибір наступного елемента
    const nextItem = item.nextElementSibling || sliderItems[0];

    // Зміна стилів для показу наступного зображення
    item.classList.remove('active');
    nextItem.classList.add('active');
  });
});
