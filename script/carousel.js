document.addEventListener('DOMContentLoaded', () => {
    // initialize carousel
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true,
      duration: 500,
    });
    
    // custom function for autoplaying 
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = 10000,
        activeClass = "active";
  
    setInterval(() => {
        indicatorItems.forEach(el => {
            if (el.classList.contains(activeClass)) {
                sib = el.nextElementSibling;
                if (sib == null) {
                  indicatorItems[0].click();
                } else {
                  sib.click()
                }
            }
        });
    }, slideTime);
  });
