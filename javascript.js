
// js для секции: ingridients
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const ingridientsItem = document.querySelector(".ingridients__main");

var rightStyle = getComputedStyle(ingridientsItem).right;
var currentRight = parseInt(rightStyle);

var widthStyle = getComputedStyle(ingridientsItem).width;
var currentWidth = parseFloat(widthStyle);

const itemsLenght = document.getElementsByClassName("ingridients__main-item").length;
var maxWidth = currentWidth * itemsLenght;


right.addEventListener("click", function(e){
    e.preventDefault();
    if(!currentRight){
        currentRight = 0;
    }
    if(currentWidth >= maxWidth){
        currentWidth += currentWidth;
        ingridientsItem.style.right = currentWidth + "px";
        console.log(ingridientsItem.style.right);
    }
});
left.addEventListener("click", function(e){
    e.preventDefault();
    if(!currentRight){
        currentRight = 0;
    }
    if(currentWidth > maxWidth){
        currentWidth -= currentWidth;
        ingridientsItem.style.right = currentWidth + "px";
        console.log(ingridientsItem.style.right);
    }
});


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


            //js для секции: feedback
            const openButton = document.querySelectorAll("#openOverlay");
            const sectionInner = document.querySelector(".feedback");
            const buttonLenght = document.getElementsByClassName("feedback_button").length;
            const successOverlay = createOverlay("Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.");

            for(var i = 0; i < buttonLenght; i++){
                openButton[i].addEventListener('click', function(e){
                e.preventDefault();
                sectionInner.appendChild(successOverlay); 
                });
            }

            function createOverlay(content){
                const overlayElement = document.createElement("div");
                overlayElement.classList.add("overlay");
                const templateOverlay = document.querySelector("#overlayTemplate");
                overlayElement.innerHTML = templateOverlay.innerHTML;
                const closeOverlay = overlayElement.querySelector(".closeOverlay");
                overlayElement.addEventListener("click", function(e){
                    if(e.target === overlayElement){
                        sectionInner.removeChild(overlayElement);
                    }
                });
                closeOverlay.addEventListener('click', function(e){
                    e.preventDefault();
                    sectionInner.removeChild(overlayElement);
                });
                const newElement = overlayElement.querySelector(".contentOverlay");
                newElement.innerHTML = content;
                return overlayElement;
            }