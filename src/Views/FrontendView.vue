<template>
  <div class="tab-content active">
    <FlipCard
      v-for="(card, index) in frontendCards"
      :key="index"
      :iconSrc="card.iconSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';
import htmlLogo from '@/assets/img/html-logo.jpg';
import cssLogo from '@/assets/img/css-logo.png';
import jsLogo from '@/assets/img/javascript-logo.jpg';
import reactLogo from '@/assets/img/react-logo.png';
import vueLogo from '@/assets/img/vue-logo.png';
import angularLogo from '@/assets/img/angular-logo.png';
import svelteLogo from '@/assets/img/svelte-logo.jpg';
import tailwindLogo from '@/assets/img/tailwind-logo.png';
import lessLogo from '@/assets/img/less-logo.png';
import sassLogo from '@/assets/img/sass-logo.png';
import bootstrapLogo from '@/assets/img/bootstrap-logo.jpg';
import materialLogo from '@/assets/img/material-logo.png';

export default {
  components: {
    FlipCard
  },
  data() {
    return {
      frontendCards: [
        {
          iconSrc: htmlLogo,
          title: "HTML",
          description: "Lenguaje de marcado para crear la estructura de páginas web."
        },
        {
          iconSrc: cssLogo,
          title: "CSS",
          description: "Hoja de estilo en cascada utilizado para crear la presentación y el diseño."
        },
        {
          iconSrc: jsLogo,
          title: "JavaScript",
          description: "Lenguaje de programación que añade interactividad y dinamismo."
        },
        {
          iconSrc: reactLogo,
          title: "React",
          description: "Biblioteca de JS para construir interfaces de usuario reutilizables."
        },
        {
          iconSrc: vueLogo,
          title: "Vue.js",
          description: "Framework progresivo de JS para construir interfaces de usuario."
        },
        {
          iconSrc: angularLogo,
          title: "Angular",
          description: "Framework frontend mantenido por Google para aplicaciones complejas."
        },
        {
          iconSrc: svelteLogo,
          title: "Svelte",
          description: "Framework moderno que compila componentes en JavaScript puro."
        },
         {
          iconSrc: materialLogo,
          title: "Material",
          description: " framework de diseño creado por Google con estilos y componentes para interfaces consistentes, accesibles."
        },
        {
          iconSrc: tailwindLogo,
          title: "Tailwind",
          description: "Framework de utilidades CSS para diseñar interfaces rápidamente."
        },
         {
          iconSrc:bootstrapLogo,
          title: "Bootstrap",
          description: "Framework de CSS para el diseño y la creación de interfaces. Incluye componentes predefinidos"
        },
        {
          iconSrc: lessLogo,
          title: "Less",
          description: "Preprocesador CSS con variables, anidamiento y funciones."
        },
        {
          iconSrc: sassLogo,
          title: "Sass",
          description: "Preprocesador CSS con características avanzadas."
        },
        
      ]
    };
  }
};
</script>

<style scoped>
.tab-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>