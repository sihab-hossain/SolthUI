function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
  }

/*for-slide*/
/*features-section-2*/ 
const imagePaths = [
      "img/slide-image.png",
      "img/hero-image.png",
      "img/pepsi-logo.png"
    ];

    function changeImage(index) {
      document.getElementById('mainImage').src = imagePaths[index];
    }

/*testimonials-section*/    
const btn = document.getElementById('seeMoreBtn');
const cards = document.querySelectorAll('.card:nth-of-type(n+5)');
let expanded = false;

btn.addEventListener('click', () => {
expanded = !expanded;
cards.forEach(card => {
  card.classList.toggle('show', expanded);
});
btn.textContent = expanded ? 'See Less' : 'See More';
});   

/*FAQ-section*/
const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('open');
        });
        item.classList.toggle('open');
      });
    });