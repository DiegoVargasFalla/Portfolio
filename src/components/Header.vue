<template>
    <header class="header">
        <div class="cont-name">
            <a href="#sec-start" class="name">diegodev</a>
        </div>
        <nav class="cont-nav">
            <ul class="nav-ul">
                <li class=""><a href="#sec-start" class="linear items">Inicio</a></li>
                <li class=""><a href="#about-me" class="linear items">Sobre mi</a></li>
                <li class=""><a href="#skills" class="linear items">Habilidades</a></li>
                <li class=""><a href="#projects" class="linear items">Proyectos</a></li>
                <li class=" transform-contact"><a href="#sec-footer" class="contact items">Contactame</a></li>
            </ul>
        </nav>
        <div class="div-menu-header">
            <button class="button-menu" id="menu-action">
                <i class="fas fa-solid fa-list"></i>
            </button>
        </div>
    </header>
</template>

<script setup></script>

<style scoped>

.header{
    /* background-color: rgba(183, 43, 173, 0.3); */
    position: fixed;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 1.5rem;
    padding: 0.2rem 2rem;
    border-radius: 2rem;
    z-index: 200;
    box-shadow: 0 5px 10px rgba(67, 2, 63, 0.745), inset 2px 1px 5px rgba(203, 203, 203, 0.633);
    background: rgba(149, 15, 147, 0.197);
    -webkit-backdrop-filter: blur(0.4rem) brightness(0.4);
            backdrop-filter: blur(0.4rem) brightness(1);
}

.cont-name{
    /* background-color: orange; */
    animation-name: left-right;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0;
}

.name{
    font-family: "Kanit", sans-serif;
    /* background-color: red; */
    /* visibility: hidden; */
    font-weight: 400;
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
    position: relative;
    text-decoration: none;
    /* margin-left: 2.5rem; */
}

.nav-ul {
    position: relative;
    /* height: 2.5rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-wrap: wrap;
    /* background-color: orange; */
    list-style-type: none;
}

.items{
    position: relative;
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: white;
    /* margin-left: 22px; */
    text-decoration: none;

    animation-name: top-bottom;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0;
    /* background-color: red; */
}

.linear:hover:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: whitesmoke;
    bottom: -5px;
    right: 0;
    animation-name: linear;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-delay: 0;
}

.div-menu-header{
    display: none;
    text-align: center;
    /* margin-right: 1.5rem; */
    /* padding: 1rem 0; */
    text-shadow: 0 0 10px 0 white;
}

.button-menu{
    font-size: 33px;
    background: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    text-shadow: var(--text-shadow-all);
    cursor: pointer;
}

.contact{
    background-color: black;
    font-weight: 400;
    padding: 5px 10px;
    width: 60px;
    height: 30px;
    border-radius: 0.7rem;
    border: 2px solid #11a683;
    box-shadow: 2px 2px 5px #000000;
    color: white;
    transition: all 0.4s ease;
}

.contact:hover{
    background: radial-gradient(rgb(25, 133, 100) 16%, #15c58d);
    color: black;
    border: 2px solid rgb(91, 255, 187);
    box-shadow: 0 0 10px 2px rgb(91, 255, 187);
    transition: all 0.4s ease;
    font-weight: 400;
}

.button-menu i:hover{
    color: rgb(234, 234, 234);
}

.div-menu-header{
    animation-name: right-left;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0;
}


@keyframes top-bottom{
    0%{
        transform: translateX(50%);
    }
    50%{
        transform: translateX(-40%);
    }
}

@keyframes left-right{
    0%{
        transform: translateX(-50%);
    }
    50%{
        transform: translateX(40%);
    }
}

@keyframes linear{
    0%{
        transform: scaleX(0);
    }
}

@media screen and (max-width: 948px) {
    .cont-nav{
        display: none;
    }
    .div-menu-header{
        display: block;
    }
}

</style>