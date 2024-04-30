



class FooterTemplate extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `
       <div class="pop-up-form">
       <div class="pop-up-contact-form">
         <div class="form-wrapper">
           <div
             class="contact-form1"
             data-bg-src="assets/img/bg/contact_bg_2.png"
           >
             <h3 class="box-title">
               Let Us Elevate Your Projects With Our Skills
             </h3>
             <p class="box-text">
               Get a Quote from a Top Mobile App Development Company
             </p>
             <form id="form-two" class="input-label">
               <div class="row">
                 <div class="form-group line-input col-sm-6">
                   <input
                     name="name"
                     type="text"
                     class="form-control"
                     autocomplete="on"
                     id="name"
                     required
                   />
                   <label for="name">Your Name*</label>
                 </div>
                 <div class="form-group line-input col-sm-6">
                   <input
                     type="email"
                     class="form-control"
                     autocomplete="on"
                     name="email"
                     id="email"
                     required
                   />
                   <label for="email">Your Email*</label>
                   <span
                     id="email-errorF2"
                     style="
                       color: red;
                       display: none;
                       font-size: 12px;
                       margin-top: -10px;
                       margin-bottom: 15px;
                     "
                     >Enter a valid email address</span
                   >
                 </div>
 
                 <div class="form-group line-input col-sm-6">
                   <input
                     name="Phone"
                     pattern="[0-9]{10}"
                     autocomplete="on"
                     maxlength="10"
                     oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                     type="tel"
                     class="form-control"
                     id="number"
                     required
                   />
                   <label for="number">Phone Number*</label>
                 </div>
                 <div class="form-group line-input col-sm-6">
                   <input
                     type="text"
                     class="form-control"
                     autocomplete="on"
                     name="subject"
                     id="subject"
                     required
                   />
                   <label for="subject">Subject...</label>
                 </div>
                 <div class="form-group line-input col-12">
                   <select
                     class="form-select pb-10 mb-3"
                     name="reach"
                     id="reach"
                     required
                   >
                     <option value="">How Do You Reach Us?</option>
                     <option value="Google">Google</option>
                     <option value="Facebook">Facebook</option>
                     <option value="instagram">instagram</option>
                     <option value="LinkedIn">Linkedin</option>
                     <option value="Google Maps">Google Maps</option>
                     <option value="Others">Others</option>
                   </select>
                 </div>
                 <div class="form-group line-input col-12 pt-45">
                   <textarea
                     name="message"
                     id="message"
                     cols="30"
                     autocomplete="on"
                     rows="1"
                     class="form-control"
                     oninput="this.value = this.value.replace(/[^a-zA-Z0-9@.,?\s]/g, '');"
                     required
                   ></textarea>
                   <label for="message">Your Message*</label>
                 </div>
                 <div
                   class="form-btn col-12 mt-10 custom-form-footer"
                   style="
                     display: flex;
                     flex-wrap: wrap;
                     justify-content: space-between;
                     align-items: center;
                   "
                 >
                   <button
                     type="submit"
                     class="ot-btn style3"
                     style="margin-bottom: 10px"
                   >
                     Get a Quote
                   </button>
                   <span style="font-size: 15px; color: white; margin: 10px"
                     >Or</span
                   >
                   <div
                     style="
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       justify-content: center;
                     "
                   >
                     <div>
                       <p
                         style="
                           margin: 0;
                           color: white;
                           text-decoration: underline;
                         "
                       >
                         Call us now
                       </p>
                     </div>
                     <div style="display: flex; gap: 8px">
                       <a
                         onmouseover="this.style.textDecoration='underline';"
                         onmouseout="this.style.textDecoration='none';"
                         style="color: white; text-decoration: none"
                         href="tel:+91 89190 88163"
                         >+91 89190 88163</a
                       >
                       <a
                         onmouseover="this.style.textDecoration='underline';"
                         onmouseout="this.style.textDecoration='none';"
                         style="color: white; text-decoration: none"
                         href="tel:+91 6309423978"
                         >+91 6309423978</a
                       >
                     </div>
                   </div>
                 </div>
               </div>
 
               <p class="form-messages mb-0 mt-3"></p>
             </form>
           </div>
           <img
             src="./assets/img/shape/close-icon.png"
             alt="close-button"
             class="pop-up-form-close-btn"
           />
         </div>
       </div>
     </div>
         
       <footer
       class="footer-wrapper footer-layout1"
       data-bg-src="assets/img/bg/footer_bg_1.jpg"
     >
       <div class="widget-area">
         <div class="container">
           <div class="row justify-content-between">
             <div class="col-md-6 col-xl-auto">
               <div class="widget footer-widget">
                 <h3 class="widget_title">About Us</h3>
                 <div class="ot-widget-about">
                   <p class="footer-text">
                   Analogue is the Best Mobile App Development Company in Hyderabad, India. We are the skilled in Mobile App Development, E-Commerce Development, and Web Development
                   </p>
                   <div class="ot-social">
                     <a href="https://www.facebook.com/analogueitsolutions" target="_blank"
                       ><i class="fab fa-facebook-f"></i
                     ></a>
                     <a href="https://www.instagram.com/analogueitsolutions" target="_blank"
                       ><i class="fab fa-instagram"></i
                     ></a>
                     <a href="https://twitter.com/analogitt?lang=en" target="_blank"
                       ><i class="fab fa-twitter"></i
                     ></a>
                     <a href="https://www.linkedin.com/company/analogueitsolutions/" target="_blank"
                       ><i class="fab fa-linkedin-in"></i
                     ></a>
                     <a href="https://wa.me/+916309423978" target="_blank"
                       ><i class="fab fa-whatsapp"></i
                     ></a>
                     <a href="https://www.youtube.com/channel/UCwXs3Dw3somrW0sNyDDLEBg" target="_blank"
                       ><i class="fab fa-youtube"></i
                     ></a>
                     
                   </div>
                 </div>
               </div>
             </div>
             <div class="col-md-6 col-xl-auto">
               <div class="widget widget_nav_menu footer-widget">
                 <h3 class="widget_title">Links</h3>
                 <div class="menu-all-pages-container">
                   <ul class="menu">
                     <li><a href="about.html">About Us</a></li>
                     <li><a href="about.html">Our Mission</a></li>
                     <li>
                       <a href="best-mobile-app-development-company.html"
                         >Landing Page</a
                       >
                     </li>
                     <li><a href="project.html">Our Projects</a></li>
                     <li><a href="contact.html">Contact Us</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             <div class="col-md-6 col-xl-auto">
               <div class="widget widget_nav_menu footer-widget">
                 <h3 class="widget_title">Our Services</h3>
                 <div class="menu-all-pages-container">
                   <ul class="menu">
                     <li><a href="ui-ux-design-company-in-hyderabad.html">Ui Ux development</a></li>
                     <li><a href="website-development-company-in-hyderabad.html">Web Development</a></li>
                     <li><a href="mobile-app-development-company-in-hyderabad.html">Mobile App Development</a></li>
                     <li><a href="digital-marketing-company-in-hyderabad.html">Digital Marketing</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             <div class="col-md-6 col-xl-auto">
               <div class="widget footer-widget">
                 <h3 class="widget_title">Recent Posts</h3>
                 <div class="recent-post-wrap"  id="recentPostWrap">
                  
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="footer-bottom">
         <div class="container">
           <div class="footer-contact-wrap">
             <div class="footer-contact">
               <div class="box-icon icon-btn">
                 <i class="fal fa-location-dot"></i>
               </div>
               <div class="media-body">
                 <h4 class="box-title">Location</h4>
                 <p class="box-text">1-98/4/64, Jaya Vijaya Plaza, Vittal Rao Nagar, Mindspace, Madhapur, Hyderabad-500081.</p>
               </div>
             </div>
             <div class="divider"></div>
             <div class="footer-contact">
               <div class="box-icon icon-btn"><i class="fal fa-clock"></i></div>
               <div class="media-body">
                 <h4 class="box-title">Working Hours</h4>
                 <p class="box-text">
                   <span>Monday - Saturday</span><br /><span
                     >10am - 7pm</span
                   >
                 </p>
               </div>
             </div>
             <div class="divider"></div>
             <div class="footer-contact">
               <div class="box-icon icon-btn">
                 <i class="fa-light fa-phone-volume"></i>
               </div>
               <div class="media-body">
                 <h4 class="box-title">Contact Us</h4>
                 <p class="box-text">
                   <span><a style="textdecoration:none;color:white" href="mailto:info@analogueitsolutions.com"
                   >info@analogueitsolutions.com</a
                 ></span><br /><span
                     > <a style="textdecoration:none;color:white" href="tel:+91 89190 88163">+91 89190 88163</a></span
                   >
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="copyright-wrap">
         <div class="container text-center">
           <p class="copyright-text">
             Copyright <i class="fal fa-copyright"></i> 2023
             <a href="index.html">Tronix</a>. All Rights Reserved.
           </p>
         </div>
       </div>
     </footer>
         `;
    }
 }


 
 customElements.define('special-footer',FooterTemplate);




 const recentPostWrap = document.getElementById('recentPostWrap');

 fetch('https://admin.analogueitsolutions.satyasadhna.com/allblogs')
  .then(response => response.json())
  .then(data => {
      recentData = data.recentBlogs.slice(0, 2); 
      recentData.forEach(blog => {
          const { _id, date, title, subPicOne } = blog;

          const apiDate = date
        const dateObj = new Date(apiDate);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month}, ${year}`;

        //   const recentPostDiv=document.createElement('div')
        //   recentPostDiv.classList.add('recent-post')

        //   const mediaImg =document.createElement('div')
        //   mediaImg.classList.add('media-img')

          const blogLink = document.createElement('a');
          blogLink.href = `blog-details.html?id=${title}`;
          blogLink.classList.add('text-inherit');
          blogLink.innerText = title;

          const blogDate = document.createElement('div');
          blogDate.classList.add('recent-post-meta');
          blogDate.innerHTML = `<i class="far fa-calendar"></i> ${formattedDate}`;

          const blogItem = document.createElement('div');
          blogItem.classList.add('recent-post');
          blogItem.innerHTML = `
            <div class="media-img">
              <a href="blog-details.html?id=${title}"><img src="https://admin.analogueitsolutions.satyasadhna.com/${subPicOne}" alt="Blog Image"></a>
            </div>
            <div class="media-body">
              <h4 class="post-title">${blogLink.outerHTML}</h4>
              <div>${blogDate.outerHTML}</div>
            </div>
           
          `;

          recentPostWrap.appendChild(blogItem);
      });
  })
  .catch(error => {
      console.error('Error fetching recent posts:', error);
  });


