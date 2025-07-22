<template>
    <div class="container-title" id="projects">
        <h2 class="text-title">Proyectos</h2>
    </div>
    <div class="container-projects">
        <Projects 
        v-for="(item, key) in listProjects"
        :key="key"
        :name="item.name"
        :image="item.image"
        :enviroment="item.enviroment"
        :link="item.link"
        :active="item.active"
        :tools="item.icons"
        :github="item.github"
        ></Projects>
    </div>
</template>

<script setup>

import Projects from '../Projects.vue';

const listProjects = [
    {name: "Hiddenpass", image: "src/assets/img/hiddenpass.png", enviroment: "Web", link: "https://hiddenpass.net", github: "https://github.com/DiegoVargasFalla/HiddenPass-backend", active: true, icons: [{name: "Java", img: "src/assets/img/java.svg"}, {name: "Spring Boot", img: "src/assets/img/spring-boot.svg"}, {name: "Spring Security", img: "src/assets/img/springsecurity.webp"}, {name: "spring Data", img: "src/assets/img/springdata.png"}, {name: "JWT", img: "src/assets/img/jwt.svg"}]},
    {name: "Gestion de cursos", image: "src/assets/img/courses.png", enviroment: "Desktop", link: "", github: "https://github.com/DiegoVargasFalla/CourseManagementSystem", active: false, icons: [{name: "Java", img: "src/assets/img/java.svg"}, {name: "Hibernate", img: "src/assets/img/hibernate.svg"}, {name: "Json ", img: "src/assets/img/json.png"}]},
    // {name: "Downloader music", image: "src/assets/img/downloader.webp", enviroment: "Desktop", link: "", github: "https://github.com/DiegoVargasFalla/MusicDownloader", active: false, icons: ["src/assets/img/python.svg", "src/assets/img/flet.svg"]},
]

</script>

<style scoped>

.container-projects {
    position: relative;
    width: 100%;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.text-title{
    font-family: "KFanit", sans-serif;
    font-weight: 600;
    color: white;
    font-size: 45px;
    letter-spacing: 1px;
    text-shadow: 0 0 3px rgb(91, 255, 187);
}


</style>