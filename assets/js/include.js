async function loadComponent(id, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Cannot load " + url);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error("Include error:", err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/components/header.html");
  loadComponent("footer", "/components/footer.html");
});
