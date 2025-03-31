document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Project Data
    const projects = [
        {
            id: 1,
            title: "Loan Status Prediction",
            shortDescription: "SVM algorithm for loan approval classification analyzing user-provided data",
            longDescription: "Implemented a machine learning system using Support Vector Machine algorithm to classify whether users should be approved for loans based on their provided data. The system analyzes various financial indicators and user demographics to make accurate predictions with 92% accuracy.",
            features: [
                "Developed data preprocessing pipeline for financial features",
                "Achieved 92% accuracy in loan approval prediction",
                "Implemented feature importance analysis",
                "Created interactive dashboard for result visualization"
            ],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            tags: ["Python", "SVM", "Machine Learning"],
            technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "NumPy", "Jupyter Notebook"],
            year: "2023",
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            id: 2,
            title: "Linear Programming Solver",
            shortDescription: "Windows Forms app solving LP problems using IBM CPLEX library algorithms",
            longDescription: "Developed a comprehensive linear programming solver application that implements primal simplex, branch and bound, and cutting plane algorithms. The application accepts input files with LP problems and generates detailed solution reports. Utilized IBM CPLEX optimization library for robust performance.",
            features: [
                "Implemented primal simplex, branch and bound, and cutting plane algorithms",
                "Developed file parsing for LP problem input files",
                "Created solution export functionality with detailed reports",
                "Designed intuitive user interface for problem input"
            ],
            image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            tags: ["C#", ".NET", "CPLEX"],
            technologies: ["C#", ".NET Framework", "IBM CPLEX", "Windows Forms", "Linear Algebra", "Numerical Methods"],
            year: "2023",
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            id: 3,
            title: "Service Management System",
            shortDescription: "Web app for contract/employee management with admin/client dashboards",
            longDescription: "Full-stack Java web application featuring separate dashboards for administrators and clients. Implemented contract management, employee registration, and technician assignment functionalities. The system uses PostgreSQL database hosted on AWS RDS, with a Tomcat servlet container and CI/CD pipeline integration.",
            features: [
                "Implemented layered architecture with JDBC for database access",
                "Developed CI/CD pipeline with Jira integration",
                "Integrated SendGrid for email notifications",
                "Deployed on AWS RDS with PostgreSQL",
                "Created responsive admin and client dashboards"
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            tags: ["Java", "PostgreSQL", "Tomcat"],
            technologies: ["Java Servlets", "PostgreSQL", "Apache Tomcat", "AWS RDS", "SendGrid", "JDBC", "CI/CD", "Jira"],
            year: "2024",
            githubUrl: "#",
            demoUrl: "#"
        }
    ];

    // DOM Elements
    const projectsContainer = document.getElementById('projects-container');
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.querySelector('.close-modal');

    // Render Projects
    function renderProjects() {
        projectsContainer.innerHTML = '';
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card glass-card';
            projectCard.dataset.id = project.id;
            projectCard.innerHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-tech-tags">
                        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.shortDescription}</p>
                    <button class="project-details-btn">View Details</button>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Open Project Modal
    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            modalBody.innerHTML = `
                <div class="modal-project">
                    <div class="modal-image-container">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="modal-details">
                        <h2>${project.title}</h2>
                        <div class="modal-meta">
                            <span class="modal-date">${project.year}</span>
                            <span>•</span>
                            <span class="modal-tech">${project.tags.join(' • ')}</span>
                        </div>
                        <div class="modal-description">
                            <p>${project.longDescription}</p>
                            <ul>
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="modal-tech-stack">
                            <h4>Tech Stack:</h4>
                            <div class="tech-stack-items">
                                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div class="modal-links">
                            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="modal-link primary">View Code</a>` : ''}
                            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="modal-link secondary">Live Demo</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
            
            projectModal.style.display = 'flex';
            setTimeout(() => {
                projectModal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }

    // Close Project Modal
    function closeModal() {
        projectModal.classList.remove('show');
        setTimeout(() => {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Event Listeners
    document.addEventListener('click', function(e) {
        // Project card or button click
        if (e.target.closest('.project-card') || e.target.closest('.project-details-btn')) {
            e.preventDefault();
            const card = e.target.closest('.project-card');
            const projectId = parseInt(card.dataset.id);
            openModal(projectId);
        }
        
        // Close modal when clicking outside content
        if (e.target === projectModal) {
            closeModal();
        }
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'flex') {
            closeModal();
        }
    });

    // Initialize
    renderProjects();
});