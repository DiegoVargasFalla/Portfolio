// active the side menu

const buttonMenu = document.getElementById('menu-action');
const layerSideMenu = document.getElementById('layer-menu');
const sideMenu = document.getElementById('side-menu');

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
