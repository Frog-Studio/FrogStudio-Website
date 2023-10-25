// Script pour aller chercher toutes les images du dossier photo
import Vue from 'vue';
import ImageList from '../Components/ImageList.vue';

const app = Vue.createApp({
  components: {
    ImageList,
  },
});

app.mount('#app');
// Fin du script photo seeker