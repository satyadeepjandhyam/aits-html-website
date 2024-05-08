const urlParams = new URLSearchParams(window.location.search);
const oldUrl = window.location.pathname;
                const titleParam = urlParams.get('id'); // Get the 'id' parameter from the URL
                const formattedTitleParam = titleParam.replace(/-/g, ' '); // Replace dashes with spaces

                
console.log(formattedTitleParam, "title")
                console.log(titleParam)

                // const encodedTitleParam = encodeURIComponent(`/${titleParam}`);
                // const newUrl = `/blog-details.html/${encodedTitleParam}`;
                // window.history.replaceState({}, '', `blog-details.html/${titleParam}`);



                // const newUrl = window.location.pathname  + titleParam;
                // window.history.replaceState({}, '', titleParam);  

                const blodDetilsH1=document.getElementById('tittle-of-blog')
                const breadGram=document.createTextNode(formattedTitleParam)
                blodDetilsH1.appendChild(breadGram)        

let blogsData = [];
let recentBlogData=[];

function isVideo(url) {
  return /\.(mp4|ogg|webm)$/i.test(url); // Check if URL ends with .mp4, .ogg, or .webm
}


  fetch(`https://admin.analogueitsolutions.satyasadhna.com/allblogs`)
    .then((response) => response.json())
    .then((data) => {
      blogsData = data.allBlogs;
      recentBlogData =data.allRecentBlogs;
      console.log('data', data);
      console.log(blogsData.allBlogs);
      blogsData.forEach((blogdata) => {
        const { _id, createdAt, mainContent, date, title, subPicOne,subPicTwo,subContent, mainPic } = blogdata;
        const apiDate = date
        const dateObj = new Date(apiDate);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month}, ${year}`;
        if(title==formattedTitleParam){
            const filenameWithExtension = `https://admin.analogueitsolutions.satyasadhna.com${mainPic}`;
            console.log(filenameWithExtension);

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
          mediaElement.src = filenameWithExtension;
          mediaElement.alt = "Blog Image";
        }
            const blogImgDetials=document.getElementById('blog-img-detials')
            blogImgDetials.appendChild(mediaElement);


           


        const blogMeta=document.getElementById('blog-meta-detials')
        const blogDateA = document.createElement('a');
        blogDateA.href = `blog-details.html?id=${title}`;
        const textNode = document.createTextNode(formattedDate);
        const blogDateIcon = document.createElement('i');
        blogDateIcon.classList.add('far', 'fa-calendar');
        const blogAuthor = document.createElement('a');
        blogAuthor.classList.add('author');
        blogAuthor.href = "#";
        const textNodeAuthor = document.createTextNode("By Analogue");
        const authorIcon = document.createElement('i');
        authorIcon.classList.add('far', 'fa-user');

        blogMeta.appendChild(blogDateA);
        blogDateA.appendChild(blogDateIcon);
        blogDateA.appendChild(textNode);
        blogMeta.appendChild(blogAuthor);
        blogAuthor.appendChild(authorIcon);
        blogAuthor.appendChild(textNodeAuthor);

        const blogTittle=document.getElementById('blog-title-detials')
        const textNodeTittle = document.createTextNode(title);
        blogTittle.appendChild(textNodeTittle);


        const apiResponse = mainContent;
        const blogDescreptionDetials=document.getElementById('blog-descreption-detials')
        blogDescreptionDetials.innerHTML = apiResponse;

        const imgDetialsDiv=document.getElementById('img-subdetials-div')
        const imgSub1 =document.createElement('img')
        imgSub1.classList.add('w-100','rounded-15')
        imgSub1.src=`https://admin.analogueitsolutions.satyasadhna.com/${subPicOne}`
        imgSub1.alt="Blog Image"
        imgDetialsDiv.appendChild(imgSub1)

        const imgDetialsDiv2=document.getElementById('img-subdetials2-div')
        const imgSub2 =document.createElement('img')
        imgSub2.classList.add('w-100','rounded-15')
        imgSub2.src=`https://admin.analogueitsolutions.satyasadhna.com/${subPicTwo}`
        imgSub2.alt="Blog Image"
        imgDetialsDiv2.appendChild(imgSub2)

        const apiResponsesub = subContent;
        const subDescreption =document.getElementById('sub-descreption')
        subDescreption.innerHTML = apiResponsesub;
        }

        const blogLink = document.createElement('a');
        blogLink.href = `blog-details.html?id=${title}`;
        blogLink.classList.add('text-inherit');
        blogLink.innerText = title;

        const blogDate = document.createElement('div');
        blogDate.classList.add('recent-post-meta');
        blogDate.innerHTML = `<i class="far fa-calendar"></i> ${formattedDate}`;
    })

    const recentPostWrapBlogdetials = document.getElementById('recent-post-wrap-blogdetials');

    recentBlogData.slice(0, 2).forEach((recentdata) => {
        const { title, subPicOne,date } = recentdata;
        const apiDate = date
        const dateObj = new Date(apiDate);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month}, ${year}`;

        const blogItem = document.createElement('div');
        blogItem.classList.add('recent-post');
        blogItem.innerHTML = `
            <div class="media-img">
                <a href="blog-details.html?id=${title}"><img src="https://admin.analogueitsolutions.satyasadhna.com/${subPicOne}" alt="Blog Image"></a>
            </div>
            <div class="media-body">
                <h4 class="post-title">${title}</h4>
                <div>${formattedDate}</div>
            </div>
        `;

        recentPostWrapBlogdetials.appendChild(blogItem);
    });
  
})
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    // window.history.pushState({}, '', '/blog.html');

    // window.addEventListener('unload', function() {
    //   window.history.go(-2);
    //   window.history.pushState({}, '', '../blog.html');
    // });
    
    // window.addEventListener('beforeunload', function(event) {
    //   // Remove the last two entries from the history stack
    //   window.history.go(-2);
    
    //   // Push a new state without changing the URL
    //   window.history.replaceState({}, '', `${oldUrl}?id=${titleParam}`);
    
    //   // Custom message (optional)
    //   // event.returnValue = 'Are you sure you want to leave this page?';
    // });
    
    