<template>
 <h1 class="navbar-title">Roadmap Fullstack</h1>
  <div class="navbar">
    <button @click="showTab('Frontend')">Frontend</button>
    <button @click="showTab('Backend')">Backend</button>
    <button @click="showTab('Databases')">Bases de Datos</button>
    <button @click="showTab('ComplementaryTools')">Herramientas complementarias</button>
    <button @click="showTab('Version')">Control de Versiones</button>
    <button @click="showTab('CollaborativeTools')">Herramientas Colaborativas</button>
  </div>
</template>

<script>
export default {
  methods: {
    showTab(tabId) {
      this.$emit('change-tab', tabId); // Emite el evento al componente padre
    }
  }
};
</script>

<style scoped>
/* Estilos generales para el navbar */
.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
  flex-wrap: nowrap; 
  
}
.navbar-title {
  font-size: 2em; 
  color: rgb(255, 230, 4); 
  font-weight: bold; 
  margin-right: 20px;
   text-shadow: 0 0 5px rgb(111, 235, 109), 0 0 10px rgba(74, 201, 67, 0.96), 0 0 20px rgb(255, 247, 0);
  animation: brilloNeon 1.5s alternate infinite;
}
@keyframes brilloNeon {
  from { opacity: 0.7; }
  to { opacity: 1; }
}
.navbar button {
  padding: 8px 12px;
  font-size: 1em;
  border: none;
  background: rgb(152, 230, 157);
  color: rgb(3, 51, 27);
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

/* Cambiar el color al hacer hover */
.navbar button:hover {
  background: rgb(121, 161, 107);
  color:gold;
}

/* Media Query para pantallas pequeñas (tabletas y móviles) */
@media (max-width: 1080px) {
  .navbar {
    flex-direction: column; 
    align-items: center;     
    margin-top: 0;          
    flex-wrap: wrap;       
  }

  .navbar button {
    width: 80%; 
    margin-bottom: 10px; 
    font-size: 0.9em;    
   }
  /* Opcional: Ajuste para pantallas muy pequeñas (por ejemplo, móviles más pequeños) */
  @media (max-width: 480px) {
    .navbar button {
      font-size: 0.8em;   
    }
  }
}

/* Media Query para pantallas grandes (mayores a 1200px) */
@media (min-width: 1200px) {
  .navbar {
    gap: 30px; 
  }

  .navbar button {
    padding: 12px 25px; 
    font-size: 1.1em; 
  }
}

</style>
