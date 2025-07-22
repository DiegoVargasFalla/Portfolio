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

import java from "@/assets/img/java.svg";
import spring from "@/assets/img/spring.svg";
import springBoot from "@/assets/img/spring-boot.svg";
import springSecurity from "@/assets/img/springsecurity.webp";
import springData from "@/assets/img/springdata.png";
import postman from "@/assets/img/Postman.webp";
import jwt from "@/assets/img/jwt.svg";
import docker from "@/assets/img/Docker.SVG";
import git from "@/assets/img/git.svg";
import github from "@/assets/img/github.svg";
import bash from "@/assets/img/bash.svg";
import linux from "@/assets/img/linux.svg";
import python from "@/assets/img/python.svg";
import flet from "@/assets/img/flet.svg";
import mysql from "@/assets/img/mysql.svg";
import html from "@/assets/img/html.svg";
import css from "@/assets/img/css.svg";
import js from "@/assets/img/javascript.svg";
import vue from "@/assets/img/vue.svg";
import vsc from "@/assets/img/vsc.svg";
import intelliJ from "@/assets/img/intelli-j.svg";
import swagger from "@/assets/img/Swagger.svg";
import nginx from "@/assets/img/NGINX.SVG";
import hibernate from "@/assets/img/hibernate.svg";

const listIcons = [
  { name: "Java", path: java },
  { name: "Spring", path: spring },
  { name: "Spring boot", path: springBoot },
  { name: "Spring security", path: springSecurity },
  { name: "Spring data", path: springData },
  { name: "Postman", path: postman },
  { name: "JWT", path: jwt },
  { name: "Docker", path: docker },
  { name: "Git", path: git },
  { name: "Github", path: github },
  { name: "Bash", path: bash },
  { name: "Linux", path: linux },
  { name: "Python", path: python },
  { name: "Flet", path: flet },
  { name: "Mysql", path: mysql },
  { name: "HTML", path: html },
  { name: "CSS", path: css },
  { name: "JS", path: js },
  { name: "Vue", path: vue },
  { name: "VSC", path: vsc },
  { name: "Intelli-J", path: intelliJ },
  { name: "Swagger", path: swagger },
  { name: "NGINX", path: nginx },
  { name: "Hibernate", path: hibernate },
];

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