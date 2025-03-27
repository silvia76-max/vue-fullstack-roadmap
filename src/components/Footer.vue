<template>
  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} Vue Fullstack Roadmap. by Silvia Rodriguez in Peñaskal coop. & F5.</p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 0.5rem;
  background: rgb(216, 244, 218);
  color: rgb(3, 51, 27);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.9rem;
}


@media (max-width: 600px) {
  .footer {
    font-size: 0.7rem; 
    padding: 0.3rem; 
  }
  
  .footer p {
    margin: 0; 
    line-height: 1.2; 
  }
}


@media (max-width: 400px) {
  .footer {
    font-size: 0.6rem; 
  }
}
</style>