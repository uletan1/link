// アイコンは公式ロゴの形をしたSVGです（色は白1色）
const icons = {
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7L15.8 12Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-6.7L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.1L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z"/></svg>`,
  bluesky: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364a8.264 8.264 0 0 1 .415-.056 8.264 8.264 0 0 0-.415.056c-3.912.58-7.387 2.005-2.83 7.078 5.011 5.379 6.874-1.154 7.823-4.428.949 3.274 2.812 9.807 7.823 4.428 4.557-5.073 1.082-6.498-2.83-7.078a8.264 8.264 0 0 1-.415-.056 8.264 8.264 0 0 0 .415.056c2.67.296 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.203-.659-.299-1.664-.621-4.3 1.24-2.752 1.942-5.71 5.881-6.798 7.995Z"/></svg>`,
  marshmallow: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>`,
  note: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 2h11.5L20 6.5V22H4Zm2 2v16h12V8h-4.5V4Z"/></svg>`,
};

// リンクを追加したいときは、この配列に1行足すだけでOKです（iconはicons一覧のキー名）
const links = [
  { name: "YouTube", url: "https://www.youtube.com/@uletan442", icon: icons.youtube },
  { name: "Twitter", url: "https://x.com/ulletan", icon: icons.x },
  { name: "Bluesky", url: "https://bsky.app/profile/ulletan.bsky.social", icon: icons.bluesky },
  { name: "note", url: "https://note.com/ulletan13", icon: icons.note },
  { name: "マシュマロ", url: "https://marshmallow-qa.com/j02t429puzsvyyt?t=NflJNi&utm_medium=url_text&utm_source=promotion", icon: icons.marshmallow },
];

const listEl = document.getElementById("links");

links.forEach((link) => {
  const li = document.createElement("li");
  li.className = "links__item";

  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "links__link";
  a.innerHTML = `<span class="links__icon">${link.icon}</span><span>${link.name}</span>`;

  li.appendChild(a);
  listEl.appendChild(li);
});
