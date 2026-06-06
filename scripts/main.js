const members = [
  {
    name: "imson1909",
    avatar: "ava/imson1909.png",
    bio: "Человек, простой человек",
    tags: ["Разработчик", "Игроман"],
  },
  {
    name: "Vlados_NC",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "Sally_lil",
    avatar: "ava/salli_lil.png",
    bio: "Заслуженный альпинист России",
    tags: ["Луксмакс", "Скалалазанье", "Альпинизм"],
  },
  {
    name: "Sugar_Nc",
    avatar: "ava/sugar_nc.png",
    bio: "Знаю сюжет более 100 произведений",
    tags: ["Сценарист", "Любитель книг"],
  },
  {
    name: "Мария",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "What_clown",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "Karobka123",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "Pawopapa",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "kumiifr",
    avatar: "ava/logo.jpg",
    bio: "Создатель, glamour girl, пикми",
    tags: ["Вредина", "Задрот в бабл квас", "Дизайнер"],
  },
  {
    name: "bismarck234",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "magSvarki",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
  {
    name: "stuckagainnk",
    avatar: "ava/logo.jpg",
    bio: "",
    tags: [],
  },
];
const grid = document.getElementById("teamGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalAvatar = document.getElementById("modalAvatar");
const modalName = document.getElementById("modalName");
const modalBio = document.getElementById("modalBio");
const modalTags = document.getElementById("modalTags");
members.forEach((m, i) => {
  const card = document.createElement("div");
  card.className = "member-card";
  card.onclick = () => openModal(i);
  card.innerHTML = `
                <img class="member-avatar" src="${m.avatar}" alt="${m.name}">
                <div class="member-name">${m.name}</div>
            `;
  grid.appendChild(card);
});
function openModal(i) {
  const m = members[i];
  modalAvatar.src = m.avatar;
  modalName.textContent = m.name;
  modalBio.textContent = m.bio.trim() ? m.bio : "Профиль пока не заполнен ✨";
  modalBio.style.fontStyle = m.bio.trim() ? "normal" : "italic";
  modalBio.style.color = m.bio.trim()
    ? "rgba(255,255,255,0.8)"
    : "rgba(255,255,255,0.4)";
  if (m.tags && m.tags.length > 0) {
    modalTags.innerHTML = m.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");
    modalTags.style.display = "flex";
  } else {
    modalTags.innerHTML = "";
    modalTags.style.display = "none";
  }
  modalOverlay.classList.add("active");
}
function closeModal() {
  modalOverlay.classList.remove("active");
}
modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) closeModal();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 4 + "s";
  star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
  starsContainer.appendChild(star);
}
