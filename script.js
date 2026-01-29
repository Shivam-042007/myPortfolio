const myProjects = [
    {
        name: "HypeEngine",
        desc: "A powerful Chrome startup page with customizable widgets and clean UI.",
        url: "https://github.com/Shivam-042007/HypeEngine"
    },
    {
        name: "3D Minecraft Web",
        desc: "A high-performance voxel sandbox engine running entirely in the browser.",
        url: "https://github.com/Shivam-042007/3D-Minecraft-Web"
    },
    {
        name: "ChessAI",
        desc: "An intelligent chess application featuring minimax algorithms and move prediction.",
        url: "https://github.com/Shivam-042007/ChessAI"
    },
    {
        name: "Savetheplanet.io",
        desc: "Interactive web game focused on environmental awareness and sustainability.",
        url: "https://github.com/Shivam-042007/Savetheplanet.io"
    }
];

const container = document.getElementById('github-projects');

myProjects.forEach(project => {
    const card = `
        <div class="project-card">
            <h3>${project.name}</h3>
            <p>${project.desc}</p>
            <a href="${project.url}" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 700;">
                Source Code <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
    container.innerHTML += card;
});
