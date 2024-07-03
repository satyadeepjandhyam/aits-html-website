const urlParams = new URLSearchParams(window.location.search);
const oldUrl = window.location.pathname;
console.log("oldurl",urlParams);
let titleParam=""
if( urlParams.get('id')){
   titleParam = urlParams.get('id');
}
else{
  titleParam = window.location.hash.substring(1);

}
                // const titleParam = urlParams.get('id'); // Get the 'id' parameter from the URL
                const formattedTitleParam = titleParam.replace(/-/g, ' '); // Replace dashes with spaces

                
console.log(formattedTitleParam, "title")


//                 console.log(titleParam)
                sessionStorage.setItem('originalUrl', formattedTitleParam);

                // const encodedTitleParam = encodeURIComponent(`/${titleParam}`);
                // const newUrl = `/blog-details.html/${encodedTitleParam}`;
                // window.history.replaceState({}, '', `blog-details.html/${titleParam}`);



                // const newUrl = window.location.pathname  + titleParam;
    
                // window.history.replaceState(null, '', titleParam);  

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
      blogsData = data.allblogs;
      recentBlogData =data.recentBlogs;
      console.log('data', data);
      console.log(blogsData.allBlogs);
      blogsData.forEach((blogdata) => {
        const { _id, createdAt, mainContent, date, title, subPicOne,subPicTwo,subContent, mainPic,
          additionalContent1,additionalTitle1,additionalContent2,additionalTitle2,
          additionalContent3,additionalTitle3,additionalContent4,additionalTitle4,
          additionalContent5,additionalTitle5,additionalContent6,additionalTitle6,
          additionalContent7,additionalTitle7,additionalContent8,additionalTitle8,
          additionalContent9,additionalTitle9,additionalContent10,additionalTitle10,
         } = blogdata;
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
        blogDateA.href = "#";
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

        const dataArray = [
          { content: additionalContent1, title: additionalTitle1 },
          { content: additionalContent2, title: additionalTitle2 },
          { content: additionalContent3, title: additionalTitle3 },
          { content: additionalContent4, title: additionalTitle4 },
          { content: additionalContent5, title: additionalTitle5 },
          { content: additionalContent6, title: additionalTitle6 },
          { content: additionalContent7, title: additionalTitle7 },
          { content: additionalContent8, title: additionalTitle8 },
          { content: additionalContent9, title: additionalTitle9 },
          { content: additionalContent10, title: additionalTitle10 },
        ];
        
        console.log(dataArray);
        
        const additionalContent = document.getElementById('additional-content');
        dataArray.forEach((each) => {
          if (each.content && each.title) {
            const blogDate = document.createElement('div');
            blogDate.classList.add('add-1');
            const head = document.createElement('h3');
            const dataTitle = document.createTextNode(each.title);
            head.appendChild(dataTitle);
            const para = document.createElement('p');
            const dataPara = document.createTextNode(each.content);
            para.appendChild(dataPara);
            blogDate.appendChild(head);
            blogDate.appendChild(para);
            additionalContent.appendChild(blogDate);
          }
        });
        
        }

        const blogLink = document.createElement('a');
        blogLink.href = `#`;
        blogLink.classList.add('text-inherit');
        blogLink.innerText = title;

        const blogDate = document.createElement('div');
        blogDate.classList.add('recent-post-meta');
        blogDate.innerHTML = `<i class="far fa-calendar"></i> ${formattedDate}`;
// console.log(additionalContent1,additionalContent2,additionalContent3);

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
        const formattedTitle = title.replace(/ /g, '-');

        const blogItem = document.createElement('div');
        blogItem.classList.add('recent-post');
        blogItem.innerHTML = `
            <div class="media-img">
                <a href="blogs.html?id=${formattedTitle}"><img src="https://admin.analogueitsolutions.satyasadhna.com/${subPicOne}" alt="Blog Image"></a>
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
    
    

    window.addEventListener('beforeunload', function(event) {
      // Remove the last two entries from the history stack
      window.history.go(-2);
    
      // Push a new state without changing the URL
      window.history.replaceState({}, '', `${oldUrl}?id=${titleParam}`);
    
      // Custom message (optional)
      // event.returnValue = 'Are you sure you want to leave this page?';
    });
    
    // const newUrl = 'new-url'; // Specify the new URL here

// Change the URL without reloading
// history.pushState({}, '', newUrl);

// Add an event listener for the window load event
console.log("Dfcgxdfg");

    // Add an event listener for the window load event

  // Check if the current URL is different from the original URL
//   let store=sessionStorage.getItem('originalUrl')

//   if (store!=="")
//  { window.addEventListener('afterload', function() {
//    console.log("store",store);
//     // Check if the current URL is different from the original URL
//     // const urlParams = new URLSearchParams(window.location.search);
//     // const titleParam = urlParams.get('id');
//     // const formattedTitleParam = titleParam.replace(/-/g, ' ');
//     if (window.location.pathname !== oldUrl && store!=="" ) {
//       // Restore the original URL if the current URL has changed and the 'id' parameter matches
//       history.replaceState({}, '', `${oldUrl}?id=${titleParam}`);
//       history.replaceState({}, '', `${titleParam}`);
//       window.history.go(-1);
//       store="";
//       console.log("store",store);
//   sessionStorage.removeItem('originalUrl')
//     }
//   });}
  