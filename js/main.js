// active the side menu

const buttonMenu = document.getElementById('menu-action');
const layerSideMenu = document.getElementById('layer-menu');
const sideMenu = document.getElementById('side-menu')

// elements navigation side menu
                    
const listElements = [
    startSidMenu = document.getElementById('start-side-menu'), 
    aboutSidMenu = document.getElementById('about-side-menu'),
    skillsSidMenu = document.getElementById('skills-side-menu'),
    projectSidMenu = document.getElementById('projects-side-menu'),
    contactidMenu = document.getElementById('contact-side-menu')
]

function showsideMenu(element1, element2) {
    element1.style.display = 'none'
    element2.style.display = 'none'

    if (element1.style.display === 'none' && element2.style.display === 'none'){
        element1.style.display = 'flex';
        element2.style.display = 'flex';
    }
    else{
        element1.style.display = 'none';
        element2.style.display = 'none';
    }
}

buttonMenu.addEventListener('click', () => {
    showsideMenu(layerSideMenu, sideMenu)
});


// function for each element in the side menu
function closeSideMenu(listElements) {
    listElements.forEach(element => {
        element.addEventListener('click', () =>{
            if (layerSideMenu.style.display === 'flex' && sideMenu.style.display === 'flex') {
                layerSideMenu.style.display = 'none';
                sideMenu.style.display = 'none'; 
            }
        })
    });
}

// call function for each element in the side menu
closeSideMenu(listElements)

// close side menu on click out of side menu 
const layerMenu = document.getElementById('layer-menu')
layerMenu.addEventListener('click', () => {
    if (layerSideMenu.style.display === 'flex' && sideMenu.style.display === 'flex') {
        layerSideMenu.style.display = 'none';
        sideMenu.style.display = 'none';
    }
})

// load screen

function loadScreen() {

    const body = document.body;
    const loader = document.getElementById("cont-major-loader")

    body.style.overflow = "hidden";

    let opacity = 10;

    function decreaseOpacity() {
        if (opacity >= 0) {
            let newOpacity = opacity * 0.2;
            loader.style.opacity = newOpacity;
            opacity--;
            
            setTimeout(decreaseOpacity, 50)
        } else {
            loader.style.display = "none"
            body.style.overflowY = "auto"
            body.style.overflowX = "hidden"

        }
    }

    setTimeout(decreaseOpacity, 1200)
    
}

function percentage() {
    let percentage = document.getElementById("percentage");
    let num = 0
    
    function percentageTime() {
        if (num <= 100) {
            percentage.textContent = num + "%"
            num++
            setTimeout(percentageTime, 14)
        }
    }

    percentageTime()

}

document.addEventListener("DOMContentLoaded", percentage)
document.addEventListener("DOMContentLoaded", loadScreen())


// buttons variables
const buttonViewFront = document.getElementById('view-front')
const buttonViewBack = document.getElementById('view-back')
const buttonViewOther = document.getElementById('view-other')

// content all skills
const contFrontSkills = document.getElementById('frontend-skills')
const contBackendSkills = document.getElementById('backend-skills')
const contOtherSkills = document.getElementById('other-skills')

const listContiners = [document.getElementById('frontend-skills'), 
                        document.getElementById('backend-skills'), 
                        document.getElementById('other-skills')
                    ]

// list elements
const data = [
    {id: 1, img:'assets/img/Postman.webp', title:'Postman', key:'other', open:'false'},
    {id: 1, img:'assets/img/bash.svg', title:'Bash', key:'back', open:'false'},
    {id: 1, img:'assets/img/linux.svg', title:'Linux', key:'back', open:'false'}
]

// button view more
function viewMore(button, listImg, continer) {

    button.addEventListener(
        'click', () => {
            listImg.forEach(
                item => {
                    if (item.key === 'front' && item.open === 'false' && button.id === 'view-front') {
                        const card = document.createElement('div')
                        card.classList.add('cont-icons-skills')
    
                        const img = document.createElement('img');
                        img.src = item.img;
                        img.classList.add('icon-skills')
    
                        const title = document.createElement('div')
                        title.classList.add('name-icons');
                        title.textContent = item.title;
    
                        card.appendChild(img);
                        card.appendChild(title);
    
                        continer.appendChild(card)
                        button.textContent = 'Ver menos'
                        item.open = 'true';
                    }
                    else if (item.key === 'back' && item.open === 'false' && button.id === 'view-back') {
                        const card = document.createElement('div')
                        card.classList.add('cont-icons-skills')
    
                        const img = document.createElement('img');
                        img.src = item.img;
                        img.classList.add('icon-skills')
    
                        const title = document.createElement('div')
                        title.classList.add('name-icons');
                        title.textContent = item.title;
    
                        card.appendChild(img);
                        card.appendChild(title);
    
                        continer.appendChild(card)
                        button.textContent = 'Ver menos';
                        item.open = 'true';
                    }
                    else if (item.key === 'other' && item.open === 'false' && button.id === 'view-other') {
                        const card = document.createElement('div');
                        card.classList.add('cont-icons-skills');
    
                        const img = document.createElement('img');
                        img.src = item.img;
                        img.classList.add('icon-skills');
    
                        const title = document.createElement('div');
                        title.classList.add('name-icons');
                        title.textContent = item.title;
    
                        card.appendChild(img);
                        card.appendChild(title);
    
                        continer.appendChild(card);
                        button.textContent = 'Ver menos';
                        item.open = 'true';
                    }
                    else {

                        let numCards = continer.getElementsByClassName('cont-icons-skills').length - 4;
                        if (button.id === 'view-front' && continer.id === 'frontend-skills' && item.open === 'true' && item.key === 'front') {
                            for (let i = 0; i < numCards; i++) {
                                continer.removeChild(continer.lastElementChild);
                            }
                            item.open = 'false';
                            button.textContent = 'Ver mas'
                        }
                        else if (button.id === 'view-back' && continer.id === 'backend-skills' && item.open === 'true' && item.key === 'back') {
                            console.log("in view more backend-skills")
                            for (let i = 0; i < numCards; i++) {
                                continer.removeChild(continer.lastElementChild);
                                console.log("deleted child")
                            }
                            item.open = 'false';
                            button.textContent = 'Ver mas'
                        }
                        else if (button.id === 'view-other' && continer.id === 'other-skills' && item.open === 'true' && item.key === 'other') {
                            for (let i = 0; i < numCards; i++) {
                                continer.removeChild(continer.lastElementChild);
                            }
                            item.open = 'false';
                            button.textContent = 'Ver mas'
                        }
                    }
                }
            )
        }
    )
}

viewMore(buttonViewFront, data, contFrontSkills)
viewMore(buttonViewBack, data, contBackendSkills)
viewMore(buttonViewOther, data, contOtherSkills)
