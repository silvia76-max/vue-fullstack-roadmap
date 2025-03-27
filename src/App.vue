<template>
  <div id="app">
    <NavBar @change-tab="changeTab" />
    <router-view></router-view>
     <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  methods: {
    changeTab(tabId) {
      this.$router.push({ path: `/${tabId}` });
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: rgb(18, 61, 40);
  font-size: 1.5rem;  
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  max-width: 1200px;  /* Ancho máximo */
  margin: 0 auto;      /* Centrado */
  padding: 20px;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  body {
    min-height: 100vh;  /* Altura ajustada */
  }
}
</style>