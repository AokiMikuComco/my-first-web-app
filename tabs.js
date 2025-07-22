// ここからコードを書いてください

const setupTabs = () => {
  const dth = document.querySelector('[data-tab="home"]');
  const dtc = document.querySelector('[data-tab="converter"]');
  const h = document.getElementById("home");
  const c = document.getElementById("converter");

  dth.addEventListener("click", () => {
    c.classList.add("hidden");
    h.classList.remove("hidden");
  });

  dtc.addEventListener("click", () => {
    h.classList.add("hidden");
    c.classList.remove("hidden");
  });

  const dtf = document.querySelector('[data-tab="flashcards"]');
  const fl = document.getElementById("flashcards");

  dth.addEventListener("click", () => {
    c.classList.add("hidden");
    fl.classList.add("hidden");
    h.classList.remove("hidden");
  });

  dtc.addEventListener("click", () => {
    h.classList.add("hidden");
    fl.classList.add("hidden");
    c.classList.remove("hidden");
  });

  dtf.addEventListener("click", () => {
    h.classList.add("hidden");
    c.classList.add("hidden");
    fl.classList.remove("hidden");
  });
};
export { setupTabs };
