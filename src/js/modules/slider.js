// // document.addEventListener('DOMContentLoaded', function () {
// //   const slides = document.querySelector('.slides');
// //   let currentIndex = 0;
// //   const totalSlides = slides.children.length;

// //   function showSlide(index) {
// //     slides.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
// //   }

// //   function nextSlide() {
// //     currentIndex = (currentIndex + 1) % totalSlides;
// //     showSlide(currentIndex);
// //   }

// //   const autoSlideInterval = setInterval(nextSlide, 3000);

// //   document.querySelector('.prev').addEventListener('click', function () {
// //     currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
// //     showSlide(currentIndex);
// //     resetAutoSlide();
// //   });

// //   document.querySelector('.next').addEventListener('click', function () {
// //     nextSlide();
// //     resetAutoSlide();
// //   });

// //   function resetAutoSlide() {
// //     clearInterval(autoSlideInterval);
// //     autoSlideInterval = setInterval(nextSlide, 3000);
// //   }
// // });


// document.addEventListener('DOMContentLoaded', function () {
//   const slides = document.querySelector('.slides');
//   let currentIndex = 0;
//   const totalSlides = slides.children.length;

//   function showSlide(index) {
//     // Ensure that index wraps around correctly
//     const slideWidth = slides.children[0].offsetWidth;
//     const offset = index * slideWidth;
//     slides.style.transform = `translateX(-${offset}px)`;
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     showSlide(currentIndex);
//   }

//   var autoSlideInterval = setInterval(nextSlide, 3000);

//   document.querySelector('.prev').addEventListener('click', function () {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
//     showSlide(currentIndex);
//     resetAutoSlide();
//   });

//   document.querySelector('.next').addEventListener('click', function () {
//     nextSlide();
//     resetAutoSlide();
//   });

//   function resetAutoSlide() {
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = setInterval(nextSlide, 3000);
//   }
// });
