const blogContain = document.getElementById('blog-contain');
let blogsData = [];
let page = 1;
const perPage = 10;
let isLoading = false;
let totalItemsLoaded = 0; // Define totalItemsLoaded variable
let totalItemsExpected = 0; // Define totalItemsExpected variable

function isVideo(url) {
  return /\.(mp4|ogg|webm)$/i.test(url); // Check if URL ends with .mp4, .ogg, or .webm
}

const urlParams = new URLSearchParams(window.location.search);
                const titleParam = urlParams.get('id');
 
                console.log(titleParam,"tittle")
let urlApi=""
  if(!titleParam){
    urlApi=`https://admin.analogueitsolutions.satyasadhna.com/allblogs?page=${page}&limit=${perPage}`
  }
  else{
    urlApi=`https://admin.analogueitsolutions.satyasadhna.com/category/${titleParam}?page=${page}&limit=${perPage}&`
  }
function fetchData(page) {
  if (isLoading) return; // If already loading, ignore additional requests
  isLoading = true;
  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      blogsData = data.allBlogs || data.message
      totalItemsExpected = data.totalCount; // Update totalItemsExpected with the total count from the API
      console.log('data', data);
      console.log(blogsData.allBlogs);
      blogsData.forEach((blogdata) => {
        const { _id, createdAt, mainContent, date, title, subPicOne, mainPic } = blogdata;
        console.log(blogdata);
        const filenameWithExtension = `https://admin.analogueitsolutions.satyasadhna.com${mainPic}`;
        console.log(filenameWithExtension);
        const blogContainer = document.createElement('div');
        blogContainer.classList.add('ot-blog', 'blog-single', 'has-post-thumbnail');
        const mainImgDiv = document.createElement('div');
        mainImgDiv.classList.add('blog-img','blog-head-img');

        const mainImga = document.createElement('a');
        const formattedTitle = title.replace(/ /g, '-');
        mainImga.href = `blog-details.html?id=${formattedTitle}`;
        let mediaElement;
        if (isVideo(filenameWithExtension)) {
          mediaElement = document.createElement('video');
          mediaElement.src = filenameWithExtension;
          mediaElement.controls = true;
          mediaElement.autoplay = true;
          mediaElement.muted = true;
          mediaElement.addEventListener('loadeddata', function () {
            mediaElement.play();
          });
          mediaElement.addEventListener('ended', function () {
            mediaElement.currentTime = 1;
            mediaElement.play();
          });
        } else {
          mediaElement = document.createElement('img');
          mediaElement.classList.add('blog-head-img')
          mediaElement.src = filenameWithExtension;
          mediaElement.alt = "Blog Image";
        }
        mainImga.appendChild(mediaElement);
        mainImgDiv.appendChild(mainImga);

        const apiDate = date
        const dateObj = new Date(apiDate);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month}, ${year}`;

        console.log(formattedDate);

        const blogContentDiv = document.createElement('div');
        blogContentDiv.classList.add('blog-content');
        const blogMeta = document.createElement('div');
        blogMeta.classList.add('blog-meta');
        const blogDateA = document.createElement('a');
        blogDateA.href = `blog-details.html?id=${formattedTitle}`;
        const textNode = document.createTextNode(formattedDate);
        const blogDateIcon = document.createElement('i');
        blogDateIcon.classList.add('far', 'fa-calendar');
        const blogAuthor = document.createElement('a');
        blogAuthor.classList.add('author');
        blogAuthor.href = `blog-details.html?id=${formattedTitle}`;
        const textNodeAuthor = document.createTextNode("By Analogue");
        const authorIcon = document.createElement('i');
        authorIcon.classList.add('far', 'fa-user');

        blogMeta.appendChild(blogDateA);
        blogDateA.appendChild(blogDateIcon);
        blogDateA.appendChild(textNode);
        blogMeta.appendChild(blogAuthor);
        blogAuthor.appendChild(authorIcon);
        blogAuthor.appendChild(textNodeAuthor);
        blogContentDiv.appendChild(blogMeta);

        const blogTittle = document.createElement('h2');
        blogTittle.classList.add('blog-title');
        const blogTittlea = document.createElement('a');
        blogTittlea.href = `blog-details.html?id=${formattedTitle}`;
        const textNodeTittle = document.createTextNode(title);

        blogTittle.appendChild(blogTittlea);
        blogTittlea.appendChild(textNodeTittle);
        blogContentDiv.appendChild(blogTittle);

        const apiResponse = mainContent;
        const blogText = document.createElement('p');
        blogText.classList.add('blog-text');
        blogText.innerHTML = apiResponse;
        blogContentDiv.appendChild(blogText);

        const read = document.createElement('a');
        read.href = `blog-details.html?id=${formattedTitle}`;
        read.classList.add('link-btn');
        const readTextNode = document.createTextNode("Read More");
        const readIcon = document.createElement('i');
        readIcon.classList.add('fas', 'fa-arrow-right');
        read.appendChild(readTextNode);
        read.appendChild(readIcon);
        blogContentDiv.appendChild(read);

        blogContainer.appendChild(mainImgDiv);
        blogContainer.appendChild(blogContentDiv);

        blogContain.appendChild(blogContainer);
      });
      isLoading = false; // Reset isLoading flag after data is loaded
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      isLoading = false; // Reset isLoading flag on error
    });
}

// Initial data load
fetchData(page);

// Add scroll event listener
window.addEventListener('scroll', function () {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5 && totalItemsLoaded < totalItemsExpected) {
    totalItemsLoaded += perPage; // Increment totalItemsLoaded by perPage
    page++;
    fetchData(page);
  }
});
