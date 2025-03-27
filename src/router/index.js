import { createRouter, createWebHistory } from 'vue-router';
import FrontendView from '@/views/FrontendView.vue';
import BackendView from '@/views/BackendView.vue';
import DatabasesView from '@/views/DatabasesView.vue';
import ComplementaryToolsView from '@/views/ComplementaryToolsView.vue';
import VersionView from '@/views/VersionView.vue';
import CollaborativeToolsView from '@/views/CollaborativeToolsView.vue';

const routes = [
  {
    path: '/',
    redirect: '/frontend' // Redirige la ruta raíz a /frontend
  },
  {
    path: '/frontend',
    name: 'Frontend',
    component: FrontendView
  },
  {
    path: '/backend',
    name: 'Backend',
    component: BackendView
  },
  {
    path: '/databases',
    name: 'Databases',
    component: DatabasesView
  },
  {
    path: '/complementaryTools', 
    name: 'ComplementaryTools',
    component: ComplementaryToolsView
  },
  {
    path: '/version',
    name: 'Version',
    component: VersionView
  },
  {
    path: '/CollaborativeTools', 
    name: 'CollaborativeTools',
    component: CollaborativeToolsView
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;