async function loadComponent(id, url) {
  const res = await fetch(url);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/components/header.html");
  loadComponent("footer", "/components/footer.html");
});
