document.addEventListener('DOMContentLoaded', function() {
    // Projects Data
    const projects = [
        { 
            title: 'Booking Platform', 
            description: 'Scaled to handle 50M+ bookings',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        { 
            title: 'Reporting Microservice', 
            description: 'Reduced generation time from 5min to 5sec',
            image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        { 
            title: 'Video Consultation', 
            description: 'Real-time video feature implementation',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ];

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Render Projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card project-card';
        projectCard.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${project.image}')`;
        projectCard.innerHTML = `
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Card click handlers
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            // Add your custom click behavior here
            console.log('Card clicked:', this.querySelector('h3').textContent);
        });
    });

    // Social link handlers
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social link behavior here
            console.log('Social link clicked:', this.querySelector('i').className);
        });
    });
});