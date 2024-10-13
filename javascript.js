const sliders = document.querySelectorAll(".container_slider")
const sliderDots = document.querySelectorAll(".slider_dots .slider__dots-item");

let currentIndex = 0;

function showSlider(index){
    sliders.forEach((slide, i)=>{
      slide.classList.toggle('slider_active', i==index)
  });
}
function ActiveDot(index){
    sliderDots.forEach((dot, j)=>{
      dot.classList.toggle('dots_active', j==index)
  });
}

document.querySelector('.btn_right').addEventListener('click', ()=>{
  currentIndex = (currentIndex + 1) % sliders.length;
  showSlider(currentIndex);
  ActiveDot(currentIndex);
})

document.querySelector('.btn_left').addEventListener('click', ()=>{
  currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
  showSlider(currentIndex);
  ActiveDot(currentIndex);
})

showSlider(currentIndex);
ActiveDot(currentIndex);
