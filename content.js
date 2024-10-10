window.addEventListener("load", () => {
  const styleSheet = document.styleSheets[0];
  const maxW3xlRule = Array.from(styleSheet.cssRules).find(
    (rule) => rule.selectorText === ".max-w-3xl"
  );

  if (maxW3xlRule) {
    console.log("maxW3xlRule", maxW3xlRule);
    maxW3xlRule.style.setProperty("max-width", "1000rem", "important");
  }
});
