function loadHTML(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error("Include error:", err));
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "/assets/components/header.html");
    loadHTML("footer", "/assets/components/footer.html");
});
