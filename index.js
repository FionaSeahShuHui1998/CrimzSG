const datasetId = "d_02d07531b84cd0cf2cf901fc1bf5d395";
const url =
  "https://data.gov.sg/api/action/datastore_search?resource_id=" + datasetId;

console.log("Fetching data...");

// Fetch data from the API
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.result.records);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
