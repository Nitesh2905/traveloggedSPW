window.onscroll = () => {
  const nav = document.querySelector("#mynav");
  if (this.scrollY <= 25) nav.className = "";
  else nav.className = "nav-colored";
};
