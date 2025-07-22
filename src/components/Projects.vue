<template>
    <div class="content-projet">
        <img :src="image" alt="" class="img-project">

        <div class="description cont-description">

            <div class="cont-texts">
                <div class="cont-title-project">
                    <h2 class="title-project">{{ name }}</h2>
                </div>
                <div class="cont-enviroment">
                    <h3 class="text-enviroment">{{ enviroment }}</h3>
                </div>
            </div>

            <div class="cont-all-tecn">

                <div class="cont-img-second">
                    <iconTols  
                    v-for="(item, key) in tools"
                    :key="key"
                    :name="item.name"
                    :link="item.img"
                    ></iconTols>
                </div>
                
                <div class="cont-link-projects">
                    <div v-if="active" class="cont-icon-links">
                        <a :href="link"  target="_blank" class="icon-links"><i class="fa-solid fa-link"></i></a>
                    </div>
                    <div class="cont-icon-links">
                        <a :href="github" target="_blank" class="icon-links"><i class="fa-brands fa-github" ></i></a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>

import iconTols from './iconTols.vue';

const props = defineProps({
    name: String,
    image: String,
    enviroment: String,
    tools: Array,
    github: String,
    link: String,
    active: Boolean,
})

</script>

<style scoped>

.content-projet {
    background: linear-gradient(rgb(37, 0, 37), rgb(4, 103, 103));
    position: relative;
    height: 15rem;
    width: 27rem;
    margin: 20px;
    border-radius: 15px;
    /* object-fit: cover; */
    overflow: hidden;
    border: 2px solid #11a683;
    box-shadow: 0 0 15px 3px rgb(5, 121, 130);
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.content-projet:hover {
    box-shadow: 0 0 10px 2px rgb(67, 195, 141), 0 40px 20px rgba(48, 2, 52, 0.69);
    transform: translateY(-25px) scale(1.1);
    border: 2px solid rgb(91, 255, 187);
}

.img-project {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: 0.7rem;
    z-index: 1;
    filter: brightness(0.7);
}

.description {
    position: relative;
    z-index: 2;
    padding: 0.3rem 1rem;
    box-shadow: 0px -1px 12px rgb(0, 0, 0);
    background-color: rgba(7, 7, 7, 0.5);
    -webkit-backdrop-filter: blur(0.5rem) brightness(0.9);
            backdrop-filter: blur(0.5rem) brightness(0.9);

    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 0.8rem; */
}

.cont-texts {
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-direction: column; */
    gap: 0.3rem;
    font-family: "KFanit", sans-serif;
}

.title-project {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-shadow: 0 0 3px #11a683;
}

.text-enviroment {
    font-size: 1.1rem;
    font-weight: 400;
    color: white;
    font-family: "KFanit", sans-serif;
}

.cont-all-tecn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.cont-img-second {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.cont-link-projects {
    display: flex;
    gap: 0.8rem;
}

.icon-links {
    font-size: 1.3rem;
    color: white;
    transition: 0.3s ease;
}

.icon-links:hover {
    color:  black;
    transform: scale(1.1);
}




</style>