<template>
    <div class="content-icon-wrapper">
        <div class="content-icon">
            <img :src="link" :alt="name" />
        </div>
        <div class="tooltip">{{ name }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  name: String
})
</script>

<style scoped>
.content-icon-wrapper {
  position: relative;
}

.content-icon {
  width: 2rem;
  height: 2rem;
  padding: 0.4rem;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.content-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.tooltip {
  position: absolute;
  top: -1.8rem;
  /* top: 1rem; */
  /* left: 1rem; */
  transform: translateX(-50%) translateY(-4px);
  background-color: #333;
  color: white;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  font-family: "KFanit", sans-serif;
  /* z-index: 10; */
}

.content-icon-wrapper:hover .tooltip {
  opacity: 1;
  transform: translateX(-10%) translateY(0);
}
</style>
