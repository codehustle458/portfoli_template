# Portfolio Website - Customization Guide

Welcome! This is a fully data-driven portfolio website. **You only need to edit ONE file** to change all your portfolio content.

## 📝 How to Customize Your Portfolio

### The Single File You Need to Edit

Edit `/public/portfolio.json` to update all content on your website. That's it! No need to touch any React components or HTML.

### What You Can Change in `portfolio.json`

#### 1. **Personal Information** (`personal` section)
- `name` - Your full name
- `title` - Your professional title (e.g., "Full Stack Developer")
- `tagline` - A short description that appears in the hero section
- `bio` - Longer bio text (not currently displayed but available for future use)
- `currentRole` - Your current job title and company (e.g., "Senior Engineer at Google")
- `currentRoleDescription` - Description of what you do in your current role
- `email` - Your email address
- `location` - Your location

#### 2. **About Section** (`about` section)
- `title` - Section title (usually "About")
- `sections` - Array of paragraphs about you. Add/remove items as needed

#### 3. **Experience** (`experience` array)
Add or remove job experiences:
```json
{
  "period": "2023 - Present",
  "title": "Senior Full Stack Engineer",
  "company": "TechCorp",
  "description": "What you did...",
  "skills": ["React", "Node.js", "PostgreSQL"]
}
```

#### 4. **Projects** (`projects` array)
Add your projects with:
- `id` - Unique number
- `title` - Project name
- `description` - Short description
- `image` - Image URL
- `tags` - Technologies used
- `link` - Project URL
- `featured` - Set to `true` to show in the Featured section, `false` for Other Projects

#### 5. **Skills** (`skills` array)
Organize by category:
```json
{
  "category": "Frontend",
  "items": ["React", "TypeScript", "Tailwind CSS"]
}
```

#### 6. **Social Links** (`social` array)
Add your social media profiles:
```json
{
  "name": "GitHub",
  "url": "https://github.com/yourprofile",
  "icon": "github"
}
```

**Supported icons:** `github`, `linkedin`, `twitter`, `mail`

## 🎨 How It Works

- **page.tsx** - Loads the JSON file and passes data to components
- **portfolio-header.tsx** - Hero section with name and intro
- **portfolio-about.tsx** - About section
- **portfolio-experience.tsx** - Work experience timeline
- **portfolio-projects.tsx** - Featured and other projects
- **portfolio-skills.tsx** - Skills organized by category
- **portfolio-footer.tsx** - Footer with contact info

**Changes to any component files will refresh the whole site** - but you don't need to touch them! Everything flows from `portfolio.json`.

## 🚀 Deployment

Once you've customized your portfolio, deploy it to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Your portfolio will automatically deploy and update whenever you push changes

## 💡 Tips

- Replace the image URLs in projects with your own project screenshots
- Update all social media links to point to your actual profiles
- Keep descriptions concise and impactful
- Add/remove experience and projects as your career evolves
- Change the `featured` flag to highlight your best work

## 🎯 Editing Example

To add a new project, simply add to the `projects` array:

```json
{
  "id": 5,
  "title": "My Awesome App",
  "description": "An app that does something amazing",
  "image": "https://example.com/image.jpg",
  "tags": ["React", "Next.js", "TypeScript"],
  "link": "https://myapp.com",
  "featured": true
}
```

That's it! The website will automatically display your new project.

---

**Questions?** Check the portfolio.json file - it has all the fields you need to customize everything about your portfolio!
