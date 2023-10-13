// TODO: define a default language
const translator = new Translator({
  defaultLanguage: "fr",
  detectLanguage: true,
})

translator.fetch(["fr", "en"]).then(() => {
  // Calling `translatePageTo()` without any parameters
  // will translate to the default language.
  translator.translatePageTo();
  registerLanguageToggle();
});


function registerLanguageToggle() {
  const select = document.querySelector("select#lang");

  select.addEventListener("change", evt => {
    const language = evt.target.value;
    translator.translatePageTo(language);
  });
}