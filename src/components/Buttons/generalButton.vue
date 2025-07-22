<template>
    <div class="cont-download-button">
        <button class="button-Download-cv" id="button-Download-cv">
            Descargar cv
        </button>
    </div>
</template>

<script setup>

</script>

<style scoped>

.cont-download-button{
    position: relative;
    margin: 0 auto;
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

</style>