/**
 * Performance Monitoring and Optimization Utilities
 * Implements Web Vitals tracking and performance optimizations
 */

// Track Core Web Vitals
export const trackWebVitals = () => {
  if ("PerformanceObserver" in window) {
    // Track Cumulative Layout Shift (CLS)
    try {
      new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        console.log("CLS:", cls);
      }).observe({ type: "layout-shift", buffered: true });
    } catch (e) {
      console.log("CLS tracking not supported");
    }

    // Track First Input Delay (FID)
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log("FID:", (entry as any).processingStart - entry.startTime);
        }
      }).observe({ type: "first-input", buffered: true });
    } catch (e) {
      console.log("FID tracking not supported");
    }

    // Track Largest Contentful Paint (LCP)
    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);
      }).observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {
      console.log("LCP tracking not supported");
    }
  }
};

// Optimize images with Intersection Observer
export const optimizeImages = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.dataset.src;
          if (dataSrc) {
            img.src = dataSrc;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fonts = ["/fonts/inter-var.woff2"];

  fonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = font;
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
export const initializePerformanceOptimizations = () => {
  // Enable if not in development
  if (import.meta.env.MODE !== "development") {
    trackWebVitals();
  }

  optimizeImages();
  preloadCriticalResources();

  // Add performance hints
  if ("connection" in navigator) {
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === "slow-2g") {
      document.documentElement.classList.add("slow-connection");
    }
  }
};
