/* 8 mètres sous la mousse — parcours à choix dans les couches d'une tourbière.
   Tout le contenu est dans SCENES : modifiez les textes ici sans toucher au reste.
   Chaque scène a une adresse (#id) : pratique pour un QR code par étape. */

const MAX_DEPTH = 8.5; // mètres — épaisseur au sommet du dôme

const SCENES = {
  accueil: {
    depth: 0, age: "aujourd'hui",
    kicker: "Bienvenue, visiteuse ou visiteur",
    title: "Vous voilà au bord de la tourbière.",
    body: [
      "Une passerelle de bois s'avance sur un tapis de mousse vert et rouge, piqué de bouleaux et de touffes de linaigrettes. Nous sommes aux Ponts-de-Martel, sur l'une des plus grandes tourbières bombées de Suisse.",
      "Sous vos pieds dort une archive de plusieurs milliers d'années. Dans ce parcours, c'est vous qui choisissez le chemin. Prête ? Prêt ?"
    ],
    choices: [
      { label: "Je reste sur la passerelle", to: "surface", primary: true },
      { label: "Je saute sur la mousse", to: "pietinement" }
    ]
  },

  pietinement: {
    depth: 0, age: "aujourd'hui",
    kicker: "Aïe",
    title: "Le tapis s'enfonce comme une éponge.",
    body: [
      "Chaque pas brasse la couche de surface. L'air s'y engouffre, et avec lui l'<em>oxygène</em> : la décomposition se réveille et la tourbière commence à se dégrader.",
      "Ce qui a mis des siècles à se former peut s'abîmer en quelques passages. Voilà pourquoi, ici, on marche sur les passerelles."
    ],
    choices: [
      { label: "Je remonte vite sur la passerelle", to: "surface", primary: true }
    ]
  },

  surface: {
    depth: 0, age: "aujourd'hui",
    kicker: "Surface · 0 cm",
    title: "Les architectes vertes et rouges",
    body: [
      "Ce tapis, ce sont des <em>sphaignes</em>. Ces mousses n'ont pas de racines : elles poussent par le haut et meurent lentement par le bas.",
      "Leurs cellules mortes se remplissent d'eau comme de minuscules réservoirs, et elles rendent leur milieu acide. Peu de plantes supportent ces conditions : les sphaignes construisent un monde à leur mesure.",
      "Un haut-marais comme celui-ci ne reçoit que l'eau du ciel : pluie et neige. Les sphaignes forment à elles seules l'essentiel de la tourbe, environ 80 %."
    ],
    asides: [
      {
        label: "Je presse une touffe de sphaignes",
        title: "Une éponge vivante",
        text: "Pressée dans la main, une touffe de sphaignes ruisselle : elle peut retenir bien plus que son propre poids en eau. (Dans une réserve, on ne cueille rien : ce geste-là, on le laisse aux guides.)"
      }
    ],
    choices: [
      { label: "Je m'enfonce de 20 cm", to: "acrotelme", primary: true }
    ]
  },

  acrotelme: {
    depth: 0.2, age: "quelques décennies",
    kicker: "−20 cm · l'acrotelme",
    title: "La couche qui respire",
    body: [
      "Juste sous les sphaignes vivantes, l'eau monte et descend au fil des saisons. Quand elle baisse, l'air entre : les plantes mortes se décomposent encore assez vite. Les spécialistes appellent cette couche l'<em>acrotelme</em>.",
      "C'est aussi la couche que la vallée a longtemps exploitée. On laissait l'hiver faire le travail : le gel et le dégel fragmentaient la tourbe mise à nu, puis on la raclait sur une vingtaine de centimètres pour en faire du combustible."
    ],
    choices: [
      { label: "Je passe sous le niveau de l'eau", to: "catotelme", primary: true }
    ]
  },

  catotelme: {
    depth: 0.5, age: "≈ 500 ans",
    kicker: "−50 cm · le catotelme",
    title: "Le royaume sans oxygène",
    body: [
      "Vous voici sous la nappe, dans le <em>catotelme</em>. Ici, tout est gorgé d'eau en permanence, froid, acide, et presque sans oxygène.",
      "Dans ces conditions, la décomposition s'arrête quasiment. Les plantes mortes ne disparaissent plus : elles s'empilent. C'est ça, la tourbe.",
      "Le rythme ? Environ <strong>1 millimètre par an</strong>. À 50 cm, vous touchez donc des sphaignes mortes il y a quelque cinq siècles (c'est un ordre de grandeur : le rythme varie selon les époques et les endroits)."
    ],
    asides: [
      {
        label: "Je cherche ce qui s'est conservé",
        title: "Une tourbière, ça se lit",
        text: "Graines, morceaux de bois, troncs entiers, grains de pollen : tout ce qui tombe dans la tourbe y reste, couche après couche. C'est pour cela qu'on parle des tourbières comme de véritables archives."
      }
    ],
    choices: [
      { label: "Je descends à 2 mètres", to: "archives", primary: true }
    ]
  },

  archives: {
    depth: 2, age: "≈ 2000 ans",
    kicker: "−2 m · les archives",
    title: "La bibliothèque de pollen",
    body: [
      "Chaque printemps, les arbres de la région libèrent des nuages de pollen. Une partie se pose sur la tourbière, s'enfouit et se conserve.",
      "En prélevant une carotte et en comptant les grains couche par couche, on peut reconstituer quelles forêts entouraient la vallée à chaque époque.",
      "Dès les années 1930, une thèse de l'Université de Neuchâtel lisait ainsi les tourbières des Ponts-de-Martel : un âge du bouleau, puis du pin, du noisetier, du sapin blanc et du hêtre."
    ],
    asides: [
      {
        label: "Je regarde au microscope",
        title: "Une empreinte par espèce",
        text: "Le grain de pollen est protégé par une enveloppe très résistante, et chaque espèce a sa forme propre. Au microscope, on peut donc dire « ceci est du sapin » des milliers d'années plus tard."
      }
    ],
    choices: [
      { label: "Je descends encore", to: "carbone", primary: true }
    ]
  },

  carbone: {
    depth: 5, age: "≈ 5000 ans",
    kicker: "−5 m · le coffre-fort",
    title: "Un piège à carbone",
    body: [
      "En poussant, les sphaignes captent du carbone dans l'air. Comme elles ne se décomposent pas, ce carbone reste enfermé dans la tourbe depuis des millénaires. Les tourbières sont de véritables <em>pièges à CO₂</em>.",
      "Mais le coffre peut s'ouvrir. Les fossés de drainage creusés autour font baisser l'eau : l'air revient, la tourbe se décompose et relâche ce qu'elle stockait.",
      "Aujourd'hui, des projets de revitalisation font l'inverse : de petits barrages pour remonter la nappe et laisser les sphaignes reprendre leur travail."
    ],
    choices: [
      { label: "Je descends jusqu'au fond", to: "fond", primary: true }
    ]
  },

  fond: {
    depth: 8.5, age: "≈ 8500 ans",
    kicker: "−8,50 m · le fond",
    title: "Le premier millimètre",
    body: [
      "Au sommet du dôme, la tourbe atteint environ <strong>8,5 mètres</strong>. À un millimètre par an, cela représente quelque 8500 ans de croissance.",
      "Quand la première couche s'est formée ici, l'agriculture n'était sans doute pas encore arrivée dans la région. Les sphaignes ont patiemment empilé, millimètre après millimètre, tout ce qui se trouve au-dessus de vous.",
      "8500 ans pour construire. Quelques décennies d'exploitation et de drainage suffisent à en défaire une bonne partie."
    ],
    choices: [
      { label: "Je remonte à la surface", to: "carotte", primary: true }
    ]
  },

  carotte: {
    depth: 0, age: "retour à la surface",
    kicker: "Fin du parcours",
    title: "Votre carotte de tourbe",
    body: [
      "Voici le chemin parcouru. Touchez une couche pour y retourner.",
      "__CORE__",
      "<strong>À retenir :</strong> 1 mm par an, des millénaires d'archives, un stock de carbone… et une seule consigne pour le préserver : rester sur les passerelles."
    ],
    choices: [
      { label: "Recommencer le parcours", to: "accueil", primary: true },
      { label: "Voir les sources", to: "sources" }
    ]
  },

  sources: {
    depth: 0, age: "aujourd'hui",
    kicker: "Pour aller plus loin",
    title: "Sources et crédits",
    body: [
      "Ce parcours est un <strong>prototype de médiation</strong>. Les ordres de grandeur sont tirés des sources ci-dessous et doivent être validés par des spécialistes avant tout usage public.",
      "__SOURCES__",
      "Conception, textes et développement : Mélanie Thomas, 2026. Site statique, sans traceur ni dépendance externe."
    ],
    choices: [
      { label: "Revenir au début", to: "accueil", primary: true }
    ]
  }
};

