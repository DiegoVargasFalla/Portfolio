<template>
    <div class="cont-frontend-skills">
        <div class="container-img-skills">
            <!-- <h3 class="subtitle-skills">Front-End</h3> -->
            <div class="container-only-img-skils">
                <icons-skills 
                v-for="(item, key) in listIcons"
                :key="key"
                :name="item.name"
                :path-img="item.path"
                ></icons-skills>
            </div>
        </div>

    </div>
</template>

<script setup>

import iconsSkills from '../iconsSkills.vue';


const listIcons = [
    {name: "Java", path: "/src/assets/img/java.svg"},
    {name: "Spring", path: "/src/assets/img/spring.svg"},
    {name: "Spring boot", path: "/src/assets/img/spring-boot.svg"},
    {name: "Spring security", path: "/src/assets/img/springsecurity.webp"},
    {name: "Spring data", path: "/src/assets/img/springdata.png"},
    {name: "Postman", path: "/src/assets/img/Postman.webp"},
    {name: "JWT", path: "/src/assets/img/jwt.svg"},
    {name: "Docker", path: "/src/assets/img/Docker.SVG"},
    {name: "Git", path: "/src/assets/img/git.svg"},
    {name: "Github", path: "/src/assets/img/github.svg"},
    {name: "Bash", path: "/src/assets/img/bash.svg"},
    {name: "Linux", path: "/src/assets/img/linux.svg"},
    {name: "Python", path: "/src/assets/img/python.svg"},
    {name: "Flet", path: "/src/assets/img/flet.svg"},
    {name: "Mysql", path: "/src/assets/img/mysql.svg"},
    {name: "HTML", path: "/src/assets/img/html.svg"},
    {name: "CSS", path: "/src/assets/img/css.svg"},
    {name: "JS", path: "/src/assets/img/javascript.svg"},
    {name: "vue", path: "/src/assets/img/vue.svg"},
    {name: "VSC", path: "/src/assets/img/vsc.svg"},
    {name: "Intelli-J", path: "/src/assets/img/intelli-j.svg"},
    {name: "Swagger", path: "/src/assets/img/Swagger.svg"},
    {name: "NGINX", path: "/src/assets/img/NGINX.SVG"},
    {name: "Hibernete", path: "/src/assets/img/hibernate.svg"},
]


</script>

<style scoped>

.cont-frontend-skills {
    position: relative;
    width: 100%;
    font-family: "KFanit", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */
    color: white;
}

.subtitle-skills {
    /* background-color: yellow; */
    width: 100%;

}

.container-img-skills {
    position: relative;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* width: 70%; */ 
}

.container-only-img-skils {
    position: relative;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    row-gap: 1rem;
    column-gap: 1rem;
    gap: 0.5rem;
    flex-wrap: wrap;
}

@media screen and (max-width: 800px) {
    .container-only-img-skils {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (max-width: 700px) {
    .container-only-img-skils {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 400px) {
    .container-only-img-skils {
        grid-template-columns: repeat(3, 1fr);
    }
}

</style>