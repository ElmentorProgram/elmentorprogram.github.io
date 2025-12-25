import React, { useState, useEffect } from 'react';
import '../../styles/NewsSection.css';
import Button from '../Button';

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState<string>('all');
  
  // Official news data organized by year - only including items with public links
  const mockNews = [
    // 2025 News
    {
      id: 1,
      title: "GitHub Copilot Workspace From Idea to Implementation",
      summary: "A session demonstrating how to use GitHub Copilot to implement ideas efficiently, with real use cases and practical examples.",
      date: "2025-03-15",
      type: "event",
      source: "Elmentor Program",
      link: "https://youtu.be/qFW-G2KH5Nw?si=UyQqk3FJjlM9wIzO",
      year: "2025"
    },
    {
      id: 2,
      title: "Deploying Q2A & WordPress on Azure VM: Hands-On Session",
      summary: "Practical session on deploying Question2Answer and WordPress platforms on Microsoft Azure Virtual Machines.",
      date: "2025-02-20",
      type: "technical",
      source: "DevOps Visions Public Community",
      link: "https://youtu.be/GGy0mtGQapU?si=zQIEn2RXDIi7Sz2j",
      year: "2025"
    },
    
    // 2024 News
    {
      id: 3,
      title: "Secret to Success with Sandra Kiel & Waddah Azhary",
      summary: "Insights on achieving success in the tech industry from Sandra Kiel and Waddah Azhary, with practical advice and career guidance.",
      date: "2024-11-23",
      type: "career",
      source: "Elmentor Program",
      link: "https://youtu.be/0AZB63DZCcg?si=en-HldnSP5lz03U3",
      year: "2024"
    },
    {
      id: 4,
      title: "A Brief Overview of The Mentor Community 2024",
      summary: "Waddah Azhary provides a comprehensive overview of The Elmentor Program's mission, structure, and benefits.",
      date: "2024-05-12",
      type: "community",
      source: "Elmentor Program",
      link: "https://www.youtube.com/watch?v=zGqUFocNzd4",
      year: "2024"
    },
    
    // 2023 News
    {
      id: 5,
      title: "Communication Skills Session Part (3)",
      summary: "Explore presentation skills, email etiquette, and personal branding with industry leaders in this impactful communication session.",
      date: "2023-09-05",
      type: "career",
      source: "Elmentor Program",
      link: "https://www.youtube.com/watch?v=LNmBb1Yrdko",
      year: "2023"
    },
    {
      id: 6,
      title: "Maximizing Productivity with Azure DevOps and Logic Apps",
      summary: "An expert-led session on integrating Azure DevOps with Logic Apps to supercharge your workflow. Practical insights included.",
      date: "2023-08-29",
      type: "technical",
      source: "Elmentor Program",
      link: "https://www.youtube.com/watch?v=AhBsuOYnEEI&t=414s",
      year: "2023"
    }
  ];

  useEffect(() => {
    // Simulate API call with mock data
    const fetchNews = () => {
      setLoading(true);
      setTimeout(() => {
        setNews(mockNews);
        setLoading(false);
      }, 1000);
    };

    fetchNews();
  }, []);

  // Get unique years for archive filtering
  const availableYears = [...new Set(mockNews.map(item => item.year))].sort((a, b) => b.localeCompare(a));

  // Filter news based on active year
  const filteredNews = activeYear === 'all' 
    ? news 
    : news.filter(item => item.year === activeYear);

  const getNewsTypeIcon = (type: string) => {
    switch (type) {
      case 'announcement':
        return '📢';
      case 'project':
        return '🚀';
      case 'event':
        return '📅';
      case 'community':
        return '👥';
      case 'technical':
        return '💻';
      case 'career':
        return '📈';
      default:
        return '📰';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="news" className="news-section" aria-labelledby="news-title">
        <div className="news-container">
          <h2 id="news-title" className="news-section-title">Latest News & Updates</h2>
          <div className="news-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest updates...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="news" className="news-section" aria-labelledby="news-title">
        <div className="news-container">
          <h2 id="news-title" className="news-section-title">Latest News & Updates</h2>
          <div className="news-error">
            <p>Unable to load news updates. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="news-section" aria-labelledby="news-title">
      <div className="news-container">
        <h2 id="news-title" className="news-section-title">Latest News & Updates</h2>
        <p className="news-subtitle">
          Stay informed about our latest initiatives, community projects, and upcoming events.
        </p>

        {/* Archive selector */}
        <div className="news-archive-selector">
          <button 
            className={`archive-year-btn ${activeYear === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveYear('all')}
          >
            All
          </button>
          {availableYears.map(year => (
            <button
              key={year}
              className={`archive-year-btn ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-header">
                <span className="news-type-icon" aria-label={`${article.type} news`}>
                  {getNewsTypeIcon(article.type)}
                </span>
                <div className="news-meta">
                  <span className="news-date">{formatDate(article.date)}</span>
                  <span className="news-source">{article.source}</span>
                </div>
              </div>
              
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              
              <div className="news-footer">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    if (article.link && article.link.startsWith('#')) {
                      document.querySelector(article.link)?.scrollIntoView({ behavior: 'smooth' });
                    } else if (article.link) {
                      window.open(article.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  ariaLabel={`Read more about ${article.title}`}
                >
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="no-news-message">
            <p>No updates available for the selected year.</p>
          </div>
        )}

        <div className="news-cta">          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('https://github.com/ElmentorProgram', '_blank', 'noopener,noreferrer')}
            ariaLabel="Follow our GitHub for more updates"
          >
            Follow on GitHub
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            ariaLabel="Subscribe to newsletter"
          >
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
