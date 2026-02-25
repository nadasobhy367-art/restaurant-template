// Menu Data
const menuData = {
    food: [
        { name: "برجر لافييستا", desc: "برجر لحم مشوي مع صوص خاص", price: "85 جنيه", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
        { name: "بيتزا مارغريتا", desc: "بيتزا طازجة بالجبن والطماطم", price: "120 جنيه", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
        { name: "باستا كريمة", desc: "باستا بصوص كريمة والدجاج", price: "95 جنيه", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400" }
    ],
    drinks: [
        { name: "قهوة كولد برو", desc: "قهوة باردة مخمرة 24 ساعة", price: "45 جنيه", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" },
        { name: "موهيتو نعناع", desc: "مشروب منعش بالنعناع والليمون", price: "35 جنيه", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400" },
        { name: "عصير مانجو طازج", desc: "مانجو طبيعي 100%", price: "40 جنيه", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400" }
    ],
    desserts: [
        { name: "تشيز كيك", desc: "تشيز كيك كريمي بالتوت", price: "65 جنيه", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400" },
        { name: "بروني شوكولاتة", desc: "بروني دافي مع آيس كريم", price: "55 جنيه", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400" },
        { name: "كنافة بالجبن", desc: "كنافة شرقية أصيلة", price: "50 جنيه", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400" }
    ]
};

// Render Menu
function renderMenu(tab) {
    const grid = document.getElementById('menu-items');
    grid.innerHTML = menuData[tab].map(item => `
        <div class="menu-card">
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-card-info">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <span class="price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderMenu(tab.dataset.tab);
    });
});

// Hamburger
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Form Submit
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('تم الحجز بنجاح! هنتواصل معاك قريباً ✅');
    e.target.reset();
});

// Init
renderMenu('food');

// Scroll Reveal
const revealElements = document.querySelectorAll('.menu-card, .stat, .info-item, .about-text, .contact-form');
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').classList.add('open');
    });
});

document.querySelector('.close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('open');
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('open');
    }
});
