// Add menu toggle logic
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.getElementById("closeIcon");
const hamburgerIcon = document.getElementById("hamburgerIcon");

hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("hidden");

    if (isOpen) {
        mobileMenu.classList.remove("hidden");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    const isClickInside = hamburgerBtn.contains(event.target) || mobileMenu.contains(event.target);

    if (!isClickInside) {
        mobileMenu.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});














// services section logic
const cardData = [
    { title: "We grow with Tailored Digital Strategies", description: "Helping you navigate the online landscape with a roadmap for success.", icon: "\uD83D\uDCFA" },
    { title: "Let's Build Your Brand on Social Media", description: "Building your brand presence on social platforms, engaging your audience.", icon: "\uD83D\uDC8E" },
    { title: "Boost Your Visibility with Effective SEO Solutions", description: "Enhancing your website's visibility with SEO techniques that increase search rankings.", icon: "\uD83D\uDCCB" },
    { title: "Conversions Through Personalized Email", description: "Designing personalized email campaigns that nurture leads, build customer.", icon: "\uD83D\uDCC1" },
    { title: "Content to Captivate Your Audience", description: "Design solutions that leave a lasting impression on your audience.", icon: "\uD83D\uDCE2" },
    { title: "Maximize Customized E-commerce Solutions", description: "Helping you make informed decisions and optimize your marketing efforts.", icon: "\uD83D\uDCE6" },
    { title: "Analytics for Smarter Business Decisions", description: "We enhance user experience and improve your digital storefront.", icon: "\uD83D\uDD8A" },
    { title: "Build Brand with Expert Design Services", description: "Strengthens your brand and effectively supports your marketing goals", icon: "\uD83C\uDF1F" }
];

const gridContainer = document.getElementById("gridContainer");
console.log('gridContainer:', gridContainer); // Debugging log

if (gridContainer) {
    cardData.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = "p-6 rounded-2xl flex flex-col items-start";
        cardElement.innerHTML = `
        <div class="text-4xl">${card.icon}</div>
        <h2 class="mt-4 text-[18px] text-white clash-font font-medium">${card.title}</h2>
        <p class="mt-2 text-gray-300 text-sm font-light clash-font">${card.description}</p>
        <button
        class="py-2 flex justify-center rounded-md text-md group hover:text- items-center transition-colors relative inline-flex justify-centent-center items-center text-sm md:text-base font-medium tracking-wide cursor-pointer transition-all duration-300 ease-in rounded-lg 
        text-[#ffff] font-bold flex items-center hover:text-yellow-300">
        <span class="uppercase clash-font text-sm">Explore Now</span>
        <svg xmlns="http://www.w3.org/2000/svg"
            class="ml-2 w-5 border-2 hover:border-yellow-400 rounded-full p-  group-hover:translate-x-1 transition-transform" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
    </button>  
    `;
        console.log('Appending card:', cardElement); // Debugging log
        gridContainer.appendChild(cardElement);
    });
} else {
    console.error('gridContainer not found');
}






// blog section logic
const blogs = [
    {
        title: "Latest Marketing Trends and Tips for 2025 ",
        category: "CONTENT MARKETING",
        time: "5 min ago",
    },
    {
        title: "Essential Digital Marketing Trends to Watch in 2024",
        category: "MARKETING TRENDS",
        time: "1 day ago",
    },
    {
        title: "How Data-Driven Digital Marketing Strategy",
        category: "DATA & ANALYTICS",
        time: "1 week ago",
    },
];

const blogContainer = document.getElementById("blogContainer");

blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "bg-gradient-to-r from-[#350876] to-[#17014D] p-5 rounded-xl text-white";

    blogCard.innerHTML = `
        <div class="bg-gray-300 h-40 rounded-lg mb-4"></div>
        <h3 class="text-lg clash-font font-[500] mb-2">${blog.title}</h3>
         <div class="flex justify-between items-center pt-10">
           <div>
            <p class="text-xs font-[500] text-[#FFFFFF] clash-font">${blog.category}</p>
            <p class="text-[14px] font-[500] text-gray-400 mb-4 clash-font">${blog.time}</p>
            </div>
        <button class="px-3 py-2 rounded-full
        max-w-32 text-sm clash-font bg-transparent items-center justify-center flex  shadow-lg  text-[#FFFFFF]   duration-500 cursor-pointer active:scale-[0.98] border border-white text-white hover:bg-yellow-400 hover:text-black font-[500] hover:border-none  
        ">Learn More</button>
         </div>
    `;

    blogContainer.appendChild(blogCard);
});




// Logos section logic
const slidesData = [
    { id: 1, title: "", image: "assets/icons/logo_1.png" },
    { id: 2, title: "", image: "assets/icons/logo_2.png " },
    { id: 3, title: "", image: "assets/icons/logo_3.svg" },
    { id: 4, title: "", image: "assets/icons/logo_4.png" },
    { id: 5, title: "", image: "assets/icons/logo_5.png" },
    { id: 6, title: "", image: "assets/icons/logo_6.png" },
    { id: 7, title: "", image: "assets/icons/logo_7.png" },
    { id: 8, title: "", image: "assets/icons/logo_8.png" },
];


