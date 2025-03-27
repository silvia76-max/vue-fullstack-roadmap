<template>
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
  margin: 20px 0;
  flex-wrap: nowrap; /* Asegura que los botones no se envuelvan en pantallas grandes */
}

.navbar button {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  background: rgb(216, 244, 218);
  color: rgb(3, 51, 27);
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

/* Cambiar el color al hacer hover */
.navbar button:hover {
  background: rgb(199, 241, 185);
}

/* Media Query para pantallas pequeñas (tabletas y móviles) */
@media (max-width: 880px) {
  .navbar {
    flex-direction: column; 
    align-items: center;     
    margin-top: 0;          
    flex-wrap: wrap;       
  }

  .navbar button {
    width: 90%; 
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
