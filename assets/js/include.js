async function loadComponent(id, url) {
  try {
    const el = document.getElementById(id);
    if (!el) return;

    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error("Cannot load " + url);

    const html = await res.text();

    // safer injection (prevents DOM corruption issues)
    const temp = document.createElement("div");
    temp.innerHTML = html;

    el.innerHTML = "";
    el.append(...temp.childNodes);

  } catch (err) {
    console.error("Include error:", err);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("header", "/components/header.html"),
    loadComponent("footer", "/components/footer.html")
  ]);
});
