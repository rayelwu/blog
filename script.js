const posts = {
  "slow-software": {
    category: "Design · 8 min read",
    title: "The case for slow software",
    paragraphs: [
      "Most software competes to remove every pause. Pages load instantly, feeds never end, and every action invites the next. Speed is useful—but when it becomes the only measure, our tools begin to hurry us.",
      "Slow software is not sluggish software. It is calm, deliberate, and considerate. It creates just enough space for us to understand where we are and decide where we want to go next.",
      "The best tools feel less like a slot machine and more like a well-made notebook. They are ready when we need them, quiet when we do not, and designed around the shape of human attention."
    ]
  },
  "digital-garden": {
    category: "Practice · 5 min read",
    title: "Tending a digital garden",
    paragraphs: [
      "A garden is never finished. It has old growth, new shoots, and bare patches waiting for attention. That makes it a useful metaphor for a body of ideas.",
      "Publishing only polished conclusions hides the most interesting part: how a thought changes. Keeping notes in public lets ideas cross-pollinate, and gives unfinished work permission to exist.",
      "Start small. Keep a question, add a link, revise a sentence. Over time, the connections become more valuable than any single page."
    ]
  },
  "small-tools": {
    category: "Technology · 6 min read",
    title: "In praise of small tools",
    paragraphs: [
      "The tools I trust most rarely ask for attention. They open quickly, do one thing clearly, and leave my work in a format I can understand.",
      "Smallness creates useful constraints. It encourages a maker to choose, to resist the sprawling settings panel, and to care for the essential interaction.",
      "A tool does not need to become a platform to matter. Sometimes its greatest feature is that you can learn it in an afternoon and rely on it for a decade."
    ]
  },
  "space-between": {
    category: "Observation · 4 min read",
    title: "The space between things",
    paragraphs: [
      "White space is often described as emptiness, but it is active. It gives shape to what surrounds it. It creates rhythm, hierarchy, and room to breathe.",
      "The same is true away from the screen: pauses in conversation, an unplanned hour, the gap between finishing one thing and beginning another.",
      "Removing something is not an absence of design. It is often the clearest expression of it."
    ]
  }
};

const body = document.body;
const toggle = document.querySelector(".theme-toggle");
const reader = document.querySelector(".reader");
const savedTheme = localStorage.getItem("field-notes-theme");
if (savedTheme === "dark" || (!savedTheme && matchMedia("(prefers-color-scheme: dark)").matches)) body.classList.add("dark");

function updateThemeLabel() {
  toggle.setAttribute("aria-label", `Switch to ${body.classList.contains("dark") ? "light" : "dark"} theme`);
}
updateThemeLabel();

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("field-notes-theme", body.classList.contains("dark") ? "dark" : "light");
  updateThemeLabel();
});

function openPost(id) {
  const post = posts[id];
  if (!post) return;
  document.querySelector("#reader-meta").textContent = post.category;
  document.querySelector("#reader-title").textContent = post.title;
  document.querySelector("#reader-body").innerHTML = post.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  reader.showModal();
}

document.querySelectorAll("[data-post]").forEach((card) => {
  card.addEventListener("click", () => openPost(card.dataset.post));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openPost(card.dataset.post); }
  });
});

document.querySelector(".reader-close").addEventListener("click", () => reader.close());
reader.addEventListener("click", (event) => { if (event.target === reader) reader.close(); });
document.querySelector("#year").textContent = new Date().getFullYear();
