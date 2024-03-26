const elFormWrapperInner = document.querySelector(".js-form-wrapper__inner");
const elFormWrapperInnerResults = document.querySelector(
  ".form-wrapper__inner-results"
);
const elCopyShortButtonlink = document.querySelector(
  ".js-copy-short-button-link"
);
const elFormWrapper = document.querySelector(".form-wrapper");

if (elFormWrapperInner) {
  elFormWrapperInner.addEventListener("submit", function (evt) {
    evt.preventDefault();

    elFormWrapperInnerResults.classList.add("form-wrapper__inner-results-open");
  });
}

if (elFormWrapper) {
  elFormWrapper.addEventListener("click", function (evt) {
    if (evt.target.matches(".js-copy-short-button-link")) {
      // Cange button text
      evt.target.textContent = "Copied!";
      //Change button bgcolor
      evt.target.classList.add("form-wrapper__copy-button--copied");

      // Copy short link to clipboard
      navigator.clipboard.writeText(
        evt.target.previousElementSibling.textContent
      );

      // Rest button text and class after 1 secund
      setTimeout(function () {
        evt.target.textContent = "Copy";
        evt.target.classList.remove("form-wrapper__copy-button--copied");
      }, 1000);
    }
  });
}
