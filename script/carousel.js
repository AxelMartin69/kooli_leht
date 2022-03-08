document.addEventListener('DOMContentLoaded', () => {
    // initialize carousel
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
      indicators: true,
      height: 900,
      transition: 500,
      interval: 3000
    });
    
    // custom function for autoplaying 
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = 3000,
        fullWidth = false,
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

