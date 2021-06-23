import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/user-interface/BaseCard.vue'
import BaseButton from './components/user-interface/BaseButton.vue'
import BaseDialog from './components/user-interface/BaseDialog.vue'


const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
