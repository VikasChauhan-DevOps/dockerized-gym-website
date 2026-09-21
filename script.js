const progress = document.getElementById("scrollProgress");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${pct}%`;
});

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
revealItems.forEach(item => revealObserver.observe(item));

const counters = document.querySelectorAll("[data-target]");
let countersStarted = false;
const metricObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || countersStarted) return;
    countersStarted = true;

    counters.forEach(counter => {
      const target = Number(counter.dataset.target);
      const decimals = target % 1 ? 1 : 0;
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = (target * eased).toFixed(decimals);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  });
}, { threshold: 0.35 });
const metrics = document.querySelector(".metrics-grid");
if (metrics) metricObserver.observe(metrics);

document.querySelectorAll(".plan-btn").forEach(button => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    document.getElementById("goal").value = "Improve fitness";
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      document.getElementById("name").focus();
      document.getElementById("formMessage").textContent = `${plan} plan selected. Complete the form to request a tour.`;
    }, 650);
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("formMessage").textContent =
    `Thanks ${name}! Your tour request has been received (demo form).`;
  event.target.reset();
});
