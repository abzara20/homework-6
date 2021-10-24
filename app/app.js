function route() {
  let hash = window.location.hash;
  let pgID = hash.replace("#/", "");

  if (pgID == "") {
    MODEL.pgChange("home");
  } else {
    MODEL.pgChange(pgID);

    // this will change the background depending on page
    document.getElementById("wrapper").className = "wrapper--" + pgID;
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();

  $(".mobile").click(function (e) {
    gsap.to(".mobile-nav", {
      duration: 0.5,
      x: 0,
      opacity: 1,
    });
  });

  $(".mobile-bg").click(function (e) {
    hideMenu();
  });

  $(".mobile-menu a").click(function (e) {
    hideMenu();
  });
}

function hideMenu() {
  gsap.to(".mobile-nav", {
    duration: 0.5,
    x: 300,
    opacity: 0,
  });
}

$("document").ready(function () {
  initListeners();
  gsap.set($(".mobile-nav"), { opacity: 0, x: 300 });
});
