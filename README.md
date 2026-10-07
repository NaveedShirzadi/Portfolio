# My Portfolio

This is the code behind my personal site, where I share the projects I've built, the teams I lead, and how to reach me. I'm a senior Computer Science major with a Finance minor at CSUN, and I use this site while I look for fintech and financial software engineering internships.

**Live site:** https://naveedshirzadiportfolio.web.app

## What's on the site

- A short intro and an at a glance panel, so someone can understand who I am in a few seconds
- Projects, including the Entrepreneurs Club portal, the FMA website, and StudyFlow, with links to the live versions where they exist
- A toolkit section covering languages, frameworks, databases, tools, and finance skills
- Leadership and research, from running technology for FMA to supporting Math 106 students as an SI Leader
- Contact links and a downloadable resume

## Built with

- React 19 and Vite
- Plain CSS, with no UI library, so I know where every style comes from
- Firebase Hosting for the live site
- GitHub Actions to build and deploy automatically

I kept it small on purpose. The whole site ships in under 70 kB gzipped, so it loads quickly even on a slow phone connection.

## Running it locally

You need a recent version of Node.js. Then:

```bash
git clone https://github.com/NaveedShirzadi/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open http://localhost:5173 and the page reloads whenever you save a file.

Other commands you might want:

```bash
npm run build     # create the production build in dist/
npm run preview   # serve the production build locally
npm run lint      # check the code with Oxlint
```

## Changing the content

Nearly all of the text lives in one file, `src/data.js`. That includes my intro, the at a glance panel, projects, skills, and leadership roles. To update the site, edit that file and save. You rarely need to touch the components.

Two fields are optional on purpose:

- `resume` is the path to a PDF inside `public/`, for example `/Naveed_Shirzadi_Resume.pdf`
- `linkedin` is the full URL of my profile

If either one is an empty string, the matching button simply doesn't appear.

## How the project is laid out

```
Portfolio/
  public/            resume PDF and static files
  src/
    components/      one file for each section of the page
    data.js          all of the site's text lives here
    index.css        every style on the site
    App.jsx          how the sections fit together
    main.jsx         the entry point
  index.html         page shell and link preview tags
```

## How it gets deployed

Every push to the `main` branch triggers a GitHub Actions workflow. It runs `npm ci && npm run build`, then publishes the `dist` folder to Firebase Hosting. Pull requests get their own temporary preview link, so I can check a change before it goes live.

If I ever need to deploy by hand, this does it:

```bash
npm run build
firebase deploy --only hosting
```

## Design notes

I wanted the site to feel calm and readable instead of flashy. The headings use Fraunces and the body text uses Public Sans. A few details I cared about:

- A skip to content link and clear keyboard focus outlines
- Layouts that adapt cleanly from a phone screen to a wide desktop
- Respect for the reduced motion setting
- Link preview tags, so the site looks right when pasted into LinkedIn or a message

## A note on reuse

Feel free to borrow ideas from the layout or the code structure. The text, projects, and resume are about my own work, so please write your own.