const CORE_STEPS = ["surface", "acrotelme", "catotelme", "archives", "carbone", "fond"];

const SOURCES = [
  ["Maison de la Tourbière, Les Ponts-de-Martel", "https://www.mdt-ne.ch/"],
  ["Canton de Neuchâtel, SFFN — dépliant « Marais »", "https://www.ne.ch/autorites/DDTE/SFFN/nature/Documents/Depliants/Marais_milieu_tirage_2.pdf"],
  ["OFEV — Fiche IFP 1003, Tourbière des Ponts-de-Martel", "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1003.pdf"],
  ["Le Temps — « Dans la tourbière du Marais-Rouge »", "https://www.letemps.ch/sciences/tourbiere-maraisrouge"],
  ["A. Ischer (1935), Les tourbières de la vallée des Ponts-de-Martel, Université de Neuchâtel", "https://libra.unine.ch/bitstreams/c9425eff-dd62-4058-9086-08230ac1862f/download"]
];

/* ---------- Couleurs selon la profondeur ---------- */
const PALETTE = [
  [0.00, [217, 220, 196]],
  [0.05, [196, 170, 140]],
  [0.20, [150, 112, 74]],
  [0.50, [104, 74, 46]],
  [0.80, [62, 44, 28]],
  [1.00, [34, 24, 16]]
];

