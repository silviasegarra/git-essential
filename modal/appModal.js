const openBtn = document.querySelector(".js-open")  //BUTTON -> WE SELECT IT IN ORDER TO DO AN ACTION
const modalBg = document.getElementById("modal-background") //MODAL-BACKGROUND -> WE SELECT IT IN ORDER TO DO AN ACTION
const modalBox = document.getElementById("modal-box") // MODAL-BOX -> WE SELECT IT IN ORDER TO DO AN ACTION

//WE ADD THE INVENT LISTENER FOR OUR BUTTON TO OPEN OUR MODAL
openBtn.addEventListener('click', function(event){
    event.preventDefault() // we add this in order make our button to do something different
//in order to use our #modal-background.active and #modal-box.active we need to create a class call active
    modalBg.classList.add('active')
    modalBox.classList.add('active')
})
//CLOSE BUTTON -> REMOVE
const closeBtns = document.querySelectorAll(".js-close")
closeBtns.forEach(node => {
    node.addEventListener('click', function(event){
        event.preventDefault()
        modalBg.classList.remove('active')
        modalBox.classList.remove('active')
    })
})
