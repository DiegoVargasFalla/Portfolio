<template>
    <div class="cont-major-loader" id="cont-major-loader">
        <div class="load-screen">
            <div class="content-loader">
                <div class="progress-circle">
                    <p class="progress-num"><span class="percentage" id="percentage">%</span></p>
                </div>
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';


onMounted(() => {
    document.addEventListener("DOMContentLoaded", percentage)
    document.addEventListener("DOMContentLoaded", loadScreen())
})

onUnmounted(() =>  {
    document.removeEventListener("DOMContentLoaded", percentage)
    document.removeEventListener("DOMContentLoaded", loadScreen())
})

function loadScreen() {
    const body = document.body;
    const loader = document.getElementById("cont-major-loader")

    body.style.overflow = "hidden";

    let opacity = 10;

    function decreaseOpacity() {
        if (opacity >= 0) {
            let newOpacity = opacity * 0.2;
            loader.style.opacity = newOpacity;
            opacity--;
            
            setTimeout(decreaseOpacity, 50)
        } else {
            loader.style.display = "none"
            body.style.overflowY = "auto"
            body.style.overflowX = "hidden"
        }
    }
    setTimeout(decreaseOpacity, 1200)
}

function percentage() {
    let percentage = document.getElementById("percentage");
    let num = 0
    
    function percentageTime() {
        if (num <= 100) {
            percentage.textContent = num + "%"
            num++
            setTimeout(percentageTime, 14)
        }
    }
    percentageTime()
}



</script>

<style scoped>

.cont-major-loader {
    position: fixed;
    background: linear-gradient(rgb(50, 3, 40),  rgb(26, 71, 130),  rgb(50, 3, 40));
    height: 100%;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
}

.load-screen{
    position: absolute;
    /* background-color: red; */
    height: 100vh;
    width: 100%;
    -webkit-backdrop-filter: blur(2rem), brightness(5), opacity(1), grayscale(1);
            backdrop-filter: blur(2rem), brightness(5), opacity(1), grayscale(1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-loader{
    position: relative;
    /* background-color: white; */
    /* padding: 15px; */
    height: 40%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}

.progress-circle{
    position: relative;
    height: 130px;
    width: 130px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0 18px rgb(19, 19, 19);
}

.progress-circle::before{
    content: "";
    position: absolute;
    height: 300px;
    width: 300px;
    background: conic-gradient(transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, rgba(32, 181, 6, 0.467), rgba(67, 183, 9, 0.84), rgba(36, 105, 2, 0.937));
    animation: progress-rotate 1s linear infinite;
}

.progress-circle::after{
    content: "";
    position: absolute;
    background-color: rgb(26, 71, 130);
    border-radius: 50%;
    margin: 20px;
    height: 85%;
    width: 85%;
    box-shadow: inset 0 0 12px rgb(19, 19, 19);
}

@keyframes progress-rotate {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.progress-bar{
    position: relative;
    background-color: white;
    height: 9px;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgb(75, 218, 4), 0px 0px 15px rgb(129, 218, 4), 0px 0px 30px rgb(149, 237, 7), 0px 0px 50px rgb(170, 240, 7);
}

.progress{
    position: relative;
    height: 100%;
    background-color: rgb(7, 246, 23);
    animation: progress-bar 1.8s linear;
    transform-origin: left;
}

.progress-num,
.percentage{
    position: relative;
    color: white;
    font-family: "Kanit", sans-serif;
    font-weight: 300;
    font-size: 32px;
    text-align: center;
    z-index: 1000;
}

@keyframes progress-bar {
    0%{
        transform: scaleX(0);
    }
    100%{
        transform: scaleX(1);
    }
}

</style>