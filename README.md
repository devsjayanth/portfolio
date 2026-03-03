# 👨‍💻 Configurable Personal Portfolio

[![Portfolio Preview](portfolio.png)](https://devsj7.gitlab.io/devjayanth/)

A modern, responsive, and easily customizable personal portfolio template.

This project is designed with a **"content-first"** approach. All personal data—such as your work experience, projects, skills, and education—is stored in separate JavaScript configuration files. This allows you to update your portfolio content without ever needing to touch the core HTML structure.

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=F7DF1E)

## 🚀 Features

* **Config-Driven Content:** Manage all text and data via simple JS files in the `js/config/` folder.
* **Clean Architecture:** Strict separation between data (`config`), logic (`main.js`), and styling (`css`).
* **Responsive Design:** Mobile-first layout that works perfectly on desktops, tablets, and phones.
* **Dark/Light Mode:** Includes `theme-init.js` to handle system preferences and manual toggles.
* **Fast Performance:** Pure static HTML/CSS/JS with no heavy frameworks or build steps required.

---

## 📂 Project Structure

```text
your-portfolio/
 
├── index.html           # Main HTML structure (Do not edit content here)
├── README.md            # Documentation
├── css/
│   └── styles.css       # Global styles and CSS variables
└── js/
    ├── theme-init.js    # Logic for Dark/Light mode theme handling
    ├── main.js          # Core script that renders the config data into HTML
    └── config/          # ✏️ EDIT YOUR CONTENT HERE
        ├── hero.js          # Name, Title, Social Links, Contact info
        ├── experience.js    # Work history and roles
        ├── skills.js        # Technical skills and tools
        ├── projects.js      # Project showcases and GitHub links
        ├── education.js     # University and degrees
        ├── certifications.js# Certificates and awards
        └── footer.js        # Footer text and copyright