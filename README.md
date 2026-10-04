# Field Notes

A lightweight, responsive personal blog built for GitHub Pages. It uses plain HTML, CSS, and JavaScript—no build step or dependencies required.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize

- Update the name, introduction, email, and social links in `index.html`.
- Edit article summaries in `index.html` and article text in `script.js`.
- Adjust colors and typography in the variables at the top of `styles.css`.

## Publish on GitHub Pages

Push this repository to GitHub, then open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
