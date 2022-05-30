/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 this.tooltips = document.querySelectorAll(".all-tooltip .tooltipCustom");
 this.fullDiv = document.querySelector(".full-width");
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


    function contentPosition() {
      this.tooltips.forEach((tooltip) => {
        let pin = tooltip.querySelector(".pin");
        let content = tooltip.querySelector(".tooltip-content");
        let arrow = tooltip.querySelector(".arrow");
        const pinLeft = pin.offsetLeft;
        content.style.left = 'inherit';
        content.style.top = 'inherit'; 
        if (pinLeft + content.offsetWidth / 2 > this.fullDiv.offsetWidth) {
          const extraLeft =
            this.fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
          content.style.left =
            pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
          content.style.top = pin.offsetTop + 30 + "px";
        } else if (
          pin.offsetLeft + this.container.offsetLeft <
          content.offsetWidth / 2
        ) {
        } else {
          content.style.left = pinLeft + 30 + "px";
          content.style.top = pin.offsetTop - 6 + "px";
          arrow.style.top = pin.offsetHeight  / 2 + "px";
        }
        arrow.style.left = pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
   
      });
  }

window.addEventListener("load", contentPosition);
window.addEventListener("resize", contentPosition);



// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// window.addEventListener("load", initMap);
