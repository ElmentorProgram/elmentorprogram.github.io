export interface Translations {
  navigation: {
    home: string;
    about: string;
    circles: string;
    activities: string;
    founder: string;
    news: string;
    contact: string;
    community: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    vision: string;
    values: string;
  };
  circles: {
    title: string;
    subtitle: string;
    description: string;
    viewAll: string;
  };
  activities: {
    title: string;
    subtitle: string;
    description: string;
    viewAll: string;
  };
  founder: {
    title: string;
    subtitle: string;
    name: string;
    role: string;
    bio: string;
  };
  news: {
    title: string;
    subtitle: string;
    viewAll: string;
    readMore: string;
  };
  video: {
    title: string;
    subtitle: string;
    watchVideo: string;
    playButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
  community: {
    title: string;
    subtitle: string;
    joinCommunity: string;
    followUs: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    newsletter: string;
    subscribe: string;
    copyright: string;
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    next: string;
    previous: string;
    viewMore: string;
    learnMore: string;
  };
}

export const translations: Record<"en" | "ar", Translations> = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      circles: "Circles",
      activities: "Activities",
      founder: "Founder",
      news: "News",
      contact: "Contact",
      community: "Community",
      language: "Language",
    },
    hero: {
      title: "Empowering Innovation Through Collaboration",
      subtitle: "DevOps Visions Community",
      description:
        "Join our thriving community of DevOps professionals, innovators, and visionaries. Together, we shape the future of technology through knowledge sharing, collaboration, and cutting-edge practices.",
      ctaPrimary: "Join Community",
      ctaSecondary: "Learn More",
    },
    about: {
      title: "About aymanaboghonim",
      subtitle: "DevOps Visions Community",
      description:
        "We are a passionate community dedicated to advancing DevOps practices and fostering innovation in the technology landscape.",
      mission: "Our Mission",
      vision: "Our Vision",
      values: "Our Values",
    },
    circles: {
      title: "Our Circles",
      subtitle: "Specialized Communities",
      description:
        "Explore our focused circles where experts and enthusiasts collaborate on specific domains.",
      viewAll: "View All Circles",
    },
    activities: {
      title: "Activities & Events",
      subtitle: "Engage & Learn",
      description:
        "Discover upcoming events, workshops, and collaborative activities designed to enhance your skills.",
      viewAll: "View All Activities",
    },
    founder: {
      title: "Meet Our Founder",
      subtitle: "Visionary Leadership",
      name: "Ayman Aboghonim",
      role: "Founder & Community Leader",
      bio: "A passionate DevOps advocate with extensive experience in building and scaling technology communities.",
    },
    news: {
      title: "Latest News",
      subtitle: "Stay Updated",
      viewAll: "View All News",
      readMore: "Read More",
    },
    video: {
      title: "Community Introduction",
      subtitle: "Watch Our Story",
      watchVideo: "Watch Video",
      playButton: "Play Video",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    community: {
      title: "Join Our Community",
      subtitle: "Connect & Collaborate",
      joinCommunity: "Join Community",
      followUs: "Follow Us",
    },
    footer: {
      description:
        "aymanaboghonim DevOps Visions Community - Empowering innovation through collaboration and knowledge sharing.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      subscribe: "Subscribe",
      copyright: "© 2024 aymanaboghonim DevOps Visions. All rights reserved.",
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      retry: "Try Again",
      close: "Close",
      next: "Next",
      previous: "Previous",
      viewMore: "View More",
      learnMore: "Learn More",
    },
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      about: "حول",
      circles: "الدوائر",
      activities: "الأنشطة",
      founder: "المؤسس",
      news: "الأخبار",
      contact: "اتصل بنا",
      community: "المجتمع",
      language: "اللغة",
    },
    hero: {
      title: "تمكين الابتكار من خلال التعاون",
      subtitle: "مجتمع رؤى DevOps",
      description:
        "انضم إلى مجتمعنا المزدهر من محترفي DevOps والمبتكرين وأصحاب الرؤى. معًا، نصنع مستقبل التكنولوجيا من خلال تبادل المعرفة والتعاون والممارسات المتطورة.",
      ctaPrimary: "انضم للمجتمع",
      ctaSecondary: "اعرف أكثر",
    },
    about: {
      title: "حول إلمنتور",
      subtitle: "مجتمع رؤى DevOps",
      description:
        "نحن مجتمع شغوف مكرس لتطوير ممارسات DevOps وتعزيز الابتكار في المشهد التكنولوجي.",
      mission: "رسالتنا",
      vision: "رؤيتنا",
      values: "قيمنا",
    },
    circles: {
      title: "دوائرنا",
      subtitle: "مجتمعات متخصصة",
      description:
        "استكشف دوائرنا المتخصصة حيث يتعاون الخبراء والمتحمسون في مجالات محددة.",
      viewAll: "عرض جميع الدوائر",
    },
    activities: {
      title: "الأنشطة والفعاليات",
      subtitle: "شارك وتعلم",
      description:
        "اكتشف الفعاليات القادمة وورش العمل والأنشطة التعاونية المصممة لتعزيز مهاراتك.",
      viewAll: "عرض جميع الأنشطة",
    },
    founder: {
      title: "تعرف على مؤسسنا",
      subtitle: "قيادة رؤيوية",
      name: "أيمن أبو غنيم",
      role: "المؤسس وقائد المجتمع",
      bio: "مناصر شغوف لـ DevOps مع خبرة واسعة في بناء وتطوير مجتمعات التكنولوجيا.",
    },
    news: {
      title: "آخر الأخبار",
      subtitle: "ابق محدثًا",
      viewAll: "عرض جميع الأخبار",
      readMore: "اقرأ المزيد",
    },
    video: {
      title: "مقدمة المجتمع",
      subtitle: "شاهد قصتنا",
      watchVideo: "شاهد الفيديو",
      playButton: "تشغيل الفيديو",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "اتصل بنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      success: "تم إرسال الرسالة بنجاح!",
      error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    },
    community: {
      title: "انضم لمجتمعنا",
      subtitle: "تواصل وتعاون",
      joinCommunity: "انضم للمجتمع",
      followUs: "تابعنا",
    },
    footer: {
      description:
        "مجتمع إلمنتور رؤى DevOps - تمكين الابتكار من خلال التعاون وتبادل المعرفة.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      followUs: "تابعنا",
      newsletter: "النشرة الإخبارية",
      subscribe: "اشترك",
      copyright: "© 2024 إلمنتور رؤى DevOps. جميع الحقوق محفوظة.",
    },
    common: {
      loading: "جاري التحميل...",
      error: "حدث خطأ",
      retry: "حاول مرة أخرى",
      close: "إغلاق",
      next: "التالي",
      previous: "السابق",
      viewMore: "عرض المزيد",
      learnMore: "اعرف أكثر",
    },
  },
};

export const useTranslations = (language: "en" | "ar"): Translations => {
  return translations[language];
};
