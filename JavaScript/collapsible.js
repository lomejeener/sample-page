document.addEventListener("DOMContentLoaded", () => {
  let image = document.querySelector(".menu-image");
  let container = document.querySelector("nav");
  let dropdown = document.querySelector(".menu-list-container-mover");
  image.addEventListener("click", () => {
    if (!dropdown.matches(".menu-list-container-mover-responsive")) {
      dropdown.classList.remove("menu-list-container-mover");
      container.classList.add("navigation-bar-responsive");
      dropdown.classList.add("menu-list-container-mover-responsive");
    }
    else {
      dropdown.classList.remove("menu-list-container-mover-responsive");
      dropdown.classList.add("menu-list-container-mover");

      //container.classList.remove("navigation-bar-responsive");

      /*we should remove flex-direction:column (which is .navigation-bar-responsive) because it has  negative effect on our design 
but keeping it create some sort of bugs like when we want to close the collapsed links first it fades the border line up to the words then it fades words
which I want all of this process happend at once and there should'nt be any pause between fading the whole div, and thats because I think 
the site tries to turn flex-direction from column to row (because we have removed navigation-bar-responsive class ) so this pause happens
but if we keep the specific class because the div style remains as column and no direction has changed so this pause doesn't happen.*/
    }
  })
});
