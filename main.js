
document.addEventListener('DOMContentLoaded', function() {
    let min = 12, max = 28;
    let step = 2;
    let defaultSize = 16;
    let current = parseInt(localStorage.getItem('fontSize')) || defaultSize;
    function setFont(size) {
        // غيّر حجم الخط لكل العناصر النصية
        const tags = ['p','h1','h2','h3','h4','h5','h6','span','a','li','td','th','div','button','label'];
        tags.forEach(tag => {
            document.querySelectorAll(tag).forEach(function(el) {
                el.style.fontSize = size + 'px';
            });
        });
        localStorage.setItem('fontSize', size);
    }
    setFont(current);
    let incBtns = document.querySelectorAll('#incFont');
    let decBtns = document.querySelectorAll('#decFont');
    incBtns.forEach(function(incBtn) {
        incBtn.onclick = function() {
            if(current < max) {
                current += step;
                setFont(current);
            }
        };
    });
    decBtns.forEach(function(decBtn) {
        decBtn.onclick = function() {
            if(current > min) {
                current -= step;
                setFont(current);
            }
        };
    });

    // إذا كان هناك نموذج تواصل على الصفحة، أضف معالجة الإرسال
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // إعلام المستخدم بأن الرسالة تم إرسالها
            alert('تم الإرسال!');
            contactForm.reset();
        });
    }
});
