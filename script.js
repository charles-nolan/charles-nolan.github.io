// Last updated stamp
const el = document.getElementById("lastUpdated");
if (el) {
  const now = new Date();
  el.textContent = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Replace empty links with a useful "coming soon" label.
document.querySelectorAll("a.auto-link").forEach((a) => {
  const href = (a.getAttribute("href") || "").trim();
  if (!href || href === "#") {
    const text = a.getAttribute("data-coming-soon") || "Coming soon";
    const span = document.createElement("span");
    span.className = "coming-soon";
    span.textContent = text;
    a.replaceWith(span);
  }
});

// If a navigation link points to a collapsed <details> section, open it.
document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target && target.tagName === "DETAILS") {
      target.open = true;
    }
  });
});
