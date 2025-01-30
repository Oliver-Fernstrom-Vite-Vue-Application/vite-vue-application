// Import Axios //
import axios from "axios";
import fs from "fs";

// Saving the API url to a const //
const API_URL = "https://fakestoreapi.com/products";

// async function - fetch data
export async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    console.log("✅ Data fetched sucessfully from Fake Store API!");

    // Convert API response to a readable JSON format
    // Null - means no filtering among keys and values
    // 2 adds two spaces per level for indentation, more readable
    const jsonData = JSON.stringify(response.data, null, 2);

    // Save the json data localy in a separate JSON file
    fs.writeFileSync("../public/fakeStoreData.json", jsonData);
    console.log("JSON data succesfully saved in public/fakeStoreData.json!");

    return response.data; // Return data, to be used in Vue components
  } catch (error) {
    console.error("Error when fetching data", error);
    throw error;
  }
}

fetchData();
