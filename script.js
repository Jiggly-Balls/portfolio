const favouriteThings = ["games", "API wrappers", "libraries", "websites"];
let currentIndex = favouriteThings.length - 1;

function cycle() {
  currentIndex = (currentIndex + 1) % favouriteThings.length;
  const element = favouriteThings[currentIndex];

  document.getElementById("myThing").innerText = element;
}
