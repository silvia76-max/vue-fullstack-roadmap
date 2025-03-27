<template>
  <div class="flip-card" @click="flipCard"> 
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <div class="flip-card-front">
        <img v-if="iconSrc" :src="iconSrc" :alt="title" class="icon">
        <i v-else :class="iconClass" :style="{ color: iconColor }"></i>
        <p><strong>{{ title }}</strong></p>
      </div>
      <div class="flip-card-back">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: String,
    title: String,
    description: String
  },
  data() {
    return {
      isFlipped: false // Controla el estado de la tarjeta, si está girada o no
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped; // Al hacer clic, alterna el estado de la tarjeta
    }
  }
};
</script>

<style scoped>
.tab-content {
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espacio entre las tarjetas */
}
.flip-card {
  background-color: transparent;
  width: 200px;
  height: 250px;
  perspective: 1000px;
  margin:20px;
}

/* Media query para pantallas pequeñas */
@media (max-width: 600px) {
  .flip-card {
    width: 150px; /* Reduce el tamaño de la tarjeta */
    height: 200px;
  }

  .flip-card-front, .flip-card-back {
    padding: 8px; /* Ajusta el relleno para pantallas más pequeñas */
  }

  .flip-card-front i {
    font-size: 40px; /* Reduce el tamaño del icono */
  }

  .icon {
    width: 100px;
    height: 100px; /* Ajusta el tamaño de la imagen */
  }
}

/* Media query para pantallas medianas */
@media (max-width: 992px) {
  .flip-card {
    width: 180px; /* Tamaño intermedio */
    height: 220px;
  }

  .flip-card-front, .flip-card-back {
    padding: 10px; /* Relleno intermedio */
  }

  .flip-card-front i {
    font-size: 45px; /* Ajuste intermedio del tamaño del icono */
  }

  .icon {
    width: 140px;
    height: 140px; /* Ajuste intermedio del tamaño de la imagen */
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg); /* Rota la tarjeta solo cuando tiene la clase 'flipped' */
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 2px 2px 10px rgb(0, 255, 60);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.flip-card-front {
  background: rgb(216, 244, 218);
  color: #000000;
}

.flip-card-back {
  background:rgb(199, 241, 185);
  transform: rotateY(180deg); /* Se asegura de que el reverso de la tarjeta esté rotado */
  font-size: 0.9em;
  color: #000000;
}

.flip-card-front i {
  font-size: 50px;
  margin-bottom: 10px;
}
.icon {
  width: 100%;
  max-width: 120px;
  height: auto; 
  object-fit: contain;
  margin-bottom: 10px;
}
</style>
