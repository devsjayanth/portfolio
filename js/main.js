// ==========================================
// MAIN JAVASCRIPT - Renders portfolio content
// ==========================================

// Render Hero Section
function renderHero() {
    const hero = heroConfig;
    const heroSection = document.getElementById('hero');
    
    heroSection.innerHTML = `
        <p class="greeting">${hero.greeting}</p>
        
        <h1 class="display-large">
            <span class="gradient-text">${hero.name}</span>
            <span class="credential">${hero.credential}</span>
        </h1>
        
        <h2 class="headline-medium" style="margin-top: 16px; margin-bottom: 24px;">${hero.title}</h2>
        
        <p class="body-large" style="max-width: 900px;">
            ${hero.description}
        </p>
        
        <div class="btn-group">
            <a href="mailto:${hero.contact.email}" class="m3-btn">
                <span class="material-symbols-rounded" aria-hidden="true">mail</span> ${hero.contact.email}
            </a>
            <a href="${hero.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="m3-btn">
                <i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
            <a href="${hero.contact.gitlab}" target="_blank" rel="noopener noreferrer" class="m3-btn">
                <i class="fab fa-gitlab" aria-hidden="true"></i> GitLab
            </a>
        </div>
    `;
}

// Render Work Experience
function renderExperience() {
    const experienceSection = document.getElementById('experience');
    
    let html = '<h2 class="headline-medium">Work Experience</h2>';
    
    experienceConfig.forEach(exp => {
        html += `
            <div class="timeline-container">
                <div class="timeline-dot"></div>
                <span class="date-badge">${exp.period}</span>
                <h3 class="title-large">${exp.title}</h3>
                <div class="body-large" style="margin-bottom: 24px;">${exp.company}</div>
                
                <div class="m3-card">
        `;
        
        exp.sections.forEach((section, idx) => {
            html += `<h4 class="title-large section-header">${section.heading}</h4>
                     <ul class="list-unstyled">`;
            
            section.items.forEach((item, itemIdx) => {
                const icon = section.icons && section.icons[itemIdx] ? section.icons[itemIdx] : 'check_circle';
                html += `
                    <li class="list-item">
                        <span class="material-symbols-rounded list-icon" aria-hidden="true">${icon}</span>
                        ${item}
                    </li>
                `;
            });
            
            html += '</ul>';
        });
        
        html += '</div></div>';
    });
    
    experienceSection.innerHTML = html;
}

// Render Technical Skills
function renderSkills() {
    const skillsSection = document.getElementById('skills');
    
    let html = '<h2 class="headline-medium">Technical Skills</h2><div class="grid-2">';
    
    skillsConfig.forEach(skillCategory => {
        html += `
            <div class="m3-card">
                <h3 class="title-large" style="color: var(--md-sys-color-primary); display: flex; align-items: center; gap: 10px;">
                    <span class="material-symbols-rounded" aria-hidden="true">${skillCategory.icon}</span> ${skillCategory.category}
                </h3>
                <div class="chip-group">
        `;
        
        skillCategory.items.forEach(skill => {
            html += `<span class="m3-chip">${skill}</span>`;
        });
        
        html += '</div></div>';
    });
    
    html += '</div>';
    skillsSection.innerHTML = html;
}

// Render Projects
function renderProjects() {
    const projectsSection = document.getElementById('projects');
    
    let html = '<h2 class="headline-medium">Projects</h2>';
    
    projectsConfig.forEach(project => {
        html += `
            <div class="timeline-container">
                <div class="timeline-dot"></div>
                <span class="date-badge">${project.period}</span>
                <h3 class="title-large">${project.title}</h3>
                <div class="body-large" style="margin-bottom: 24px;">${project.subtitle}</div>
                
                <div class="m3-card">
                    <ul class="list-unstyled">
        `;
        
        project.items.forEach((item, idx) => {
            const icon = project.icons && project.icons[idx] ? project.icons[idx] : 'check_circle';
            html += `
                <li class="list-item">
                    <span class="material-symbols-rounded list-icon" aria-hidden="true">${icon}</span>
                    ${item}
                </li>
            `;
        });
        
        html += '</ul></div></div>';
    });
    
    projectsSection.innerHTML = html;
}

// Render Education & Certifications
function renderEducation() {
    const educationSection = document.getElementById('education');
    const edu = educationConfig;
    
    let html = `
        <h2 class="headline-medium">Education & Certifications</h2>
        <div class="grid-1">
            <div class="m3-card">
                <h3 class="title-large" style="color: var(--md-sys-color-primary); margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                    <span class="material-symbols-rounded" aria-hidden="true">school</span> Education
                </h3>
                
                <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; line-height: 1.3;">${edu.degree}</h4>
                <div style="font-size: 1rem; font-weight: 600; margin-bottom: 8px; color: var(--md-sys-color-on-surface-variant);">${edu.degreeType}</div>
                
                <div class="body-large" style="margin-top: 8px;">${edu.institution}</div>
                <div class="body-large" style="font-size: 1rem; opacity: 0.9;">${edu.university}</div>
                <div class="date-badge" style="margin-top: 12px;">${edu.period}</div>
            </div>

            <div class="m3-card">
                <h3 class="title-large" style="color: var(--md-sys-color-primary); margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
                    <span class="material-symbols-rounded" aria-hidden="true">verified</span> Certifications
                </h3>
                <div class="chip-group">
    `;
    
    certificationsConfig.forEach(cert => {
        html += `
            <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="m3-chip">
                ${cert.name} <span class="material-symbols-rounded" style="font-size: 16px; margin-left: 6px;" aria-hidden="true">open_in_new</span>
            </a>
        `;
    });
    
    html += '</div></div></div>';
    educationSection.innerHTML = html;
}

// Render Footer
function renderFooter() {
    document.getElementById('footer-text').textContent = footerConfig.text;
}

// Theme Toggle Logic
function initializeThemeToggle() {
    const toggleSwitch = document.querySelector('#checkbox');
    const body = document.body;
    const html = document.documentElement;

    if (html.classList.contains('light-mode')) {
        toggleSwitch.checked = true;
        body.classList.add('light-mode');
    } else {
        toggleSwitch.checked = false;
    }

    window.addEventListener('load', () => {
        body.classList.remove('preload');
    });

    toggleSwitch.addEventListener('change', (e) => {
        const isLight = e.target.checked;
        body.classList.toggle('light-mode', isLight);
        html.classList.toggle('light-mode', isLight);
        try {
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        } catch (e) {
            console.log('Privacy Mode: LS access denied');
        }
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderExperience();
    renderSkills();
    renderProjects();
    renderEducation();
    renderFooter();
    initializeThemeToggle();
});