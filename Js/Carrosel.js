let currentIndex = 0;
    
        function nextSlide() {
            showSlide(currentIndex + 1);
        }
    
        function prevSlide() {
            showSlide(currentIndex - 1);
        }
    
        function showSlide(index) {
            const slides = document.querySelectorAll('.carrossel-iten');
            const totalSlides = slides.length - 1;
    
            if (index > totalSlides) {
                index = 0;
            } else if (index < 0) {
                index = totalSlides;
            }
    
            const translateValue = -index * 100 + '%';
    
            slides.forEach((slide) => {
                slide.style.transform = 'translateX(' + translateValue + ')';
            });
    
            currentIndex = index;
        }