// Select the Swiper Wrapper
const swiperWrapp = document.getElementById("swiperWrapper");

// Generate Dynamic Slides
slidesData.forEach(slide => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("swiper-slide", "flex", "justify-center", "items-center");
    slideElement.innerHTML = `
        <div class="slide-content w-32 h-32 flex flex-col justify-center items-center rounded-xl border-4 border-[#231e3e] p-4 transition">
            <img src="${slide.image}" alt="${slide.title}" class="w-24">
            <p class="text-white text-sm mt-2">${slide.title}</p>
        </div>
    `;
    swiperWrapp.appendChild(slideElement);
});


// Initialize Swiper with responsive settings
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
    },
    on: {
        slideChangeTransitionEnd: function () {
            document.querySelectorAll('.swiper-slide .slide-content').forEach(slide => {
                slide.classList.remove("opacity-100", "scale-105", "shadow-lg", "shadow-[#956f31]-500/50", "border-4", "border-orange-500/50",);
                slide.classList.add("opacity-30", "scale-90", "border-2", "border-[#231e3e]",);
            });

            const activeSlide = document.querySelector('.swiper-slide-active .slide-content');
            if (activeSlide) {
                activeSlide.classList.remove("opacity-30", "scale-90");
                activeSlide.classList.add("opacity-100", "scale-105", "shadow-lg", "shadow-orange-500/50", "border-4", "border-orange-500/50");
            }
        }
    }
});





// our work logic
const desktopScreens = document.querySelectorAll(".desktop-screen");
const mobileScreens = document.querySelectorAll(".mobile-screen");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselWrapper = document.getElementById("carousel-wrapper");
const indicators = document.querySelectorAll('.carousel-indicator');

const slides = [
    { desktop: "assets/images/desktop_work_1.png", mobile: "assets/images/mobile_1.jpeg" },
    { desktop: "assets/images/desktop_work_2.png", mobile: "assets/images/mobile_2.jpeg" },
    { desktop: "assets/images/desktop_work_3.png", mobile: "assets/images/mobile_3.jpeg" },
    { desktop: "assets/images/desktop_work_4.png", mobile: "assets/images/mobile_4.jpeg" },
    { desktop: "assets/images/desktop_work_5.png", mobile: "assets/images/mobile_5.jpeg" },
    { desktop: "assets/images/desktop_work_6.png", mobile: "assets/images/mobile_6.jpeg" },

];

let currentIndex = 0;

