$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  // Keyboard slide
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },
  // Keyboard slide
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню')
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
});

var modalButton = $ ("[data-toggle=modal]")
var closeModalButton = $(".modal__close")
modalButton.on('click', openModal)
closeModalButton.on("click",closeModal)

function openModal() {
  var modalOverlay = $(".modal__overlay")
  var modalDialog = $(".modal__dialog")
  modalOverlay.addClass('modal__overlay--visible')
  modalDialog.addClass('modal__dialog--visible')
}

function closeModal(event) {
  event.preventDefault()
  var modalOverlay = $(".modal__overlay")
  var modalDialog = $(".modal__dialog")
  modalOverlay.removeClass('modal__overlay--visible')
  modalDialog.removeClass('modal__dialog--visible')
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    var modalOverlay = $(".modal__overlay")
    var modalDialog = $(".modal__dialog")
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }
})

// Валидация 

$(".modal__form").validate({
  errorClass: "modal-error",
  messages: {
    name: {
      required: "Please specify your full name",
      minlenght: "The name must be at least 2 characters long",
    },
    phone: "Please specify your phone",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
})

$(".footer__form").validate({
  errorClass: "footer-error",
  messages: {
    name: {
      required: "Please specify your full name",
      minlenght: "The name must be at least 2 characters long",
    },
    phone: "Please specify your phone"
  }
})

$(".newsletter__form").validate({
  errorClass: "subs-error",
  messages: {
    email: {
      email: "Email address format invalid",
    }
  }
})

$(document).ready(function(){
  $(".input--phone").mask("+7 (999) 999-99-99");
});

AOS.init();

});