document.write(`<script src="js/navbar.js"></script>`);
document.write(`<script src="js/gallery.js"></script>`);
document.write(`<script src="js/our-team.js"></script>`);
document.write(`<script src="js/testimonials.js"></script>`);
document.write(`<script src="js/faq.js"></script>`);
document.write(`<script src="js/messenger.js"></script>`);

$('a, .scroll').on('click', function(e) {
    if(this.hash != '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
        scrollTop: $(hash).offset().top - 50
        },
        800
      );
    }
  });