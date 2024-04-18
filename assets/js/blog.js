var parser = new DOMParser();

function fetchData() {
  fetch("https://admin.analogueitsolutions.satyasadhna.com/allblogs")
    .then((response) => response.json())
    .then((data) => {
      console.log("allBlogs Data >>>>>>> ", data);
      const allBlogs = data.allBlogs;
      // const recentBlogs = data.recentBlogs;
      const htmlDoc = parser.parseFromString(allBlogs[1].blogData, "text/html");
      const title = allBlogs[0].title;
      let blogContent = htmlDoc.body.innerHTML;

      let imageTag = "";
      const imageTagRegex = /<img[^>]+src="([^">]+)"/;
      const match = blogContent.match(imageTagRegex);
      if (match) {
        imageTag = match[0];
      }
      console.log("Title:", title);
      console.log("Blog Content:", blogContent);
      console.log("Image Tag:", imageTag);

      const injectTestDiv = document.querySelector(".inject-test");
      if (injectTestDiv) {
        injectTestDiv.innerHTML = blogContent;
      } else {
        console.error("Div with class 'inject-test' not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      //   document.getElementById("data").innerHTML = `<p>Error fetching data</p>`;
    });
}

// Call the fetchData function when the page loads
window.onload = fetchData;
