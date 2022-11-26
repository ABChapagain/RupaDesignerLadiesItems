;(function init() {
  const date = new Date()
  const footerParagraph = document.getElementById('footer-copyright')

  footerParagraph.innerHTML = `&copy; ${date.getFullYear()} Rupa Designer Ladies Items. Made with ❤️ by <a href="https://www.achyutchapagain.com.np" target="_blank">ABChapagain</a>`
})()

document.write(`<script src="js/navbar.js"></script>`)
document.write(`<script src="js/testimonials.js"></script>`)
document.write(`<script src="js/faq.js"></script>`)
document.write(`<script src="js/messenger.js"></script>`)

$('a, .scroll').on('click', function (e) {
  if (this.hash != '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    )
  }
})
