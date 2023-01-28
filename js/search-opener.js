const searchOpener = document.querySelector(
  ".search-btn"
);

const searchBar = document.querySelector(
  ".search-bar"
);

const searchClose =
  document.querySelector(".close-btn");

searchOpener.addEventListener("click", () =>
  searchBar.classList.replace(
    "is-hidden",
    "active-search"
  )
);

searchClose.addEventListener("click", () =>
  searchBar.classList.replace(
    "active-search",
    "is-hidden"
  )
);
