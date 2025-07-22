<template>
    <main class="content">
        <SectionStart></SectionStart>
        <SectionAbout></SectionAbout>
        <SectionSkills></SectionSkills>
        <SectionProjects></SectionProjects>
    </main>
</template>

<script setup>
import SectionStart from '@/components/sections/SectionStart.vue'
import SectionAbout from './sections/SectionAbout.vue';
import SectionSkills from './sections/SectionSkills.vue';
import SectionProjects from './sections/SectionProjects.vue';
</script>

<style scoped>
.content {
    position: relative;
    display: flex;
    width: 80%;
    /* height: 100%; */
    /* margin-top: 11rem; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: green; */
}

@media screen and (max-width: 800px) {
    .content {
        width: 100%;
    }
}
</style>