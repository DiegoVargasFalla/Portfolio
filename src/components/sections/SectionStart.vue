<template>
    <section class="sec-start" id="sec-start">
        <div class="cont-title">
            <h1 class="title-name"><span class="sign">¡</span> Hola <span class="sign">!</span> soy <span class="name-title">Diego Vargas</span></h1>
            <p class="description-sec-start">Desarrollador Backend.</p>
            <p class="text-description">Desarrollador en formación con un enfoque claro hacia el crecimiento profesional.</p>
            <div class="cont-icons">
                <a href="https://github.com/DiegoVargasFalla" class="networks" target="_blank"><i class="fa-brands fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/diego-vargas-falla/" class="networks" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto:fallaandres1007f@gmail.com" class="networks" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://wa.me/+541166628100" class="networks" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
        <div class="cont-img">
            <div class="cont-myimg">
                <img class="my-img" src="/src/assets/img/portada.webp" alt="">
            </div>
            <div class="cont-download-button">
                <button class="button-Download-cv" id="button-Download-cv">
                    Descargar cv
                </button>
            </div>
        </div>
    </section>
    <a href="#about-me" class="button-icon-scroll">
        <i class="fas fa-solid fa-angle-down"></i>
    </a>
</template>

<script>

</script>

<style scoped>

.sec-start{
    /* background-color: gray; */
    position: relative;
    padding: 4rem 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
    margin-top: 4rem;
    margin-left: 6rem;
    /* margin-top: 22rem; */
    /* flex-wrap: wrap; */
}

.cont-title{
    position: relative;
    width: 50%;
    /* background-color: red; */
    display: flex;
    align-items: start;
    flex-direction: column;

}

.title-name{
    color: white;
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-size: 3rem;
    text-align: left;
}

.sign{
    color: #00FFFF;
    text-shadow: 0px 0px 5px #42d4b2, 0px 0px 10px #12e0b0;
}

.description-sec-start{
    color: white;
    font-family: "Kanit", sans-serif;
    font-weight: 450;
    font-size: 2rem;
    margin-top: -1.2rem;
    text-align: left;
    letter-spacing: 1px;
    word-spacing: 1px;
}

.text-description{
    font-family: "Kanit", sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    color: white;
    text-align: left;
    margin-top: -0.7rem;
    letter-spacing: 1px;
}

.cont-icons{
    position: relative;
    display: flex;
    align-items: start;
    justify-content: left;
    word-spacing: 2rem;
    font-size: 2rem;
    gap: 3rem;
}

.cont-icons a{
    color: rgb(255, 255, 255);
}

.networks:hover{
    display: inline-block;
    text-shadow: 0px 0px 10px #ffffff;
    color: rgb(248, 240, 240);
    transform: translateY(-4px);
    transition: 0.2s all ease;
}

.cont-img{
    position: relative;
    /* background-color: orange; */
    margin-right: 0px;
    /* padding: 0.2rem; */
    width: 50%;
    height: auto;
}

.cont-myimg{
    position: relative;
    margin: 0 auto;
    /* height: 20rem; */
    /* width: 10rem; */
    /* background-color: red; */
}

.my-img:hover{
    transform: scale(1.1);
    background: rgba(132, 4, 152, 0.1);
    -webkit-backdrop-filter: blur(1rem) brightness(1);
            backdrop-filter: blur(1rem) brightness(1);
    box-shadow: 0px 0px 10px #ffffff;
    border: 2px solid rgb(91, 255, 187);
}

.my-img{
    border-radius: 50%;
    width: 18.7rem;
    position: relative;
    margin: 0 auto;
    display: block;
    border: 2px solid #11a683;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    -o-object-fit: cover;
       object-fit: cover;
    background: rgba(5, 45, 44, 0.1);
    -webkit-backdrop-filter: blur(1rem) brightness(1.4);
            backdrop-filter: blur(1rem) brightness(1.4);
    transition: 0.5s all ease;
}

.cont-download-button{
    position: relative;
    margin: 0 auto;
    /* background-color: red; */
}

.button-Download-cv{
    position: relative;
    margin: 0 auto;
    display: block;
    margin-top: 2.2rem;
    padding: 0.6rem 0.7rem;
    border-radius: 0.7rem;
    border: 2px solid #11a683;
    background-color: black;
    font-weight: 500;
    font-size: 1.1rem;
    color: white;
    transition: all 0.4s ease;
    box-shadow: 2px 2px 5px #000000;
    cursor: pointer;
}

.button-Download-cv:hover{
    background: radial-gradient(rgb(25, 133, 100) 16%, #15c58d);
    color: black;
    border: 2px solid rgb(91, 255, 187);
    box-shadow: 0 0 10px 2px rgb(91, 255, 187);
    /* transition: all 0.4s; */
    font-weight: 500;

    transform: translateY(-6px);
    transition: all 0.6s ease;
}


.button-icon-scroll{
    position: relative;
    /* padding: 290px 0 0 0; */
    font-size: 3.3rem;
    background: none;
    border: none;
    cursor: pointer;
    bottom: 0;
    margin-top: 2.5rem;
    /* background-color: red; */

    animation-name: animation-icon-scroll;
    animation-duration: 0.7s;
    animation-timing-function: ease-in;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running
}

.button-icon-scroll i{
    color: black;
    animation: icon-shadow;
    animation-duration: 0.7s;
    animation-timing-function: ease-in;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running
}

@keyframes animation-icon-scroll{
    0%{
        transform: translateY(-15px);
    }
}

.button-icon-scroll i:hover{
    color: rgb(255, 255, 255);
    transition: all 0.2s ease-in;
}

@keyframes icon-shadow{
    100%{
        text-shadow: 0px 9px 4px rgb(58, 212, 148);
    }
}


@media screen and (max-width: 800px) {
    .sec-start{
        flex-direction: column;
        /* background-color: red; */
        height: auto;
        /* margin-top: 5rem; */
        width: 95%;
        margin-left: 0;
    }
    .cont-title {
        width: 95%;
    }
    .cont-img {
        width: 95%;
        margin-top: 1rem;
    }
    .my-img {
        width: 60%;
    }
}

</style>