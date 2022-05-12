$(document).ready(function(){
    // if (!$('body').hasClass('template-index')) {
    //     $('.header-wrapper').addClass('page-header-fixed');
    //     $('.page-container').addClass('fixed-scroll');
    // }
});

$(window).resize(function(){
  console.log('resize');
//   contentPosition();
});

// $(window).scroll(function(){
//     var sticky = $('.header-wrapper'),
//         scroll = $(window).scrollTop();
  
//     if ($('body').hasClass('template-index')) {
//         if (scroll >= 10) {
//             sticky.addClass('header-fixed');
//         } else {
//             sticky.removeClass('header-fixed');
//             $('.page-container').removeClass('fixed-scroll');
//         }
//     } else {
//         if (scroll >= 10) {
//             sticky.addClass('header-fixed show-shadow');
//         } else {
//             sticky.removeClass('header-fixed show-shadow');
//         }
//     }
// });


this.tooltips = document.querySelectorAll(".all-tooltip .tooltipCustom");
    this.fullDiv = document.querySelector("section");
    this.container = document.querySelector(".container");

    this.tooltips.forEach((tooltip) => {
      const pin = tooltip.querySelector(".pin");
      const content = tooltip.querySelector(".tooltip-content");
      const close = tooltip.querySelector(".tooltip-content .closebtn");
      pin.addEventListener("mouseover", () => {
        tooltip.classList.add("active");
      });
      pin.addEventListener("mouseleave", () => {
        if (!tooltip.classList.contains("content-hover")) {
          tooltip.classList.remove("active");
        }
      });
      content.addEventListener("mouseover", () => {
        //clearTimeout(this.timeoutId);
        tooltip.classList.add("active");
        tooltip.classList.add("content-hover");
      });
      content.addEventListener("mouseleave", () => {
        tooltip.classList.remove("active");
        tooltip.classList.remove("content-hover");
      });
      close.addEventListener("click", () => {
        tooltip.classList.remove("active");
        tooltip.classList.remove("content-hover");
      });
    });


//     function contentPosition() {
//       this.tooltips.forEach((tooltip) => {
//         let pin = tooltip.querySelector(".pin");
//         let content = tooltip.querySelector(".tooltip-content");
//         let arrow = tooltip.querySelector(".arrow");
//         const pinLeft = pin.offsetLeft;
//         content.style.left = 'inherit';
//         content.style.top = 'inherit'; 
//         if (pinLeft + content.offsetWidth / 2 > this.fullDiv.offsetWidth) {
//             console.log('first', pinLeft + content.offsetWidth / 2 > this.fullDiv.offsetWidth);
//           const extraLeft =
//             this.fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
//           content.style.left =
//             pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
//           content.style.top = pin.offsetTop + 30 + "px";
//         } else if (
//           pin.offsetLeft + this.container.offsetLeft <
//           content.offsetWidth / 2
          
//         ) {
          
//             console.log('scind');
//         } else {
//           content.style.left = pinLeft + 30 + "px";
//           content.style.top = pin.offsetTop + "px";
//           arrow.style.top = pin.offsetHeight  / 2 + "px";
          
//           console.log('thirs');
//         }
//         arrow.style.left = pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
      
//       });
//   }

//   window.addEventListener("load", contentPosition);
//   // window.addEventListener("resize", contentPosition);