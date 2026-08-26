// =============================
// EASY CUSTOMIZATION
// =============================
const girlfriendName = "Mal";

// IMPORTANT: Use YYYY-MM-DD for your anniversary/relationship start date.
const relationshipStart = "2024-08-27";

document.getElementById("herName").textContent = girlfriendName;

// Days together
function updateDays() {
  const start = new Date(relationshipStart + "T00:00:00");
  const now = new Date();
  const days = Math.max(0, Math.floor((now - start) / 86400000));
  document.getElementById("daysTogether").textContent =
    `${days.toLocaleString()} day${days === 1 ? "" : "s"}`;
}
updateDays();
setInterval(updateDays, 60000);

// Reasons
const reasons = [
  "You make ordinary days feel special.",
  "Your smile can changes everything.",
  "You make me feel loved and understood.",
  "I can be completely myself when I'm with you.",
  "You make even the smallest memories meaningful.",
  "I love the way you care about the people you love.",
  "You make me want to become a better person.",
  "You are my favorite person to talk to.",
  "I love all the little things that make you, you.",
  "Because after everything, I would still choose you. Ikaw at Ikaw parin."
];

let reasonIndex = 0;
const reasonHeart = document.getElementById("reasonHeart");

function showReason() {
  document.getElementById("reasonText").textContent = reasons[reasonIndex];
  document.getElementById("reasonNumber").textContent =
    `${reasonIndex + 1} / ${reasons.length}`;
  reasonHeart.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.18)" },
      { transform: "scale(1)" }
    ],
    { duration: 350 }
  );
}

reasonHeart.addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  showReason();
});

// Music
const song = document.getElementById("ourSong");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  try {
    if (song.paused) {
      await song.play();
      musicBtn.textContent = "❚❚ Pause Our Song";
    } else {
      song.pause();
      musicBtn.textContent = "♫ Play Our Song";
    }
  } catch {
    alert();
  }
});

// Surprise modal
const modal = document.getElementById("surpriseModal");

document.getElementById("surpriseBtn").addEventListener("click", () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  burstHearts();
});

document.getElementById("closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Floating hearts
function createHeart() {
  const container = document.getElementById("hearts");
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 1300);

function burstHearts() {
  for (let i = 0; i < 24; i++) {
    setTimeout(createHeart, i * 50);
  }
}

// Initial reason
showReason();
