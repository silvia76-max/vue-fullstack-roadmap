<template>
  <div class="tab-content active">
    <FlipCard
      v-for="(card, index) in versionCards"
      :key="index"
      :iconClass="card.iconClass"
      :iconColor="card.iconColor"
      :iconSrc="card.iconSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';

// Importar imágenes de las versiones de control
import gitLogo from '@/assets/img/git-logo.png';
import gitlabLogo from '@/assets/img/gitlab-logo.png';
import githubLogo from '@/assets/img/github-logo.png';
import bitbucketLogo from '@/assets/img/bitbucket-logo.jpg';
import beanstalkLogo from '@/assets/img/beanstalk-logo.png';
import perforceLogo from '@/assets/img/Perforce-logo.jpeg';
import subversionLogo from '@/assets/img/subversion-logo.png';
import awsccLogo from '@/assets/img/awscc-logo.png';
import cvsLogo from '@/assets/img/cvs-logo.png';
import mercurialLogo from '@/assets/img/mercurial-logo.png';
import tfsLogo from '@/assets/img/tfs-logo.png';

export default {
  components: {
    FlipCard
  },
  data() {
    return {
      versionCards: [
        {
          iconSrc: gitLogo,
          title: "Git",
          description: "Sistema de control de versiones distribuido."
        },
        {
          iconSrc: gitlabLogo,
          title: "GitLab",
          description: "Plataforma de control de versiones y CI/CD."
        },
        {
          iconSrc: githubLogo,
          title: "GitHub",
          description: "Plataforma de hosting para repositorios Git."
        },
        {
          iconSrc: bitbucketLogo,
          title: "Bitbucket",
          description: "Plataforma de hosting para Git y Mercurial."
        },
        {
          iconSrc: beanstalkLogo,
          title: "Beanstalk",
          description: "Herramienta de gestión de repositorios Git y SVN."
        },
        {
          iconSrc: perforceLogo,
          title: "Perforce",
          description: "Sistema de control de versiones funciona en modo cliente/servidor."
        },
        {
          iconSrc: subversionLogo,
          title: "Subversion",
          description: "Sistema de control de versiones centralizado."
        },
        {
          iconSrc: awsccLogo,
          title: "AWS CodeCommit",
          description: "Servicio de hosting de repositorios Git gestionado por AWS."
        },
        {
          iconSrc: cvsLogo,
          title: "CVS",
          description: "Sistema antiguo de control de versiones."
        },
        {
          iconSrc: mercurialLogo,
          title: "Mercurial",
          description: "Sistema de control de versiones distribuido."
        },
        {
          iconSrc: tfsLogo,
          title: "TFS",
          description: "Herramienta de gestión de proyectos y control de versiones."
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
