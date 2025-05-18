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

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // X-axis labels
    datasets: [
      {
        label: "Line A",
        data: [10, 20, 15, 30, 25],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Line B",
        data: [5, 15, 10, 20, 18],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Simple Multi-Line Graph" },
    },
  },
});
