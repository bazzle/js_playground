(function menu() {
  const html = document.querySelector("html");
  const btn = document.querySelector(".js-menu-button");
  const menu = document.querySelector(".js-menu");

  function lockview() {
    html.classList.add("noscroll");
  }
  function unlockview() {
    html.classList.remove("noscroll");
  }
  function menu_open() {
    btn.setAttribute("aria-pressed", true);
    btn.setAttribute("aria-expanded", true);
    menu.classList.add("visible");
    btn.innerHTML = 'Close menu';
    lockview();
  }
  function menu_close() {
    btn.setAttribute("aria-pressed", false);
    btn.setAttribute("aria-expanded", false);
    menu.classList.remove("visible");
    btn.innerHTML = 'Menu';
    unlockview();
  }
  btn.addEventListener('click',function(){
    if (menu.classList.contains("visible")){
      menu_close();
    } else {
      menu_open();
    }
  });
  document.addEventListener('keyup',function(e){
    if (menu.classList.contains("visible") && e.key == "Escape") {
      menu_close();
    }
  });
}());