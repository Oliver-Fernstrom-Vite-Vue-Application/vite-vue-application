import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);
app.use(createPinia());

async function fetchData() {
  try {
    // Axios - GET data locally from JSON file
    const response = await axios.get("/fakeStoreData.json");
    console.log("Data sucessfully fetched!", response.data);
  } catch (error) {
    console.error("Error when fetching data", error.message);
  }
}

fetchData();

createApp(App).mount("#app");