function updateCarousel() {
    // Update desktop screens
    desktopScreens.forEach(screen => screen.src = slides[currentIndex].desktop);
    // Update mobile screens
    mobileScreens.forEach(screen => screen.src = slides[currentIndex].mobile);

    // Update the position of the carousel wrapper
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the active indicator
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

function autoSlide() {
    // Move to the next slide, looping back to the first one if necessary
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

nextBtn.addEventListener("click", () => {
    // Move to the next slide, looping back to the first one if necessary
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    // Move to the previous slide, looping back to the last one if necessary
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// // Auto slide every 5 seconds
setInterval(autoSlide, 3000);

// Initialize the carousel
updateCarousel();




// testimonial logic
const testimonials = [
    {
        name: "Pavel Solomin",
        role: "CEO, LearnSphere Inc.",
        content:
            "We needed a high-performing, SEO-friendly website for our education platform, and they delivered exactly what we envisioned. The new design has significantly boosted engagement and trust among our users.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        category: "Web Development",
    },
    {
        name: "Jason T.",
        role: "Co-Founder, EcoVolt Systems",
        content:
            "Their team built a robust website for our renewable energy solutions company. It’s sleek, responsive, and showcases our services perfectly. Couldn’t be happier!",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        category: "Web Development",
    },
    {
        name: "Sarah K.",
        role: "Owner, HandyNest",
        content:
            "We were looking for an easy-to-use mobile app for our home services platform, and they exceeded our expectations. The app runs smoothly on both iOS and Android, and our customers are loving it.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        category: "Mobile App Development",
    },
    {
        name: "David M.",
        role: "CTO, RideWave Rentals",
        content:
            "The app they created for our bike rental business is intuitive and feature-rich. It’s helped us improve bookings and deliver a better customer experience.",
        image:
            "https://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=DaYoIWA0PemBp_gwRflBhZH193puk3z-chb7N12adfY=",
        category: "Mobile App Development",
    },
    {
        name: "Lisa P.",
        role: "Founder, RadiantGlow Skincare",
        content:
            "Their team launched a stunning Shopify store for our skincare brand, and it’s been a game-changer. Sales have been consistently growing since day one!",
        image:
            "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
        category: "E-Commerce Solutions",
    },
    {
        name: "Ryan S.",
        role: "Manager, HavenLiving Interiors",
        content:
            "Our online furniture store needed an overhaul, and they delivered a platform that’s fast, secure, and optimized for sales. It’s a huge win for our business.",
        image:
            "https://www.shutterstock.com/image-photo/headshot-smiling-handsome-hindu-man-260nw-2115297203.jpg",
        category: "E-Commerce Solutions",
    },
    {
        name: "Olivia W.",
        role: "Marketing Director, UrbanScape Designs",
        content:
            "Thanks to their SEO expertise, our website now ranks on the first page for several competitive keywords. We’ve seen a 40% increase in organic traffic!",
        image:
            "https://img.freepik.com/free-photo/portrait-businesswoman-window-2_1262-1491.jpg",
        category: "SEO & Digital Marketing",
    },
    {
        name: "Brian L.",
        role: "Owner, FlexPro Fitness",
        content:
            "Their social media strategy and ad management have given us the exposure we needed. Leads are pouring in, and we’re thrilled with the results.",
        image:
            "https://i.pinimg.com/originals/37/4c/c0/374cc0b39ee69f4f2b3eb29de7aea684.jpg",
        category: "SEO & Digital Marketing",
    },
    {
        name: "Natalie H.",
        role: "Product Manager, StreamView Media",
        content:
            "Our app’s new design is a hit with our users! It’s intuitive, visually stunning, and has significantly improved retention rates.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtFvVKz3jmx8wSX7U5WiK-g6tN7pVr4lkCA&s",
        category: "UI/UX Design",
    },
    {
        name: "Kevin D.",
        role: "CEO, BistroCraft",
        content:
            "They redesigned our website with a clean, modern look, making it much easier for customers to navigate. The results have been fantastic.",
        image:
            "https://www.shutterstock.com/image-photo/headshot-satisfied-cheerful-handsome-man-260nw-793117360.jpg",
        category: "UI/UX Design",
    },
    {
        name: "Sophia G.",
        role: "Owner, LuxeNest Decor",
        content:
            "Our website’s loading time was a major issue, but after their optimization, it’s blazing fast. The improvement in user experience is incredible.",
        image:
            "https://st4.depositphotos.com/4678277/28917/i/450/depositphotos_289173464-stock-photo-close-up-photo-amazing-he.jpg",
        category: "Performance Optimization",
    },
    {
        name: "Mark P.",
        role: "Founder, AutoNext",
        content:
            "They streamlined our site’s performance, and the difference is clear. Both our traffic and conversions have seen a noticeable boost.",
        image:
            "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
        category: "Performance Optimization",
    },
    {
        name: "Laura C.",
        role: "Operations Manager, FreshFields Agriculture",
        content:
            "Their custom software solution has completely transformed our supply chain operations. It’s efficient, reliable, and easy to use.",
        image:
            "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
        category: "Custom Software Solutions",
    },
    {
        name: "Ethan J.",
        role: "Director, PrimeTrack Logistics",
        content:
            "We had a complex workflow issue that required a unique solution, and they nailed it. The software has saved us countless hours and improved productivity.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
        category: "Custom Software Solutions",
    },
];

const swiperWrapper = document.getElementById("swiper-wrapper");
testimonials.forEach((testimonial) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";
    swiperSlide.innerHTML = `        
        <section class="clash-font ">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-[#1C005F] rounded-xl p-3 sm:p-6 min-h-full sm:h-[15rem] mb-2 shadow-lg relative">
                    
                    <div class="flex items-center ">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-4">
                        <div class = "">
                            
                            <code class="font-bold text-[#FFFFFF] text-base">${testimonial.name}</code>
                            <div><code class="text-[#FFFFFF] opacity-[80%] font-[400] leading-[19px]">${testimonial.role}</code></div>
                                                               
                        </div>
                         
                        
                    </div>
                    <div class = "mt-14 text-left clash-font">
                        <p class="text-[#FFFFFF] text-xs leading-[24px]">This is my first time working with a marketing company and I had a fantastic experience. Business is doing better than ever and I am very grateful for Toolaf.</p>
                    </div>
                </div>
                
            </div>
        </section> `;
    swiperWrapper.appendChild(swiperSlide);
});
const swiperr = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        740: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// Ensure autoplay stops when hovering
const swiperContainer = document.querySelector('.swiper-container');
swiperContainer.addEventListener('mouseenter', () => {
    swiperr.autoplay.stop(); // Stop autoplay
});
swiperContainer.addEventListener('mouseleave', () => {
    swiperr.autoplay.start(); // Resume autoplay
});




    // Toggle the active class based on the current section
    const links = document.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    function setActiveLink() {
        let index = -1;
        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                index = i;
            }
        });

        links.forEach(link => {
            link.classList.remove('bg-gray-700');
        });

        if (index !== -1) {
            links[index].classList.add('bg-gray-700');
        }
    }

    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink);

    // Update active link on click (for mobile menu)
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(l => l.classList.remove('bg-gray-700'));
            e.target.classList.add('bg-gray-700');
        });
    });