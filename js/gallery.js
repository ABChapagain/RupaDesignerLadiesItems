/* curator-feed-default-feed-layout */
// (function () {
//     var i, e, d = document,
//         s = "script";
//     i = d.createElement("script");
//     i.async = 1;
//     i.src = "https://cdn.curator.io/published/e49a2cc2-671b-4be0-a8e5-de258e9d09e7.js";
//     e = d.getElementsByTagName(s)[0];
//     e.parentNode.insertBefore(i, e);
// })();


// Selecting all required elements

const filterItem = document.querySelector(".gallery-lists");
const filterImg = document.querySelectorAll(".item-box");

window.onload = () => { // once window loaded
  filterItem.onclick = (selectedItem) => { //when user clicked on filterItem div
    if(selectedItem.target.classList.contains("list")) { //is user click element has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which in in the first element
      selectedItem.target.classList.add("active"); //add that active class on the user selected element

      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name name
      console.log(filterName);

      filterImg.forEach((image)=> {
        let filterImages = image.getAttribute("data-name"); //getting image data-name value
        // if user selected item data-name value is equal to image data-name value
        if((filterImages == filterName) || (filterName == "all")) { 
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  
  }

}
