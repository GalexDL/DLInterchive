const carousel = document.querySelector(".carousel");
arrowIcons = document.querySelectorAll(".storewrapper i");
firstBut = document.querySelectorAll("a")[0];



let firstButWidth = firstBut.clientWidth + 280;


arrowIcons.forEach(icon => {
  icon.addEventListener("click", () =>{
    console.log(icon);
    carousel.scrollLeft += icon.id =="left" ? -firstButWidth : firstButWidth;
  });
});











