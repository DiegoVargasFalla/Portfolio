<template>
  <footer class="footer" id="sec-footer">
    <div class="quote-container">
      <blockquote class="quote-text">
        <span class="quote-mark">"</span>A la cima no se llega superando a los demás, sino superándote a ti mismo<span class="quote-mark">"</span>
      </blockquote>
      <p class="author">Rocky Balboa</p>
    </div>

    <div class="links-container">
      <ul class="links-list">
        <li class="link-item">
          <a href="https://github.com/DiegoVargasFalla" target="_blank" class="icon-link">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li class="link-item">
          <a href="https://www.linkedin.com/in/diego-vargas-falla/" target="_blank" class="icon-link">
            <i class="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li class="link-item">
          <a href="mailto:fallaandres1007f@gmail.com" target="_blank" class="icon-link">
            <i class="fa-solid fa-envelope"></i>
            <span>Mail</span>
          </a>
        </li>
        <li class="link-item">
          <a href="https://wa.me/+541166628100" target="_blank" class="icon-link">
            <i class="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      &copy; 2024 Diego Vargas
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
    position: relative;
    /* background: linear-gradient(to right, #622c87b7, #390762e2); */
    background-color: rgba(13, 2, 70, 0.693);
    color: white;
    width: 100%;
    border-top: 3px solid #00ffc3;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* .quote-container {
  margin-bottom: 1.5rem;
} */

.quote-text {
  font-style: italic;
  font-size: 1.2rem;
  color: #ddd;
  position: relative;
}

.quote-mark {
  color: #14caa0;
  font-size: 1.5rem;
}

.author {
  /* margin-top: 0.5rem; */
  font-weight: bold;
  color: #14caa0;
}

.links-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 1rem 0;
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.link-item .icon-link {
  color: white;
  text-decoration: none;
  border: 1px solid #14caa0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s, transform 0.3s;
}

.link-item .icon-link:hover {
  background-color: #14caa0;
  color: #1a1a1a;
  transform: translateY(-2px);
}

.link-item i {
  font-size: 1.2rem;
}

.copyright {
  /* margin-top: 2rem; */
  font-size: 0.9rem;
  color: #ccc;
}
</style>
