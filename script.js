const root = document.documentElement;
const btn = document.getElementById("themeToggle");
const label = btn.querySelector(".toggle-label");

function sync() {
  const dark = root.getAttribute("data-theme") === "dark";
  label.textContent = dark ? "Light" : "Dark";
  btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

btn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  sync();
});

sync();
