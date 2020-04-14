
// js для секции: ingridients
let listIngr = document.querySelector('.ingridients__slider-list');
let contIngrWidth = document.querySelector('.ingridients__slider').clientWidth;
let actionIngr = document.querySelector('.ingridients__pages');
var posIngr = 0;

function calcIngrWidth(){
    const counterIngr = listIngr.children.length;
    const oneIngrWidth = counterIngr * contIngrWidth;
    listIngr.style.width = `${oneIngrWidth}px`;
}
function handlerClick(elem){
    if(elem.target.tagName === 'IMG'){
        slide(elem.target);
    }
}
function slide(vector){
    const vectorIngr = vector.dataset.vector;
    if(vectorIngr === 'next'){
        slideTo(vectorIngr);
    } else {
        slideTo(vectorIngr);
    }
}
function slideTo(vectorDirection){
    const activIngr = listIngr.querySelector('.vision');
    if(vectorDirection === 'next'){
        var nextIngrid = activIngr.nextElementSibling;
    } else {
        var prevIngrid = activIngr.previousElementSibling;
    }
    if(nextIngrid){
        posIngr -= contIngrWidth;
        activIngr.classList.remove('vision');
        nextIngrid.classList.add('vision');
        transf(posIngr);
    } else if(prevIngrid) {
        posIngr += contIngrWidth;
        activIngr.classList.remove('vision');
        prevIngrid.classList.add('vision');
        transf(posIngr);
    }
}
function transf(pos){
    listIngr.style.transform = `translateX(${pos}px)`;
}

window.addEventListener('load', calcIngrWidth);
actionIngr.addEventListener('click', handlerClick);
// js для секции: ingridients


//js для секции: team
const workers = document.querySelectorAll(".accordeon__item");
const teamAccord = document.querySelector(".accordeon");

teamAccord.addEventListener("click", function(event){
    event.preventDefault();
    const target = event.target;

    if(target.classList.contains("accordeon__link")){
        const worker = target.parentNode;
        const content = target.nextElementSibling;
        const contentHeight = content.firstElementChild.clientHeight;

        for(const iterator of workers){
            if(iterator !== worker){
                iterator.classList.remove("active");
                iterator.lastElementChild.style.height = 0;
            }
        }

            if(worker.classList.contains("active")){
                worker.classList.remove("active");
                content.style.height = 0;
            } else {
                worker.classList.add("active");
                content.style.height = contentHeight + "px";
            }
        }
    });
//js для секции: team


//js для секции: menupage
const menupageElement = document.querySelector("#menupage__accordeon");
let lastActive;
menupageElement.addEventListener("click", function(e){
                e.preventDefault();
                if(e.target.classList.contains("menupage__accordeon-item") || e.target.classList.contains("menupage__accordeon-link") || e.target.classList.contains("menupage__accordeon-link-text")){
                    if(lastActive){
                        lastActive.classList.remove("active");
                    }
                    lastActive = e.target.parentNode;
                    lastActive.classList.add("active");
                    }
});
//js для секции: menupage


//js для секции: feedback
function feedPopup() {
    const feedList = document.querySelector('.feedback__list');
    feedList.addEventListener('click', function(e) {
        if(e.target.classList.contains('button')){

            const grayFeed = document.querySelector('.feed__back').style;
            console.log(grayFeed);

            const title = e.target.parentNode.querySelector('.feedback__title').textContent;
            const text = e.target.parentNode.querySelector('.feedback__text').textContent;
            renderPopup(title, text);
        }
    })
    function renderPopup(title, text){
        const popup = document.querySelector('.popup');

        popup.classList.add('popup--active');

        popup.querySelector('.popup__title').textContent = title;
        popup.querySelector('.popup__text').textContent = text;

        popup.querySelector('.popup__close').addEventListener('click', e=> {
            e.preventDefault();
            popup.classList.remove('popup--active');
        })
    }
}
feedPopup();
//js для секции: feedback


//one page scroll
let onePageScroll = () => {
    const content = document.querySelector('.main-content');
    const pages = content.querySelectorAll('.section');
    const points = document.querySelectorAll('.pagination__item');
    const dataScrollTo = document.querySelectorAll('[data-scroll-to]');
    let inScroll = false;
    pointNav();
    wheel();
    keyPush();
    function doTransform(numPage){
        const position = `${numPage * (-100)}%`;

        if(inScroll)return;
        inScroll = true;

        addClass(pages);

        setTimeout(()=> {
            addClass(points);
            inScroll = false;
        }, 1000);
        
        content.style.transform = `translateY(${position})`;

        function addClass(arr){
            arr[numPage].classList.add('is-active');
            for(const item of arr){
                if(item != arr[numPage]){
                    item.classList.remove('is-active');
                }
            }
        }
    }
    function pointNav(){
        for(const point of dataScrollTo){
            point.addEventListener('click', e=> {
                doTransform(point.dataset.scrollTo);
            })
        }
    }
    function wheel(){
        document.addEventListener('wheel', e=>{
            let direct = e.deltaY > 0 ? 'up' : 'down';
            scrollToPage(direct);
        })
    }
    function keyPush(){
        document.addEventListener('keydown', e=> {
            switch(e.keyCode){
                case 38:
                    scrollToPage('down');
                    break;
                case 40:
                    scrollToPage('up');
                    break;
                default:
                    break;
            }
        })
    }
    function definePage(arr){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].classList.contains('is-active')){
                return {
                    activeIndex: i,
                    prevIndex: arr[i].previousElementSibling,
                    nextIndex: arr[i].nextElementSibling
                }
            }
        }
    }
    function scrollToPage(direction){
        const page = definePage(pages);
        if(direction === 'up' && page.nextIndex){
            let pageNumber = page.activeIndex + 1;
            doTransform(pageNumber);
        }
        if(direction === 'down' && page.prevIndex){
            let pageNumber = page.activeIndex - 1;
            doTransform(pageNumber);
        }
    }
}
onePageScroll()
//one page scroll

//hamburger menu:
let burger = document.querySelector('.burger');
let overlay = document.querySelector('.burg__overlay');
let body = document.querySelector('.body');
let links = document.querySelectorAll('.overlay-menu-link');

links.forEach(function(el){
    el.addEventListener('click', toggleBurg);
})
function toggleBurg(){
    burger.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--active');
    //body.classList.toggle('body--active-menu');
}
burger.addEventListener('click', toggleBurg);
//hamburger menu:




