/* Ajustement automatique : si le contenu d'une feuille A4 dépasse la zone imprimable
   (marge basse de sécurité comprise), le texte est légèrement réduit jusqu'à tenir. */
(function () {
  const MIN = 0.86;          // réduction maximale : 86 %
  const sheets = () => Array.from(document.querySelectorAll(".sheet"));
  const fluid = () => window.matchMedia("screen and (max-width: 820px)").matches;

  function parts(sheet) {
    return Array.from(sheet.children).filter((el) => getComputedStyle(el).position !== "absolute");
  }

  function overflow(sheet) {
    const r = sheet.getBoundingClientRect();
    const limit = r.bottom - parseFloat(getComputedStyle(sheet).paddingBottom);
    let bottom = 0;
    parts(sheet).forEach((el) => {
      bottom = Math.max(bottom, el.getBoundingClientRect().bottom + parseFloat(getComputedStyle(el).marginBottom || 0) * 0);
    });
    return bottom - limit;
  }

  function fit(sheet) {
    const els = parts(sheet);
    els.forEach((el) => { el.style.zoom = ""; });
    if (fluid()) return;
    let z = 1;
    while (overflow(sheet) > 0.5 && z > MIN) {
      z = Math.round((z - 0.01) * 100) / 100;
      els.forEach((el) => { el.style.zoom = z; });
    }
    sheet.dataset.fit = z;
    if (overflow(sheet) > 0.5) console.warn("Feuille trop chargée même à " + Math.round(MIN * 100) + " % : raccourcir le texte.");
  }

  function fitAll() { sheets().forEach(fit); }
  window.fitSheets = fitAll;

  let t;
  const later = () => { clearTimeout(t); t = setTimeout(fitAll, 250); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAll); else fitAll();
  window.addEventListener("load", fitAll);
  window.addEventListener("resize", later);
  window.addEventListener("beforeprint", fitAll);
  document.addEventListener("input", later);
})();
