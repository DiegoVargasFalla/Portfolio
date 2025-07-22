<template>
    <div class="cont-icons-skills">
        <img :src="pathImg" alt="" class="icon-skills">
        <div class="name-icons">{{ name }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    pathImg: String,
})

</script>

<style scoped>

.cont-icons-skills {
    position: relative;
    /* padding: 2rem 2.5rem; */
    height: 4.5rem;
    width: 4.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;

    border-radius: 10px;
    border: 2px solid #14caa0;
    box-shadow: 0 0 15px #14caa0;
    background: rgba(45, 5, 43, 0.3);
    -webkit-backdrop-filter: blur(1.3rem) brightness(1.2);
            backdrop-filter: blur(1.3rem) brightness(1.2);
    transition: all 0.2s ease;
}

.icon-skills {
    position: relative;
    height: 2rem;
    width: 2rem;
}

.name-icons{
    color: white;
    text-align: center;
    font-family: var(--fuente-font-family);
    font-weight: 400;
    text-shadow: 0 0 8px whitesmoke;
    width: 60px;
}

.cont-icons-skills:hover{
    transform: translateY(-5px);
}


</style>