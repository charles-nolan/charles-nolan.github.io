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

// Replace empty links with "Coming soon"
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
