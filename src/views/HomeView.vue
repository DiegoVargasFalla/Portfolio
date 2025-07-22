<template>
  
  <div class="container-home-view">
    <Background></Background>
    <Header></Header>
    <MainSections></MainSections>
    <Footer></Footer>
    <loader></loader>
  </div>
  
  
</template>

<script setup>
import Header from '@/components/Header.vue';
import Background from '@/components/Background.vue';
import loader from '@/components/loader.vue';
import MainSections from '@/components/MainSections.vue';
import Footer from '@/components/Footer.vue';

</script>


<style scoped>

.container-home-view {
  position: relative;
  width: 100%;
  /* height: 100vh; */
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>


