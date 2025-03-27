<template>
  <div class="tab-content active">
    <FlipCard
      v-for="(card, index) in collaborativeToolsCards"
      :key="index"
      :iconSrc="card.iconSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';
import trelloLogo from '@/assets/img/trello-logo.jpg';
import jiraLogo from '@/assets/img/jira-logo.png';
import asanaLogo from '@/assets/img/asana-logo.png';
import slackLogo from '@/assets/img/slack-logo.jpg';
import figmaLogo from '@/assets/img/figma-logo.png';
import conceptboardLogo from '@/assets/img/conceptboard-logo.png';
import sketchLogo from '@/assets/img/sketch-logo.png';
import notionLogo from '@/assets/img/notion-logo.png';
import driveLogo from '@/assets/img/drive-logo.png';
import miroLogo from '@/assets/img/miro-logo.png';
import mondayLogo from '@/assets/img/monday-logo.png';

export default {
  components: {
    FlipCard
  },
  data() {
    return {
      collaborativeToolsCards: [
        {
          iconSrc: trelloLogo,
          title: "Trello",
          description: "Herramienta de gestión de proyectos basada en tableros."
        },
        {
          iconSrc: jiraLogo,
          title: "Jira",
          description: "Plataforma de gestión de proyectos para equipos ágiles."
        },
        {
          iconSrc: asanaLogo,
          title: "Asana",
          description: "Herramienta de gestión de tareas y proyectos."
        },
        {
          iconSrc: slackLogo,
          title: "Slack",
          description: "Plataforma de comunicación en tiempo real."
        },
        {
          iconSrc: figmaLogo,
          title: "Figma",
          description: "Herramienta de diseño y prototipado, colaborativa en la nube."
        },
        {
          iconSrc: conceptboardLogo,
          title: "Conceptboard",
          description: "Pizarra colaborativa en línea."
        },
        {
          iconSrc: sketchLogo,
          title: "Sketch",
          description: "Herramienta de diseño vectorial para interfaces de usuario."
        },
          {
        iconSrc: notionLogo,
        title: "Notion",
        description: "plataforma de productividad todo en uno que permite gestionar notas, tareas, bases de datos y proyectos."
      },
      { iconSrc: driveLogo,
        title: "Google Drive",
        description: "Almacenamiento y colaboración en la nube."
      },
      {
        iconSrc: miroLogo,
        title: "Miro",
        description: "Miro es una herramienta de colaboración visual ideal para lluvia de ideas y planificación de proyectos."
      },
      {
        iconSrc: mondayLogo,
        title: "Monday",
        description: "plataforma de gestión de proyectos que ayuda a los equipos a realizar un seguimiento de su trabajo."
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