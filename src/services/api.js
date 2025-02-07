// Import Axios //
import axios from "axios";

// Saving the API url to a const //
const API_URL = "https://dummyjson.com/products";

// async function - fetch data from API_URL
export async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    console.log("✅ Data fetched sucessfully from: Fake Store API!");
    const data = response.data;
    return data.products;
  } catch (error) {
    console.error("Error when fetching data", error.message);

    // If API fails - use data from local JSON-file
    try {
      const response = await fetch("./public/fakeStoreData.json");
      const fallBackData = await response.json();
      console.log("✅ Data fetched sucessfully from: local JSON file.");
      return fallBackData;

      // If local JSON fetch also fails, throw error
    } catch (fallbackError) {
      console.error(
        "Error fetching fallback data from local JSON file:",
        fallbackError.message
      );
      throw fallbackError;
    }
  }
}
