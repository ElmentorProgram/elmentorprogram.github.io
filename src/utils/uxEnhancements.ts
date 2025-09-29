/**
 * Smooth Scroll Utility with Enhanced UX
 * Provides smooth scrolling with visual feedback and accessibility support
 */

export const smoothScrollTo = (
  targetId: string,
  options: {
    offset?: number;
    duration?: number;
  } = {},
) => {
  const {
    offset = 80, // Account for fixed header
    duration = 800,
  } = options;

  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - offset;

  // Use native smooth scroll if supported
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  } else {
    // Fallback for older browsers
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  // Announce to screen readers
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = `Navigated to ${target.getAttribute("aria-labelledby") || targetId} section`;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Add visual feedback for button interactions
 */
export const addButtonFeedback = () => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("btn") || target.closest(".btn")) {
      const button = target.classList.contains("btn")
        ? target
        : (target.closest(".btn") as HTMLElement);

      // Add ripple effect
      const ripple = document.createElement("span");
      ripple.className = "btn__ripple";

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = (e as MouseEvent).clientX - rect.left - size / 2;
      const y = (e as MouseEvent).clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  });
};

/**
 * Initialize all UX enhancements
 */
export const initializeUXEnhancements = () => {
  addButtonFeedback();

  // Add intersection observer for fade-in animations
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }
};
