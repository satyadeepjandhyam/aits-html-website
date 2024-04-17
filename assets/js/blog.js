// Function to make API call and update HTML
function fetchData() {
  fetch("https://admin.analogueitsolutions.satyasadhna.com/allblogs")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   const message = data.message;
      //   document.getElementById("data").innerHTML = `<p>${message}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      //   document.getElementById("data").innerHTML = `<p>Error fetching data</p>`;
    });
}

// Call the fetchData function when the page loads
window.onload = fetchData;
