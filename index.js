// Declaration of variables
const xAxis = [];
const labels = [];
const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "brown",
  "gray",
  "cyan",
  "pink",
  "black",
];
const dataArray = [];
const datasets = [];

// API URL and dataset ID
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
    // Successfully fetched data
    console.log(data.result.records);
    // Extracting data for Line Graph
    // Getting types of crimes
    for (let i = 1; i < data.result.records.length; i++) {
      labels.push(data.result.records[i].DataSeries);
    }

    for (let i = 1; i < data.result.records.length - 2; i++) {
      dataArray.push(data.result.records[i]);
    }
    dataArray.forEach((obj) => {
      delete obj._id;
      delete obj.DataSeries;
    });

    for (let i = 0; i < dataArray.length; i++) {
      datasets.push({
        label: labels[i],
        data: dataArray[i],
        borderColor: colors[i % colors.length],
        fill: false,
      });
    }
    const myChart = new Chart(document.getElementById("myChart"), {
      type: "line",
      data: {
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Most Common Crime in Singapore",
          },
        },
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
