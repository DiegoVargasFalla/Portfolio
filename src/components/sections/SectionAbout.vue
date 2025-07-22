<template>
    <section class="sec-about-me">
        <div class="cont-about" id="about-me">
            <div class="cont-subtitle">
                <h2 class="text-title">Sobre mi</h2>
            </div>
            <div class="description-about">
                <p class="text-about about-1">
                    <span>👨‍💻</span>
                    <span>Soy un desarrollador en formación y estudiante de Ingeniería Informática.</span>
                </p>
                <p class="text-about about-2">
                    <span>📚</span>
                    <span> Me encuentro en constante búsqueda de nuevas oportunidades para ampliar mis conocimientos en desarrollo backend.</span>
                </p>
                <p class="text-about about-3">
                    <span>⚙️</span>
                    <span>Actualmente, estoy adquiriendo habilidades técnicas y teóricas que me permiten afrontar retos con una perspectiva analítica y estructurada.</span>
                </p>
                <p class="text-about about-4">
                    <span>🎯</span>
                    <span>Mi objetivo es aprender continuamente y aplicar ese conocimiento en proyectos que aporten valor real.</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

.sec-about-me {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 1rem;
  width: 100%;
  /* background-color: red; */
}

.cont-about {
  width: 100%;
  /* max-width: 1000px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
  /* background-color: orange; */
}

.cont-subtitle {
  margin-bottom: 1rem;
}

.text-title {
  font-family: "KFanit", sans-serif;
  font-weight: 600;
  color: white;
  font-size: 2.8rem;
  letter-spacing: 1px;
  text-shadow: 0 0 3px rgb(91, 255, 187);
}

.description-about {
  color: white;
  font-family: "KFanit", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: left;
  border-radius: 0.8rem;
  border: 2px solid #11a683;
  box-shadow: 0px 0px 10px #ffffff44;
  padding: 1.2rem 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  background: rgba(45, 5, 43, 0.3);
  backdrop-filter: blur(1.3rem) brightness(1.2);
  display: flex;
  flex-direction: column;
  /* gap: 0.2rem; */
  transition: all 0.3s ease;
}

.text-about {
  display: flex;
  align-items: start;
  gap: 0.8rem;
  /* line-height: 1.5; */
  word-break: break-word;
}

/* ✅ Responsividad para pantallas pequeñas */
@media (max-width: 600px) {
  .text-title {
    font-size: 2rem;
  }

  .description-about {
    font-size: 1rem;
    padding: 1rem;
  }

  .text-about {
    flex-direction: row;
    align-items: flex-start;
  }
  .sec-about-me {
    padding: 0;
  }
  .sec-about-me {
    width: 85%;
  }
}
</style>