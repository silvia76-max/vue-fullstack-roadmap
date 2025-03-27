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
  color: #0f8a4f;
  font-size: 2em;
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
  padding-bottom: 50px;
   }

/* Estilos para pantallas medianas y pequeñas */
@media (max-width: 1024px) {
  body {
    min-height: 180vh;
  }

  .main-content {
    min-height: 180vh; 
  }
}

@media (max-width: 768px) {
  body {
    min-height: 180vh; 
  }

  .main-content {
    min-height: 180vh;
  }
}
</style>
