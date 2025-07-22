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

import Projects from '../Projects.vue'

import java from "@/assets/img/java.svg"
import springBoot from "@/assets/img/spring-boot.svg"
import springSecurity from "@/assets/img/springsecurity.webp"
import springData from "@/assets/img/springdata.png"
import jwt from "@/assets/img/jwt.svg"
import hibernate from "@/assets/img/hibernate.svg"
import json from "@/assets/img/json.png"
import hiddenpass from "@/assets/img/hiddenpass.png"
import courses from "@/assets/img/courses.png"

const listProjects = [
  {
    name: "Hiddenpass",
    image: hiddenpass,
    enviroment: "Web",
    link: "https://hiddenpass.net",
    github: "https://github.com/DiegoVargasFalla/HiddenPass-backend",
    active: true,
    icons: [
      { name: "Java", img: java },
      { name: "Spring Boot", img: springBoot },
      { name: "Spring Security", img: springSecurity },
      { name: "Spring Data", img: springData },
      { name: "JWT", img: jwt }
    ]
  },
  {
    name: "Gestion de cursos",
    image: courses,
    enviroment: "Desktop",
    link: "",
    github: "https://github.com/DiegoVargasFalla/CourseManagementSystem",
    active: false,
    icons: [
      { name: "Java", img: java },
      { name: "Hibernate", img: hibernate },
      { name: "Json", img: json }
    ]
  }
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