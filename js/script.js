document.addEventListener('DOMContentLoaded', () => {

    // --- Core Website Functionality (Navbar & Footer Year) ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    // --- Dynamic Service Page Functionality ---
    const serviceData = {
        'weddings': {
            title: "Weddings & Social Events",
            description: "From intimate ceremonies to grand celebrations, we make your dream day a beautiful reality. Our comprehensive wedding planning services are designed to handle every detail, so you can focus on making memories.",
            image: "img/wedding-hero.jpg",
            offerings: [
                'Hospitality Team: Guest reception, welcome desk, valet, refreshments',
                'Show-Flow Managers: Ceremony timeline management, processional coordination',
                'Logistics Staff: Venue setup, décor handling, technical support',
                'Helpers/Runners: Escorting guests, assisting vendors, emergency tasks',
                'Promoters: Supporting branded activities, managing sponsor integrations'
            ],
            process: [
                {
                    icon: 'fas fa-question-circle',
                    title: '1. Inquire with Event Company',
                    description: 'Our journey begins when you reach out to us. We listen to your vision and discuss how we can turn your dream into reality.'
                },
                {
                    icon: 'fas fa-users-cog',
                    title: '2. Create the Perfect Team & Briefing',
                    description: 'We assemble a dedicated team of specialists tailored to your specific event needs and brief them on every detail of your plan.'
                },
                {
                    icon: 'fas fa-user-shield',
                    title: '3. On-Event Back-up',
                    description: 'To ensure a seamless experience, we have a back-up plan in place for every role, ready to handle any unexpected situations.'
                },
                {
                    icon: 'fas fa-party-horn',
                    title: '4. Successful Event',
                    description: 'Through meticulous planning and flawless execution, we guarantee an unforgettable event that exceeds your expectations.'
                }
            ]
        },
        'corporate': {
            title: "Corporate Events",
            description: "Professional planning for conferences, product launches, meetings, and team-building events that are sure to impress your clients and employees.",
            image: "img/corporate-hero.jpg",
            offerings: [
                'Account Manager: Ensures smooth client communication & satisfaction.',
                'Event Planner: Designs schedules, layouts, and event flow.',
                'On-site Lead: Supervises execution and manages live changes.',
                'Hospitality Team: Welcomes and assists guests at all touchpoints.',
                'AV & Production Crew: Handles stage, sound, lights, and visuals.',
                'Logistics Team: Manages transport, equipment, and vendor support.',
                'Runners/Helpers: Execute urgent, last-minute event tasks.',
                'Photographer/Videographer: Captures key moments professionally.',
                'Promoters/Hosts/Emcees: Engages audience and drives interaction.'
            ],
            process: [
                {
                    icon: 'fas fa-chart-line',
                    title: '1. Strategy & Goals',
                    description: 'We align on your corporate goals and define a clear strategy to ensure the event delivers maximum return on investment.'
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: '2. Detailed Planning',
                    description: 'We meticulously plan every detail, including venue booking, speaker coordination, and agenda creation, to ensure a flawless experience.'
                },
                {
                    icon: 'fas fa-bullhorn',
                    title: '3. Flawless Execution',
                    description: 'Our team manages on-site logistics, handles all vendor relationships, and ensures your event runs smoothly and professionally.'
                },
                {
                    icon: 'fas fa-star',
                    title: '4. Post-Event Analytics',
                    description: 'We provide comprehensive post-event analytics to measure success and gather insights for future events.'
                }
            ]
        },
        'exhibitions': {
            title: "Exhibitions & Trade Shows",
            description: "Expert management to ensure your exhibition is a seamless, professional, and successful experience.",
            image: "img/exhibitions-hero.jpg",
            offerings: [
                'Strategic Planning & Booth Design',
                'Exhibitor & Vendor Coordination',
                'Logistics & On-Site Management',
                'Marketing & Promotion',
                'Lead Capture & Follow-up Systems'
            ],
            process: [
                { icon: 'fas fa-clipboard-list', title: '1. Concept & Planning', description: 'We work with you to define your goals and develop a detailed plan for your trade show or exhibition.' },
                { icon: 'fas fa-tools', title: '2. Build & Setup', description: 'Our team manages the build, logistics, and on-site setup, ensuring everything is in place and ready to go.' },
                { icon: 'fas fa-handshake', title: '3. Engagement & Follow-up', description: 'We provide on-site support to help you engage visitors and ensure a successful follow-up after the event.' }
            ]
        },
        'concerts': {
            title: "Concerts & Festivals",
            description: "Managing logistics, stage setup, and crowd control for an unforgettable music event.",
            image: "img/concerts-hero.jpg",
            offerings: [
                'Stage & Production Management',
                'Artist & Rider Coordination',
                'Crowd Control & Security Planning',
                'Ticketing & Guest Management',
                'Sound & Lighting Design'
            ],
            process: [
                { icon: 'fas fa-users-cog', title: '1. Strategy & Sourcing', description: 'We plan the event logistics, talent sourcing, and venue selection to create a blueprint for success.' },
                { icon: 'fas fa-music', title: '2. Technical Production', description: 'Our team handles all technical aspects, including sound, lighting, stage design, and artist relations.' },
                { icon: 'fas fa-running', title: '3. Live Execution', description: 'On event day, we manage all live elements, including crowd control and artist transitions, for a flawless show.' }
            ]
        },
        'sports': {
            title: "Sports Events & Tournaments",
            description: "Seamless coordination of tournaments, fan zones, and sporting championships for all levels.",
            image: "img/sports-hero.jpg",
            offerings: [
                'Tournament Logistics & Scheduling',
                'Venue & Field Management',
                'Athlete & Participant Registration',
                'Sponsorship & Brand Integration',
                'Live Scoring & Broadcasting'
            ],
            process: [
                { icon: 'fas fa-trophy', title: '1. Event Blueprint', description: 'We design a detailed event blueprint, including tournament brackets, logistics, and participant management.' },
                { icon: 'fas fa-running', title: '2. On-Site Setup', description: 'Our team manages venue setup, field preparation, and equipment to ensure everything is ready for the athletes.' },
                { icon: 'fas fa-medal', title: '3. Flawless Competition', description: 'We oversee the live event, ensuring smooth transitions between matches and managing all on-site logistics.' }
            ]
        },
        'parties': {
            title: "Private Parties",
            description: "Turning personal milestones into unforgettable memories with creative and flawless execution.",
            image: "img/parties-hero.jpg",
            offerings: [
                'Thematic Design & Decor',
                'Catering & Beverage Services',
                'Entertainment & Music Planning',
                'Guest List & RSVP Management',
                'Venue & Supplier Coordination'
            ],
            process: [
                { icon: 'fas fa-cocktail', title: '1. Concept & Vision', description: 'We start by understanding your vision and crafting a unique theme and concept that perfectly captures the occasion.' },
                { icon: 'fas fa-birthday-cake', title: '2. Detailed Planning', description: 'Our team handles all the details, from venue booking and catering to entertainment and decor setup.' },
                { icon: 'fas fa-laugh-squint', title: '3. Enjoy the Moment', description: 'On the day of the party, we take care of all the logistics so you can relax and celebrate with your guests.' }
            ]
        }
    };

    const serviceTitleElement = document.getElementById('service-title');
    if (serviceTitleElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceKey = urlParams.get('service');
        const currentService = serviceData[serviceKey];

        if (currentService) {
            document.title = `${currentService.title} - Team Radiant`;
            serviceTitleElement.textContent = currentService.title;
            document.querySelector('.details-hero').style.backgroundImage = `url(${currentService.image})`;
            document.getElementById('service-intro').textContent = currentService.description;

            const offeringsListElement = document.querySelector('.team-list');
            offeringsListElement.innerHTML = '';
            currentService.offerings.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
                offeringsListElement.appendChild(li);
            });

            const processStepsElement = document.querySelector('.process-steps');
            processStepsElement.innerHTML = '';
            currentService.process.forEach(step => {
                const processBox = document.createElement('div');
                processBox.classList.add('process-box');
                processBox.innerHTML = `
                    <i class="${step.icon}"></i>
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                `;
                processStepsElement.appendChild(processBox);
            });
        }
    }

    // --- Blog Page & Home Page Slider Functionality ---
    const categoryList = document.getElementById('category-list');
    const blogPostsContainer = document.getElementById('blog-posts-container');
    const homeSlider = document.getElementById('blog-slider');

    // Blog Post Filtering (on blog.html)
    if (categoryList && blogPostsContainer) {
        const allPosts = document.querySelectorAll('.blog-post');
        categoryList.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');

            if (!filter) return;

            const currentActive = document.querySelector('#category-list .active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            e.target.classList.add('active');

            allPosts.forEach(post => {
                const category = post.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }

    // Home Page Blog Slider (on index.html)
    if (homeSlider) {
        let allBlogPosts = [];

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        async function fetchBlogPosts() {
            try {
                const response = await fetch('blog.html');
                const text = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');
                const fetchedPosts = doc.querySelectorAll('#blog-posts-container .blog-post');

                if (fetchedPosts.length === 0) {
                    console.error("No blog posts found on blog.html page.");
                    return;
                }

                allBlogPosts = Array.from(fetchedPosts);
                startSlider();
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }

        function startSlider() {
            let currentIndex = 0;
            const displayCount = 3;

            displayRandomPosts();
            setInterval(autoSlide, 5000);

            function displayRandomPosts() {
                shuffleArray(allBlogPosts);
                homeSlider.innerHTML = '';
                for (let i = 0; i < displayCount && i < allBlogPosts.length; i++) {
                    const clonedPost = allBlogPosts[i].cloneNode(true);
                    homeSlider.appendChild(clonedPost);
                }
            }

            function autoSlide() {
                currentIndex = (currentIndex + 1) % allBlogPosts.length;
                const displayedPosts = Array.from(homeSlider.children);
                const nextPostIndex = (currentIndex + displayedPosts.length) % allBlogPosts.length;
                const nextPost = allBlogPosts[nextPostIndex].cloneNode(true);
                
                homeSlider.appendChild(nextPost);
                
                const postWidth = displayedPosts[0].offsetWidth + (parseFloat(getComputedStyle(displayedPosts[0]).marginRight) * 2);
                homeSlider.style.transition = 'transform 0.5s ease-in-out';
                homeSlider.style.transform = `translateX(-${postWidth}px)`;
                
                setTimeout(() => {
                    homeSlider.style.transition = 'none';
                    homeSlider.removeChild(displayedPosts[0]);
                    homeSlider.style.transform = 'translateX(0)';
                }, 500);
            }
        }

        fetchBlogPosts();
    }
});