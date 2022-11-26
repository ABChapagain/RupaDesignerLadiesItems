// Selecting all required elements

const filterItem = document.querySelector('.gallery-lists')
const filterImg = document.querySelectorAll('.item-box')

window.onload = () => {
  // once window loaded
  filterItem.onclick = (selectedItem) => {
    //when user clicked on filterItem div
    if (selectedItem.target.classList.contains('list')) {
      //is user click element has .item class
      filterItem.querySelector('.active').classList.remove('active') //remove the active class which in in the first element
      selectedItem.target.classList.add('active') //add that active class on the user selected element

      let filterName = selectedItem.target.getAttribute('data-name') //getting data-name name

      filterImg.forEach((image) => {
        let filterImages = image.getAttribute('data-name') //getting image data-name value
        // if user selected item data-name value is equal to image data-name value
        if (filterImages == filterName || filterName == 'all') {
          image.classList.remove('hide')
          image.classList.add('show')
        } else {
          image.classList.add('hide')
          image.classList.remove('show')
        }
      })
    }
  }
}
