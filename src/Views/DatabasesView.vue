<template>
  <div class="tab-content active">
    <FlipCard
      v-for="(card, index) in databaseCards"
      :key="index"
      :iconSrc="card.iconSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';

// Importar imágenes de las bases de datos
import sqlLogo from '@/assets/img/sql-logo.jpg';
import sqliteLogo from '@/assets/img/sqlite-logo.jpg';
import mongodbLogo from '@/assets/img/mongodb-logo.png';
import mysqlLogo from '@/assets/img/mysql-logo.png';
import postgreLogo from '@/assets/img/postgre-logo.png';
import dynamoLogo from '@/assets/img/dynamo-logo.png';
import cassandraLogo from '@/assets/img/cassandra-logo.png';
import mariaLogo from '@/assets/img/maria-logo.png';
import redisLogo from '@/assets/img/redis-logo.png';
import oracleLogo from '@/assets/img/oracle-logo.png';
import firebaseLogo from '@/assets/img/firebase-logo.png';

export default {
  components: {
    FlipCard
  },
  data() {
    return {
      databaseCards: [
        {
          iconSrc: sqlLogo,
          title: "SQL",
          description: "Lenguaje estándar para bases de datos relacionales."
        },
        {
          iconSrc: sqliteLogo,
          title: "SQLite",
          description: "Base de datos ligera y sin servidor."
        },
        {
          iconSrc: mongodbLogo,
          title: "MongoDB",
          description: "Base de datos NoSQL orientada a documentos."
        },
        {
          iconSrc: mysqlLogo,
          title: "MySQL",
          description: "Sistema de gestión de bases de datos relacionales."
        },
        {
          iconSrc: postgreLogo,
          title: "PostgreSQL",
          description: "Base de datos relacional avanzada y de código abierto."
        },
        {
          iconSrc: dynamoLogo,
          title: "DynamoDB",
          description: "Base de datos NoSQL gestionada por AWS."
        },
        {
          iconSrc: cassandraLogo,
          title: "Cassandra",
          description: "Base de datos NoSQL distribuida."
        },
        {
          iconSrc: mariaLogo,
          title: "MariaDB",
          description: "Fork de MySQL con mejoras en rendimiento."
        },
        {
          iconSrc: redisLogo,
          title: "Redis",
          description: "Almacenamiento en memoria de estructura clave-valor."
        },
        {
          iconSrc: oracleLogo,
          title: "Oracle DB",
          description: "Solución empresarial de base de datos relacional."
        },
        {
          iconSrc: firebaseLogo,
          title: "Firebase",
          description: "Plataforma de desarrollo con base de datos en tiempo real."
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
    min-height: 220vh; 
    gap: 10px; 
  }
}
</style>
