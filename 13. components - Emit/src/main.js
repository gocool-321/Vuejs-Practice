import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./Components/FriendContact.vue";
import newFriend from "./Components/newFriend.vue";

const app = createApp(App);

app.component("details-component", FriendContact);
app.component("new-friend", newFriend);

app.mount("#app");
