// ここからコードを書いてください

const setupTabs = () => {
  let dth = document.querySelector('[data-tab="home"]');
  let dtc = document.querySelector('[data-tab="converter"]');
  let h = document.getElementById("home");
  let c = document.getElementById("converter");

  dth.addEventListener("click", () => {
    c.classList.add("hidden");
    h.classList.remove("hidden");
  });

  dtc.addEventListener("click", () => {
    h.classList.add("hidden");
    c.classList.remove("hidden");
  });
};
export default setupTabs;
