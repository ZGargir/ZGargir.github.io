# Zohar Gargir Portfolio

Static HTML/CSS/JavaScript portfolio intended for GitHub Pages.

## Quick editing

Most project content lives in `content/projects.js`.

To reorder projects, move the project objects within the `projects` array.

Each project can have:
- `cover`: static thumbnail
- `previewVideo`: short MP4/WebM hover preview
- `previewGif`: GIF fallback hover preview
- `gallery`: screenshot gallery
- `video`: expanded-view video, local file or YouTube embed URL
- `links`: optional external links

Animated preview media is not loaded until the relevant project media is hovered/focused.

## Asset names

Put project media into the corresponding folder under `assets/`.

Recommended:
- `cover.jpg`
- `preview.mp4`
- `preview.gif` if needed
- `01.jpg`, `02.jpg`, etc.

## GitHub Pages

Create a GitHub repository, upload the contents of this folder, then enable GitHub Pages from the repository's Settings > Pages. Select the `main` branch and `/ (root)` as the source.

If the repository is named `<username>.github.io`, GitHub Pages can use it as the user's root GitHub Pages site.
