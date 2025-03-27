<template>
  <div class="tab-content active">
    <FlipCard
      v-for="(card, index) in complementaryCards"
      :key="index"
      :iconSrc="card.iconSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';
import postmanLogo from '@/assets/img/postman-logo.png';
import swaggerLogo from '@/assets/img/swagger-logo.png';
import insomniaLogo from '@/assets/img/insomnia-logo.png';
import redocLogo from '@/assets/img/redoc-logo.png';
import apigeeLogo from '@/assets/img/apigee-logo.png';
import sqlalchemyLogo from '@/assets/img/sqlalchemy-logo.jpg';
import typeormLogo from '@/assets/img/typeorm-logo.png';
import sequelizeLogo from '@/assets/img/sqelize-logo.png';
import hibernateLogo from '@/assets/img/hibernate-logo.jpg';
import doctrineLogo from '@/assets/img/doctrine-logo.png';
import eloquentLogo from '@/assets/img/eloquent-logo.png';
import mongooseLogo from '@/assets/img/mongoose-logo.png';
import jsonLogo from '@/assets/img/json-logo.png';
import elephantioLogo from '@/assets/img/elephantio-logo.jpg';
import vscLogo from '@/assets/img/vsc-logo.jpg';

export default {
  components: {
    FlipCard
  },
  data() {
    return {
      complementaryCards: [
        {
          iconSrc: postmanLogo,
          title: "Postman",
          description: "Herramienta para probar y documentar APIs."
        },
        {
          iconSrc: swaggerLogo,
          title: "Swagger",
          description: "Herramienta para diseñar y documentar APIs RESTful."
        },
        {
          iconSrc: insomniaLogo,
          title: "Insomnia",
          description: "Alternativa a Postman para probar APIs."
        },
        {
          iconSrc: redocLogo,
          title: "Redoc",
          description: "Herramienta para documentación interactiva de APIs."
        },
        {
          iconSrc: apigeeLogo,
          title: "Apigee",
          description: "Plataforma de gestión de APIs."
        },
        {
          iconSrc: sqlalchemyLogo,
          title: "SQLAlchemy",
          description: "ORM para Python."
        },
        {
          iconSrc: typeormLogo,
          title: "TypeORM",
          description: "ORM para Node.js y TypeScript."
        },
        {
          iconSrc: sequelizeLogo,
          title: "Sequelize",
          description: "ORM basado en promesas para Node.js."
        },
        {
          iconSrc: hibernateLogo,
          title: "Hibernate",
          description: "ORM para Java."
        },
        {
          iconSrc: doctrineLogo,
          title: "Doctrine",
          description: "ORM para PHP."
        },
        {
          iconSrc: eloquentLogo,
          title: "Eloquent",
          description: "ORM integrado en Laravel."
        },
        {
          iconSrc: mongooseLogo,
          title: "Mongoose",
          description: "ODM para MongoDB en Node.js."
        },
        {
          iconSrc: jsonLogo,
          title: "Json Server",
          description: "Herramienta para crear servidores de API REST fake y simular un backend con archivos JSON ."
        },
        {
          iconSrc: elephantioLogo,
          title: "Elephant",
          description: "Plataforma que facilita la integración de eventos en tiempo real, mediante el uso de WebSockets."
        },
        {
          iconSrc: vscLogo,
          title: "Visual Studio Code",
          description: "Editor de código fuente, extensiones personalizables y herramientas integradas."
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
</style>
