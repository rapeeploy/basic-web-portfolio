// เลือก element จาก HTML ด้วย id
const themeToggle = document.getElementById("theme-toggle");
const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("like-count");
const skillsToggle = document.getElementById("skills-toggle");
const skillsList = document.getElementById("skills-list");

// สลับ class บน body เพื่อให้ CSS เปลี่ยนเป็นธีมกลางคืน
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}

// ปุ่ม Like สลับกด/ยกเลิก และอัปเดตจำนวน
let likes = 0;
let isLiked = false;

function toggleLike() {
    isLiked = !isLiked;
    likes += isLiked ? 1 : -1;
    likeCount.textContent = likes;
    likeButton.firstChild.textContent = isLiked ? "❤️ Liked " : "🤍 Like ";
}

// ซ่อนหรือแสดงรายการ Skills
function toggleSkills() {
    const isHidden = skillsList.hidden;
    skillsList.hidden = !isHidden;
    skillsToggle.textContent = isHidden ? "Hide Skills" : "Show Skills";
}
