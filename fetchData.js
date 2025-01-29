// Import Axios & File Stystem. Allows us to write a JSON-file //

import axios from "axios";
import fs from "fs";

// GET-request from API //

/* const options = {
  method: "GET",
  url: "https://streaming-availability.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "b36471c917msh3416270cc6bfd90p15ab9ajsnc93282311a1d",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
}; */

// async function - fetch data //
async function fetchAndSaveData() {
  try {
    const response = await axios.request(options);

    // Create data.json with the data response //
    fs.writeFileSync(
      "public/data.json",
      JSON.stringify(response.data, null, 2)
    );
    console.log("✅ Data sucessfully saved in public/data.json!");
  } catch (error) {
    console.error("Error when fetching data", error);
  }
}
fetchAndSaveData();
