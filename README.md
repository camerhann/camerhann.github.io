# Personal Blog Site for [Your Name]

This is the personal blog website for [Your Name], focusing on insights into flood risk, drainage, environmental consulting, and sustainable development.

Built with Next.js, React, Tailwind CSS, and DaisyUI.

## Development

1.  Clone the repository.
2.  Install dependencies: `npm install` (or `yarn install`)
3.  Run the development server: `npm run dev` (or `yarn dev`)

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding New Blog Posts

1.  Create a new `.md` file in the `content/` directory.
2.  Filename format: `your-article-title-slug.md` (lowercase, hyphens for spaces).
3.  Add front matter to the top of the file (see existing posts for examples - typically title, date, author, description, tags, featured_image).
4.  Write your content in Markdown.
5.  Commit and push to Git. The site will automatically rebuild and deploy (if CI/CD is configured).

## Deployment to GitHub Pages

This project uses static export for deployment to GitHub Pages.

### Local Build & Export

```
npm run build
npm run export
```

The static site will be output to the `out/` directory.

### Manual Deployment

To deploy manually to the `gh-pages` branch:

```
npm run deploy
```

### Automated Deployment (CI/CD)

Set up a GitHub Actions workflow (see `.github/workflows/deploy.yml`) to automatically build and deploy on push to `main`. 