// TODO: define a default language
const translator = new Translator({
  defaultLanguage: "fr",
  detectLanguage: true,
})

/* The code `translator.fetch(["fr", "en", "wolof"]).then(() => { translator.translatePageTo("fr");
registerLanguageToggle(); });` is fetching the translations for the specified languages ("fr", "en",
"wolof") using the `fetch` method of the `translator` object. */
translator.fetch(["fr", "en", "wolof"]).then(() => {
  translator.translatePageTo("fr");
  registerLanguageToggle();
});


/**
 * The function `registerLanguageToggle` adds an event listener to a select element, and when the
 * selected option changes, it calls a `translatePageTo` function with the selected language as an
 * argument.
 */
function registerLanguageToggle() {
  const select = document.querySelector("select#lang");

  select.addEventListener("change", evt => {
    const language = evt.target.value;
    translator.translatePageTo(language);
  });
}