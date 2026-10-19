# Avegi — Furniture & Interior Design Website

Avegi is a responsive landing page for a furniture and interior design company specializing in custom-made furniture and modern interior solutions.

The project was developed using HTML5, SCSS, and vanilla JavaScript, with a focus on clean layouts, responsive design, accessibility, and user-friendly navigation.

## Live Demo

[View Live Website](https://ihorkuzmenko.github.io/portfolio-avegi-html-scss-js-2025/)

## GitHub Repository

[View Source Code](https://github.com/IhorKuzmenko/portfolio-avegi-html-scss-js-2025)

## Technologies Used

- HTML5 — semantic page structure
- SCSS (Sass) — modular styling and responsive layouts
- CSS3 — Flexbox, Grid, transitions, and animations
- JavaScript (ES6+) — interactive functionality
- Git & GitHub — version control
- GitHub Pages — deployment

## Features

### Responsive Design

The website is adapted for different screen sizes:

- Mobile devices — from 320px
- Tablets — from 768px
- Desktop — from 1440px

The layout uses flexible containers, responsive typography, CSS Grid, and Flexbox.

### Mobile Navigation

- Responsive navigation menu
- Open and close functionality
- Keyboard support
- Escape key handling
- Focus management
- Scroll locking while the menu is open

### Hero Section

- Main heading and introductory content
- Responsive images
- Call-to-action link
- Adaptive layout

### About Us

- Company introduction
- Information about experience and services
- Responsive content layout

### How We Work

- Step-by-step overview of the workflow
- Structured list of production stages
- Responsive layouts for different devices

### Projects Gallery

- Horizontal scrolling gallery on mobile and tablet
- CSS Grid layout on desktop
- Scroll snapping for easier navigation
- Hover effects with project descriptions
- Responsive images

### Customer Reviews

- Customer testimonials
- Responsive review cards
- Consistent card styling

### Contact Form

The contact form includes:

- Name field
- Email field
- Telephone field
- Built-in browser validation
- Inline notification after submission

**Note:** This is a demonstration form. No information is sent to a server, stored, or processed.

### Footer

- Social media section
- Informational links
- Responsive layout
- Keyboard focus styles

## Project Structure

```text
portfolio-avegi-html-scss-js-2025/
├── images/
├── js/
│   ├── menu.js
│   └── contact-form.js
├── sass/
│   ├── components/
│   │   ├── _about-us.scss
│   │   ├── _contacts.scss
│   │   ├── _footer.scss
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   ├── _how_we_work.scss
│   │   ├── _projects.scss
│   │   └── _reviews.scss
│   ├── utils/
│   │   └── _variables.scss
│   ├── main.scss
│   ├── main.css
│   └── main.css.map
├── index.html
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/IhorKuzmenko/portfolio-avegi-html-scss-js-2025.git
```

### 2. Navigate to the Project

```bash
cd portfolio-avegi-html-scss-js-2025
```

### 3. Run Locally

Open `index.html` using a local development server, such as the VS Code Live Server extension.

### 4. Compile SCSS (Optional)

If you want to modify the SCSS styles, install Sass or use an existing Sass compiler.

Example using the Sass CLI:

```bash
npx sass --watch sass/main.scss sass/main.css
```

The compiled CSS is used by `index.html`.

## Accessibility

The project includes several accessibility improvements:

- Semantic HTML elements
- Descriptive image alternative text
- Accessible mobile navigation controls
- Keyboard navigation support
- Visible focus indicators
- Form field validation
- Status notification for the demo form
- Reduced-motion preferences

## Project Purpose

This project was created as a portfolio piece to practice and demonstrate:

- Building responsive websites from design layouts
- Writing maintainable and reusable SCSS
- Developing interactive UI components with vanilla JavaScript
- Working with semantic HTML
- Improving accessibility
- Organizing frontend project files
- Deploying static websites with GitHub Pages

## Author

**Ihor Kuzmenko**

- GitHub: [IhorKuzmenko](https://github.com/IhorKuzmenko)

## License

This project is intended for educational and portfolio demonstration purposes.
