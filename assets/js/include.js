async function loadComponent(id, url) {
  try {
    const el = document.getElementById(id);
    if (!el) return;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Cannot load " + url);

    const html = await res.text();

    const temp = document.createElement("div");
    temp.innerHTML = html;

    el.replaceChildren(...temp.childNodes);

  } catch (err) {
    console.error("Include error:", err);
  }
}

async function initIncludes() {
  await loadComponent("header", "/components/header.html");
  await loadComponent("footer", "/components/footer.html");

  // 🔥 GLOBAL READY SIGNAL
  window.layoutReady = true;
  document.dispatchEvent(new Event("layout-ready"));
}

initIncludes();
