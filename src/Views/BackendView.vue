<template>
  <div class="tab-content active">
    <FlipCard
      v-for="(card, index) in backendCards"
      :key="index"
      :iconSrc="card.iconSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';
import expressLogo from '@/assets/img/express-logo.png';
import pythonLogo from '@/assets/img/python-logo.jpg';
import phpLogo from '@/assets/img/php-logo.png';
import laravelLogo from '@/assets/img/laravel-logo.png';
import javaLogo from '@/assets/img/java-logo.png';
import rubyLogo from '@/assets/img/ruby-logo.png';
import cLogo from '@/assets/img/c-logo.jpg';
import csharpLogo from '@/assets/img/csharp-logo.png';
import goLogo from '@/assets/img/go-logo.png';
import springLogo from '@/assets/img/spring-logo.png';
import cobolLogo from '@/assets/img/cobol-logo.jpg';
import rustLogo from '@/assets/img/rust-logo.png';
import kotlinLogo from '@/assets/img/kotlin-logo.jpg';
import symfonyLogo from '@/assets/img/symfony-logo.png'; 
import djangoLogo from '@/assets/img/django-logo.png';
import flaskLogo from '@/assets/img/flask-logo.jpg';



export default {
  components: {
    FlipCard
  },
  data() {
    return {
      backendCards: [
        {
          iconSrc: expressLogo,
          title: "Express.js",
          description: "Entorno de ejecución de JS en el servidor."
        },
        {
          iconSrc: pythonLogo,
          title: "Python",
          description: "Lenguaje versátil para backend, IA y automatización."
        },
        {
          iconSrc: phpLogo,
          title: "PHP",
          description: "Lenguaje de scripting para desarrollo web."
        },
        {
          iconSrc: javaLogo,
          title: "Java",
          description: "Lenguaje robusto para aplicaciones empresariales."
        },
        {
          iconSrc: rubyLogo,
          title: "Ruby",
          description: "Lenguaje dinámico para prototipos rápidos."
        },
        {
          iconSrc: cLogo,
          title: "C",
          description: "Lenguaje de programación de propósito general."
        },
        {
          iconSrc: csharpLogo,
          title: "C#",
          description: "Lenguaje de Microsoft para aplicaciones .NET."
        },
        {
          iconSrc: goLogo,
          title: "Go",
          description: "Lenguaje eficiente para microservicios."
        },
        {
          iconSrc: cobolLogo,
          title: "COBOL",
          description: "Lenguaje tradicional para sistemas legacy."
        },
        {
          iconSrc: rustLogo,
          title: "Rust",
          description: "Lenguaje moderno para seguridad y rendimiento."
        },
        {
          iconSrc: kotlinLogo,
          title: "Kotlin",
          description: "Lenguaje moderno para Android y backend."
        },
          {
          iconSrc: springLogo,
          title: "Spring",
          description: "Framework de Java para aplicaciones empresariales."
        },
         {
          iconSrc: laravelLogo,
          title: "Laravel",
          description: "Framework de PHP para desarrollo web elegante."
        },
        {
          iconSrc: symfonyLogo,
          title: "Symfony",
          description: "framework PHP para aplicaciones web escalables, y con componentes reutilizables"
        },
        {
          iconSrc: djangoLogo,
          title: "Django",
          description: "framework basado en Python, para crear aplicaciones rápidas, seguras y escalables,"
        },
        {
          iconSrc: flaskLogo,
          title: "Flask",
          description: "micro-framework ligero y flexible para Python, ideal para crear aplicaciones web sencillas."
        }
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
@media (max-width: 768px) {
  .tab-content {
    min-height: 280vh;
    gap: 10px;
  }
}
</style>