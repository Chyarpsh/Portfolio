# AWS Cloud Engineer Portfolio Website

A modern, responsive portfolio website showcasing AWS cloud engineering projects and skills. Built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Project Showcase**: Displays 50+ AWS projects organized by learning phases
- **Filter System**: Filter projects by phase (P1-P7) or view all
- **GitHub Integration**: Direct links to project repositories
- **Skills Section**: Comprehensive display of AWS services and technologies
- **Smooth Navigation**: Single-page application with smooth scrolling

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity and project data
├── README.md           # This file
└── Arpita_Chowdhury_Resume.pdf  # Resume file
```

## 🛠️ Setup Instructions

### Option 1: Local Development

1. **Clone or download this repository**
   ```bash
   cd Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Access the website**
   - Open `http://localhost:8000` in your browser

### Option 2: Deploy to GitHub Pages

1. **Create a GitHub repository** (if you haven't already)

2. **Push your files**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source branch: `main`
   - Select folder: `/ (root)`
   - Click Save

4. **Access your site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 3: Deploy to AWS S3 + CloudFront

1. **Create an S3 bucket**
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name
   ```

2. **Enable static website hosting**
   ```bash
   aws s3 website s3://your-portfolio-bucket-name --index-document index.html
   ```

3. **Upload files**
   ```bash
   aws s3 sync . s3://your-portfolio-bucket-name --exclude "*.zip" --exclude ".git/*"
   ```

4. **Configure CloudFront** (optional, for CDN)
   - Create a CloudFront distribution
   - Point origin to your S3 bucket
   - Update bucket policy to allow CloudFront access

## 📝 Customization

### Update Project Information

Edit `script.js` to modify project data:

```javascript
const projects = [
    {
        id: 'project-id',
        phase: 'P1',
        title: 'Project Title',
        description: 'Project description',
        tech: ['Tech1', 'Tech2'],
        category: 'p1',
        githubPath: 'github-folder-path'
    },
    // Add more projects...
];
```

### Update Personal Information

Edit `index.html` to update:
- Name in navigation
- Hero section content
- About section
- Contact information

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    /* Modify these values */
}
```

### Add Project Documentation

If you have zip files with project documentation:

1. Extract the zip files
2. Create a `docs/` folder
3. Organize documentation by project
4. Add links to documentation in project cards (modify `script.js`)

## 🎨 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal background and statistics
- **Skills**: Technical skills organized by category
- **Projects**: Filterable grid of all AWS projects
- **Contact**: Links to GitHub and resume download

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔗 Links

- **GitHub Repository**: [aws-cloud-engineer-projects](https://github.com/Chyarpsh/aws-cloud-engineer-projects)
- **Resume**: Included in the repository

## 📄 License

This portfolio website is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

---

**Built with ❤️ for cloud engineering**
