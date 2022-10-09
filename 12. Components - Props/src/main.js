import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./Components/FriendContact.vue";

const app = createApp(App);

app.component("details-component", FriendContact);

app.mount("#app");
