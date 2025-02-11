import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);
app.use(createPinia());

async function fetchData() {
  try {
    // Axios - GET data locally from JSON file
    const response = await axios.get("/fakeStoreData.json");
    console.log("Data successfully fetched!", response.data);
  } catch (error) {
    console.error("Error when fetching data", error.message);
  }
}

fetchData();

app.mount("#app");
