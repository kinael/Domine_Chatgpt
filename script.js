// FAQ Toggle + animações
document.addEventListener('DOMContentLoaded', function () {
  // FAQ toggle
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('i');

      content.classList.toggle('hidden');

      if (content.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
      } else {
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Animate on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial state
  document.querySelectorAll('.fade-in').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
