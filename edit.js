/* Mode « Modifier le texte » pour le CV et la lettre, visible seulement avec ?edition dans l'adresse
   (ex. cv.html?edition). Les modifications sont enregistrées dans ce navigateur seulement :
   elles ne changent jamais le site en ligne.
   Une fois prêtes : « Imprimer / PDF ». */
(function () {
  const sheets = Array.from(document.querySelectorAll(".sheet"));
  const toolbar = document.querySelector(".toolbar");
  if (!sheets.length || !toolbar) return;

  // Le mode édition n'apparaît qu'avec ?edition dans l'adresse.
  // Les QR codes pointent vers l'adresse simple : en scannant, on lit seulement.
  const params = new URLSearchParams(location.search);
  if (!params.has("edition")) return;

  // Empreinte de la version publiée : si le fichier en ligne change, l'ancien brouillon est ignoré.
  const original = sheets.map((s) => s.innerHTML).join("\u0000");
  let h = 0;
  for (let i = 0; i < original.length; i++) h = (h * 31 + original.charCodeAt(i)) | 0;
  const KEY = "brouillon:" + location.pathname + ":" + h;

  const store = {
    get() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del() { try { localStorage.removeItem(KEY); } catch (e) {} }
  };

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.textContent = "✎ Modifier le texte";
  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.textContent = "↺ Revenir à la version en ligne";
  resetBtn.hidden = true;
  const note = document.createElement("span");
  note.className = "toolbar-note";
  toolbar.insertBefore(editBtn, toolbar.querySelector(".primary"));
  toolbar.insertBefore(resetBtn, toolbar.querySelector(".primary"));
  toolbar.appendChild(note);

  const saved = store.get();
  if (Array.isArray(saved) && saved.length === sheets.length) {
    sheets.forEach((s, i) => { s.innerHTML = saved[i]; });
    resetBtn.hidden = false;
    note.textContent = "Brouillon modifié chargé (enregistré dans ce navigateur).";
  }

  let editing = false;
  let timer;
  function save() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const ok = store.set(sheets.map((s) => s.innerHTML));
      resetBtn.hidden = false;
      note.textContent = ok
        ? "Modifications enregistrées dans ce navigateur."
        : "Impossible d'enregistrer ici : pensez à imprimer en PDF avant de fermer.";
      if (window.fitSheets) window.fitSheets();
    }, 400);
  }

  editBtn.addEventListener("click", () => {
    editing = !editing;
    document.body.classList.toggle("editing", editing);
    sheets.forEach((s) => { s.contentEditable = editing ? "true" : "false"; });
    editBtn.textContent = editing ? "✓ Terminer" : "✎ Modifier le texte";
    if (editing) {
      note.textContent = "Cliquez dans le texte pour le corriger.";
      sheets[0].focus();
    } else {
      save();
    }
  });

  sheets.forEach((s) => s.addEventListener("input", save));

  // Coller du texte brut, sans la mise en forme d'ailleurs
  sheets.forEach((s) => s.addEventListener("paste", (e) => {
    if (!editing) return;
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData("text/plain");
    document.execCommand("insertText", false, text);
  }));

  resetBtn.addEventListener("click", () => {
    if (!window.confirm("Effacer vos modifications et revenir à la version en ligne ?")) return;
    store.del();
    location.reload();
  });
})();
