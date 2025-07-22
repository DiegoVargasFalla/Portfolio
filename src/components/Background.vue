<template>
    <video autoplay muted loop class="video" >
        <source src="/src/assets/video/video1.mp4" type="video/mp4">
    </video>
    <div class="layer-main"></div>
</template>

<script setup>
</script>

<style scoped>

.video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    /* z-index: -500; */
}

.layer-main{
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    background: rgba(21, 9, 126, 0.419);
    -webkit-backdrop-filter: blur(0.7rem) brightness(1.3);
            backdrop-filter: blur(0.7rem) brightness(1.3);
    /* display: flex; */
    /* align-items: end; */
    /* justify-content: center; */
    /* z-index: -200; */
}

</style>