function mix(a, b, t) { return a.map((v, i) => Math.round(v + (b[i] - v) * t)); }

function colorAt(f) {
  for (let i = 1; i < PALETTE.length; i++) {
    const [p1, c1] = PALETTE[i];
    const [p0, c0] = PALETTE[i - 1];
    if (f <= p1) return mix(c0, c1, (f - p0) / (p1 - p0));
  }
  return PALETTE[PALETTE.length - 1][1];
}

/* Échelle dilatée : les couches du haut, fines mais riches, restent lisibles. */
function scaleDepth(d) { return Math.sqrt(Math.min(d, MAX_DEPTH) / MAX_DEPTH); }

function formatDepth(d) {
  if (d === 0) return "0 cm";
  if (d < 1) return `−${Math.round(d * 100)} cm`;
  return `−${d.toString().replace(".", ",")} m`;
}

/* ---------- Strates dessinées en SVG ---------- */
const svg = document.getElementById("strata-svg");
let H = window.innerHeight;
const SURFACE_Y = () => H * 0.42;
const COLUMN = () => H * 3.2;

function rand(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function drawStrata() {
  H = window.innerHeight;
  const W = 1000;
  const total = SURFACE_Y() + COLUMN() + H;
  svg.setAttribute("viewBox", `0 0 ${W} ${total}`);
  svg.style.height = `${total}px`;
  const r = rand(42);
  let out = "";

  // Couches : des bandes ondulées dont la couleur suit la profondeur
  const bands = 46;
  for (let i = 0; i <= bands; i++) {   // du haut vers le bas : chaque couche recouvre la précédente
    const f = i / bands;
    const y = SURFACE_Y() + COLUMN() * f;
    const [cr, cg, cb] = colorAt(f * f);
    let d = `M0 ${y}`;
    for (let x = 0; x <= W; x += 50) {
      d += ` L${x} ${y + (r() - 0.5) * (6 + f * 10)}`;
    }
    d += ` L${W} ${total} L0 ${total} Z`;
    out += `<path d="${d}" fill="rgb(${cr},${cg},${cb})"/>`;
  }

  // Fibres végétales compressées
  for (let i = 0; i < 520; i++) {
    const f = r();
    const y = SURFACE_Y() + COLUMN() * Math.sqrt(f) + 8;
    const x = r() * W;
    const len = 8 + r() * 22;
    const op = 0.12 + (1 - f) * 0.18;
    out += `<line x1="${x}" y1="${y}" x2="${x + len}" y2="${y + (r() - 0.5) * 3}" stroke="rgba(255,240,215,${op.toFixed(2)})" stroke-width="1.2"/>`;
  }

  // Nappe d'eau (sous l'acrotelme)
  const yWater = SURFACE_Y() + COLUMN() * scaleDepth(0.32);
  out += `<line x1="0" y1="${yWater}" x2="${W}" y2="${yWater}" stroke="rgba(170,205,230,.75)" stroke-width="2" stroke-dasharray="10 8"/>`;

  // Grains de pollen vers −2 m
  const yPollen = SURFACE_Y() + COLUMN() * scaleDepth(2);
  for (let i = 0; i < 26; i++) {
    const x = r() * W, y = yPollen + (r() - 0.5) * 70, rad = 2.5 + r() * 3;
    out += `<circle cx="${x}" cy="${y}" r="${rad}" fill="rgba(235,200,90,.55)"/>`;
  }

  // Un tronc couché, conservé dans la tourbe
  const yTrunk = SURFACE_Y() + COLUMN() * scaleDepth(3.4);
  out += `<rect x="610" y="${yTrunk}" width="300" height="22" rx="11" fill="rgba(40,26,14,.55)" transform="rotate(-4 760 ${yTrunk})"/>`;

  // Végétation de surface : touffes de sphaignes et linaigrettes
  const ys = SURFACE_Y();
  for (let x = 0; x < W; x += 9) {
    const h = 6 + r() * 12;
    const red = r() > 0.55;
    out += `<line x1="${x}" y1="${ys + 4}" x2="${x + (r() - 0.5) * 6}" y2="${ys - h}" stroke="${red ? "#a8324a" : "#6f7f3a"}" stroke-width="3" stroke-linecap="round"/>`;
  }
  for (let i = 0; i < 18; i++) {
    const x = r() * W, h = 30 + r() * 30;
    out += `<line x1="${x}" y1="${ys}" x2="${x + 3}" y2="${ys - h}" stroke="#5f6b33" stroke-width="1.5"/>`;
    out += `<circle cx="${x + 3}" cy="${ys - h - 4}" r="5" fill="#fbf8ef"/>`;
  }
  svg.innerHTML = out;
}

/* ---------- Affichage d'une scène ---------- */
const $ = (id) => document.getElementById(id);

function renderCore() {
  const col = CORE_STEPS.map((id, i) => {
    const [cr, cg, cb] = colorAt(scaleDepth(SCENES[id].depth) ** 2 * 0.9 + i * 0.03);
    return `<span style="flex:1;background:rgb(${cr},${cg},${cb})"></span>`;
  }).join("");
  const rows = CORE_STEPS.map((id) => {
    const s = SCENES[id];
    return `<div class="core-row"><button type="button" data-go="${id}">${s.title}</button><small>${formatDepth(s.depth)} · ${s.age}</small></div>`;
  }).join("");
  return `<div class="core"><div class="core-col">${col}</div>${rows}</div>`;
}

function renderSources() {
  return `<ol class="sources">${SOURCES.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join("")}</ol>`;
}

function show(id, { focus = true } = {}) {
  const s = SCENES[id] || SCENES.accueil;
  const f = scaleDepth(s.depth);

  // Descente : fond, strates, jauge
  const [cr, cg, cb] = colorAt(f * f);
  document.documentElement.style.setProperty("--bg", `rgb(${cr},${cg},${cb})`);
  svg.style.transform = `translateY(${-COLUMN() * f}px)`;
  const pct = `${(f * 100).toFixed(1)}%`;
  const mobile = window.matchMedia("(max-width: 640px)").matches;
  $("gauge-marker").style[mobile ? "left" : "top"] = pct;
  if (!mobile) $("gauge-label").style.top = pct;
  $("gauge-label").innerHTML = `<span class="g-depth">${formatDepth(s.depth)}</span><span class="g-age">${s.age}</span>`;

  // Texte
  $("kicker").textContent = s.kicker;
  $("title").textContent = s.title;
  $("body").innerHTML = s.body.map((p) =>
    p === "__CORE__" ? renderCore() : p === "__SOURCES__" ? renderSources() : `<p>${p}</p>`
  ).join("");
  const aside = $("aside");
  aside.hidden = true;
  aside.innerHTML = "";

  // Choix : « ou » entre les options, comme dans un livre-jeu
  const nav = $("choices");
  nav.innerHTML = "";
  const buttons = [];
  (s.asides || []).forEach((a) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "choice";
    b.textContent = a.label;
    b.addEventListener("click", () => {
      aside.innerHTML = `<b>${a.title}</b>${a.text}`;
      aside.hidden = false;
      const or = b.nextElementSibling;
      if (or && or.classList.contains("or")) or.remove();
      b.remove();
    });
    buttons.push(b);
  });
  s.choices.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "choice" + (c.primary ? " primary" : "");
    b.textContent = c.label;
    b.addEventListener("click", () => go(c.to));
    buttons.push(b);
  });
  buttons.forEach((b, i) => {
    if (i > 0) {
      const or = document.createElement("span");
      or.className = "or";
      or.textContent = "ou";
      nav.appendChild(or);
    }
    nav.appendChild(b);
  });

  const card = $("card");
  card.classList.remove("enter");
  void card.offsetWidth;
  card.classList.add("enter");
  if (focus) card.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.title = id === "accueil" ? "8 mètres sous la mousse" : `${s.title} · 8 mètres sous la mousse`;
}

function go(id) {
  if (location.hash === `#${id}`) show(id);
  else location.hash = id;
}

/* ---------- Démarrage ---------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-go], [data-scene]");
  if (!t) return;
  e.preventDefault();
  go(t.dataset.go || t.dataset.scene);
});
$("restart").addEventListener("click", () => go("accueil"));
window.addEventListener("hashchange", () => show(location.hash.slice(1)));

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (Math.abs(window.innerHeight - H) < 120 && svg.innerHTML) return show(current(), { focus: false });
    drawStrata();
    show(current(), { focus: false });
  }, 200);
});

function current() { return SCENES[location.hash.slice(1)] ? location.hash.slice(1) : "accueil"; }

drawStrata();
show(current(), { focus: false });
