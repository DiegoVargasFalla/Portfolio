<template>
    <section class="sec-skills" id="skills">
        <div class="cont-subtitle title-skills">
            <h2 class="text-title">Habilidades</h2>
        </div>
        <skills-front-end></skills-front-end>
    </section>
</template>

<script setup>

import skillsFrontEnd from '../skills/Allskills.vue';


</script>

<style scoped>

.sec-skills {
    position: relative;
    width: 100%;
    /* margin-top: 4rem; */
    /* margin-top: 2rem; */
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */
}

.text-title {
    /* background-color: orange; */
  font-family: "KFanit", sans-serif;
  font-weight: 600;
  color: white;
  font-size: 2.8rem;
  letter-spacing: 1px;
  text-shadow: 0 0 3px rgb(91, 255, 187);
}

.cont-subtitle {
    position: relative;
    text-align: center;
    /* background-color: red; */
}

@media screen and (max-width: 750px) {
    .sec-skills {
        height: auto;
    }
}

</style>