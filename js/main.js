const elFormWrapperInner = document.querySelector(".js-form-wrapper__inner");
const elFormWrapperInnerResults = document.querySelector(
  ".form-wrapper__inner-results"
);

elFormWrapperInner.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elFormWrapperInnerResults.classList.add("form-wrapper__inner-results-open");
});
