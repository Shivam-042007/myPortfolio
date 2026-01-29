// Initialize Animate On Scroll (AOS)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Project Data
const projects = [
    {
        name: "HypeEngine",
        description: "A customized Chrome startup page with advanced widgets and aesthetic design.",
        link: "https://github.com/Shivam-042007/HypeEngine"
    },
    {
        name: "3D Minecraft Web",
        description: "A full-scale voxel sandbox game engine built to run in modern browsers.",
        link: "https://github.com/Shivam-042007/3D-Minecraft-Web"
    },
    {
        name: "ChessAI",
        description: "An AI-powered chess platform with custom move-prediction algorithms.",
        link: "https://github.com/Shivam-042007/ChessAI"
    },
    {
        name: "Savetheplanet.io",
        description: "An interactive web-based game focused on environmental awareness.",
        link: "https://github.com/Shivam-042007/Savetheplanet.io"
    }
];

// Inject Projects into HTML
const projectContainer = document.getElementById('project-container');

projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);
    
    card.innerHTML = `
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 600;">
            Source Code <i class="fa-solid fa-arrow-right-long"></i>
        </a>
    `;
    projectContainer.appendChild(card);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
