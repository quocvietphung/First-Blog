const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#f0f0f0';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});

const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const article = link.parentNode;
    const content = article.querySelector('p');
    content.classList.toggle('hidden');
    link.textContent = content.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
});

const countdown = document.querySelector('#countdown');
const nextPostDate = new Date('2022-03-01T00:00:00Z');
const timerId = setInterval(() => {
  const now = new Date().getTime();
  const distance = nextPostDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `Next Post in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (distance < 0) {
    clearInterval(timerId);
    countdown.innerHTML = "New post is here!";
  }
}, 1000);
