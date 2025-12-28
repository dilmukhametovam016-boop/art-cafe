// ----------------------
// Ленивая загрузка
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
const lazyImages = document.querySelectorAll('img[data-src]:not(.team-photo)');  lazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  });
});

// ----------------------
// Галерея (только если есть galleryModal)
// ----------------------
const galleryModal = document.getElementById("galleryModal");

if (galleryModal) {
  const galleries = {
    atmosphere: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    menu: ["5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    events: ["9.jpg", "10.jpg", "11.jpg", "12.jpg"]
  };

  let currentGallery = [];
  let currentIndex = 0;

  const modalImg = document.getElementById("galleryImage");

  document.querySelectorAll(".open-block").forEach(block => {
    block.addEventListener("click", () => {
      const key = block.dataset.gallery;
      currentGallery = galleries[key];
      currentIndex = 0;

      modalImg.src = currentGallery[currentIndex];
      galleryModal.style.display = "flex";
    });
  });

  document.querySelector(".close").onclick = () => {
    galleryModal.style.display = "none";
  };

  document.querySelector(".arrow.left").onclick = () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
  };

  document.querySelector(".arrow.right").onclick = () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
  };

  galleryModal.onclick = e => {
    if (e.target === galleryModal) galleryModal.style.display = "none";
  };
}

// ----------------------
// Модалки материалов
// ----------------------
document.querySelectorAll('.tab-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  });
});

document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
// Лайтбокс для галереи
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = lightbox.querySelector('.close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
