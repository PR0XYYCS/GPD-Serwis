document.addEventListener("DOMContentLoaded", function() {
  var faqs = document.querySelectorAll(".pytanie-faq");

  faqs.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var item = this.parentElement;
      item.classList.toggle("aktywny");
    });
  });

  var dropdown = document.querySelector(".dropdown-telefon");
  var toggleBtn = document.getElementById("btn-telefon");

  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener("click", function() {
      dropdown.classList.toggle("otwarty");
    });

    document.addEventListener("click", function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("otwarty");
      }
    });
  }

  function openFormIfTargeted() {
    if (window.location.hash === "#kontakt-form") {
      var formSection = document.getElementById("kontakt-form");
      if (!formSection) return;
      var accordion = formSection.querySelector(".element-faq");
      if (accordion) accordion.classList.add("aktywny");
    }
  }

  openFormIfTargeted();
  window.addEventListener("hashchange", openFormIfTargeted);
});
