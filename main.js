const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
           duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);

        });
    });
}

const footer_scrollers = document.querySelectorAll('.footer_scroller');
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}
function addAnimation(){
    footer_scrollers.forEach((footer_scroller) => {
        footer_scroller.setAttribute("data-animated", true);
    })
}