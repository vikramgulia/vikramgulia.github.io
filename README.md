# vikramgulia.com

Personal portfolio website — built with Astro, Tailwind CSS 4, and a dark tech-themed design.

## Development

```bash
npm install
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

## Customizing Projects

Edit `src/data/projects.json` to configure which GitHub repositories are showcased:

```json
[
  {
    "repo": "vikramgulia/repo-name",
    "featured": true,
    "description_override": "Optional custom description"
  }
]
```

Project data is fetched from the GitHub API at build time. Redeploy to refresh.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys to GitHub Pages.
