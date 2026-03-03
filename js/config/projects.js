// ==========================================
// PROJECTS CONFIGURATION
// ==========================================

const projectsConfig = [
    {
        period: "Professional Project",
        title: "Lean Digitalization System (LDS)",
        subtitle: "Infrastructure Deployment",
        items: [
            "Deployed multi-tier Lean Digitalization System on hybrid infrastructure (Proxmox + AWS)",
            "Orchestrated containerized microservices using Docker/Kubernetes for auto-scaling and high availability",
            "Implemented infrastructure-as-code and CI/CD pipelines, reducing deployment time and ensuring consistency"
        ],
        icons: ["deployed_code", "hub", "rocket_launch"]
    }, // <--- IMPORTANCE: Don't forget this comma when adding new items!
    {
        period: "Personal Project",
        title: "Home Lab Infrastructure",
        subtitle: "Self-Hosted Services",
        items: [
            "Built home lab with Proxmox virtualization for isolated testing environments",
            "Deployed self-hosted services (Pi-hole, Plex, FileServer) using Docker Compose",
            "Implemented automated off-site backups via Prometheus/Grafana monitoring"
        ],
        icons: ["home", "storage", "monitoring"]
    },
    // TEMPLATE FOR NEW PROJECT (Uncomment to use)
    /*
    {
        period: "2023 - Present",
        title: "Project Name",
        subtitle: "Role or Tech Stack",
        items: [
            "Achievement 1 starting with a strong action verb",
            "Achievement 2 focusing on metrics or results",
            "Achievement 3 highlighting specific technologies used"
        ],
        icons: ["code", "database", "api"]
    }
    */
];