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
    { title: "Build Brand with Expert Design Services", description: "Strengthens your brand and supports your marketing goals.", icon: "\uD83C\uDF1F" }
];

const gridContainer = document.getElementById("gridContainer");
console.log('gridContainer:', gridContainer); // Debugging log

if (gridContainer) {
    cardData.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = "p-6 rounded-2xl flex flex-col items-start";
        cardElement.innerHTML = `
        <div class="text-4xl">${card.icon}</div>
        <h2 class="mt-4 text-xl text-white font-semibold">${card.title}</h2>
        <p class="mt-2 text-gray-300">${card.description}</p>
        <button
        class="py-2 flex justify-center rounded-md text-md group hover:text- items-center transition-colors relative inline-flex justify-centent-center items-center text-sm md:text-base font-medium tracking-wide cursor-pointer transition-all duration-300 ease-in rounded-lg 
        text-gray-400 font-bold flex items-center hover:text-yellow-300">
        <span class="uppercase">Explore Now</span>
        <svg xmlns="http://www.w3.org/2000/svg"
            class="ml-2 w-7 border-2 hover:border-yellow-400 rounded-full p-1  group-hover:translate-x-1 transition-transform" fill="none"
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
        title: "Latest Marketing Trends and Tips",
        category: "CONTENT MARKETING",
        time: "5 min ago",
        buttonColor: "border border-white text-white",
    },
    {
        title: "Essential Digital Marketing Trends to Watch in 2024",
        category: "MARKETING TRENDS",
        time: "1 day ago",
        buttonColor: "bg-yellow-400 text-black",
    },
    {
        title: "How Data-Driven Digital Marketing Strategy",
        category: "DATA & ANALYTICS",
        time: "1 week ago",
        buttonColor: "border border-white text-white",
    },
];

const blogContainer = document.getElementById("blogContainer");

blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "bg-gradient-to-r from-[#350876] to-[#17014D] p-5 rounded-xl text-white";

    blogCard.innerHTML = `
        <div class="bg-gray-300 h-40 rounded-lg mb-4"></div>
        <h3 class="text-lg font-semibold mb-2">${blog.title}</h3>
         <div class="flex justify-between items-center pt-10">
           <div>
            <p class="text-xs font-bold text-gray-400">${blog.category}</p>
            <p class="text-xs text-gray-400 mb-4">${blog.time}</p>
            </div>
        <button class="px-4 py-2 rounded-full ${blog.buttonColor}">Learn More</button>
         </div>
    `;

    blogContainer.appendChild(blogCard);
});




