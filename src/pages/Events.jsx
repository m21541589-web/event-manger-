import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mouse move for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const categories = [
    { id: "all", label: "All Events", icon: "📅", count: 12 },
    { id: "wedding", label: "Weddings", icon: "💍", count: 4 },
    { id: "corporate", label: "Corporate", icon: "🏢", count: 3 },
    { id: "birthday", label: "Birthdays", icon: "🎂", count: 3 },
    { id: "gala", label: "Galas", icon: "✨", count: 2 }
  ];

  const events = [
    // Weddings
    {
      id: 1,
      category: "wedding",
      title: "Royal Wedding",
      description: "A magnificent royal-themed wedding with 500 guests, featuring stunning decorations and entertainment.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
      date: "June 15, 2024",
      location: "Grand Palace Hotel",
      guests: 500,
      gallery: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format"
      ],
      featured: true
    },
    {
      id: 2,
      category: "wedding",
      title: "Beachside Wedding",
      description: "Beautiful beach wedding with sunset views, tropical decorations, and live music.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
      date: "July 20, 2024",
      location: "Maldives Beach Resort",
      guests: 200,
      featured: false
    },
    {
      id: 3,
      category: "wedding",
      title: "Garden Wedding",
      description: "Elegant garden wedding with floral arrangements and outdoor dining experience.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format",
      date: "August 5, 2024",
      location: "Botanical Gardens",
      guests: 300,
      featured: true
    },
    {
      id: 4,
      category: "wedding",
      title: "Traditional Wedding",
      description: "Cultural wedding celebration with traditional ceremonies and authentic cuisine.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format",
      date: "September 12, 2024",
      location: "Heritage Hall",
      guests: 400,
      featured: false
    },

    // Corporate
    {
      id: 5,
      category: "corporate",
      title: "Tech Conference 2024",
      description: "Annual technology conference with industry leaders and innovative showcases.",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format",
      date: "March 10, 2024",
      location: "Convention Center",
      guests: 1000,
      featured: true
    },
    {
      id: 6,
      category: "corporate",
      title: "Product Launch",
      description: "Spectacular product launch event with media coverage and live demonstrations.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
      date: "April 5, 2024",
      location: "Innovation Hub",
      guests: 300,
      featured: false
    },
    {
      id: 7,
      category: "corporate",
      title: "Awards Gala",
      description: "Annual awards ceremony celebrating industry achievements and excellence.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format",
      date: "May 18, 2024",
      location: "Grand Ballroom",
      guests: 600,
      featured: true
    },

    // Birthdays
    {
      id: 8,
      category: "birthday",
      title: "50th Birthday Bash",
      description: "Milestone birthday celebration with family, friends, and live entertainment.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format",
      date: "February 8, 2024",
      location: "Luxury Villa",
      guests: 150,
      featured: false
    },
    {
      id: 9,
      category: "birthday",
      title: "Kids Birthday Party",
      description: "Magical children's party with characters, games, and themed decorations.",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&auto=format",
      date: "March 22, 2024",
      location: "Kids Wonderland",
      guests: 50,
      featured: true
    },
    {
      id: 10,
      category: "birthday",
      title: "Sweet 16 Party",
      description: "Teen birthday celebration with DJ, photo booth, and trendy decorations.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format",
      date: "April 30, 2024",
      location: "Event Space",
      guests: 200,
      featured: false
    },

    // Galas
    {
      id: 11,
      category: "gala",
      title: "Charity Gala",
      description: "Fundraising gala for children's hospital with dinner and auction.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format",
      date: "October 15, 2024",
      location: "Ritz Carlton",
      guests: 400,
      featured: true
    },
    {
      id: 12,
      category: "gala",
      title: "New Year's Eve Gala",
      description: "Luxurious New Year celebration with champagne, countdown, and fireworks.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&auto=format",
      date: "December 31, 2024",
      location: "Sky Lounge",
      guests: 500,
      featured: true
    }
  ];

  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const featuredEvents = events.filter(event => event.featured);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      background: "#0a0a0a",
      color: "white",
      overflow: "hidden",
      position: "relative",
      minHeight: "100vh"
    }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          @keyframes floatReverse {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-5deg); }
          }

          @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 20px gold); }
            50% { filter: drop-shadow(0 0 40px #ffd700); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .floating-element {
            animation: float 8s ease-in-out infinite;
          }

          .floating-reverse {
            animation: floatReverse 10s ease-in-out infinite;
          }

          .glowing-element {
            animation: glow 3s ease-in-out infinite;
          }

          .pulse-element {
            animation: pulse 2s ease-in-out infinite;
          }

          .rotating-element {
            animation: rotate 20s linear infinite;
          }

          .gradient-bg {
            background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
          }

          .event-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .event-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
            transition: left 0.5s;
          }

          .event-card:hover::before {
            left: 100%;
          }

          .event-card:hover {
            transform: translateY(-20px) scale(1.02);
            box-shadow: 0 30px 50px rgba(255,215,0,0.3);
          }

          .event-card:hover .event-image {
            transform: scale(1.1);
          }

          .event-image {
            transition: transform 0.5s ease;
          }

          .category-btn {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .category-btn::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) scaleX(0);
            width: 100%;
            height: 2px;
            background: gold;
            transition: transform 0.3s ease;
          }

          .category-btn:hover::after {
            transform: translateX(-50%) scaleX(1);
          }

          .category-btn.active {
            background: gold !important;
            color: black !important;
          }

          .modal {
            animation: scaleIn 0.3s ease forwards;
          }

          .loading-spinner {
            border: 4px solid rgba(255,215,0,0.1);
            border-top: 4px solid gold;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: rotate 1s linear infinite;
          }

          .gallery-image {
            transition: all 0.3s ease;
          }

          .gallery-image:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px gold;
          }
        `}
      </style>

      {/* Animated Background */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        {/* Gradient Overlay */}
        <div className="gradient-bg" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1
        }}></div>

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `rgba(255,215,0,${Math.random() * 0.3})`,
              borderRadius: "50%",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}

        {/* Decorative Circles */}
        <div className="rotating-element" style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          left: "-200px",
          top: "-200px"
        }}></div>

        <div className="rotating-element" style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          right: "-100px",
          bottom: "-100px",
          animationDirection: "reverse"
        }}></div>
      </div>

      {/* Main Content */}
      <div ref={sectionRef} style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 20px 50px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: "center",
          marginBottom: "60px",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.1s ease-out"
        }}>
          {/* Animated Badge */}
          <div className="floating-element" style={{
            display: "inline-block",
            padding: "10px 30px",
            background: "rgba(255,215,0,0.1)",
            border: "1px solid gold",
            borderRadius: "40px",
            marginBottom: "30px"
          }}>
            <span style={{ color: "gold", letterSpacing: "2px" }}>✦ OUR EVENTS ✦</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Featured <span style={{
              background: "linear-gradient(135deg, gold, #ffa500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Events</span>
          </h1>

          {/* Description */}
          <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#ccc",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "40px"
          }}>
            Explore our portfolio of successful events. From intimate gatherings to grand celebrations, 
            we create unforgettable experiences that leave lasting impressions.
          </p>

          {/* Stats */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap"
          }}>
            <div className="card-hover" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "gold" }}>500+</div>
              <div style={{ color: "#999" }}>Events Done</div>
            </div>
            <div className="card-hover" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "gold" }}>50+</div>
              <div style={{ color: "#999" }}>Venues</div>
            </div>
            <div className="card-hover" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "gold" }}>100%</div>
              <div style={{ color: "#999" }}>Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: "12px 25px",
                background: selectedCategory === category.id ? "gold" : "transparent",
                color: selectedCategory === category.id ? "black" : "white",
                border: "2px solid gold",
                borderRadius: "40px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease"
              }}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span style={{
                background: selectedCategory === category.id ? "black" : "gold",
                color: selectedCategory === category.id ? "gold" : "black",
                padding: "2px 8px",
                borderRadius: "20px",
                fontSize: "0.8rem"
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px"
          }}>
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            {/* Featured Events Carousel */}
            {selectedCategory === "all" && (
              <div style={{
                marginBottom: "60px"
              }}>
                <h2 style={{
                  fontSize: "2rem",
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <span className="glowing-element">✨</span>
                  Featured Events
                </h2>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px"
                }}>
                  {featuredEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className="event-card"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "2px solid gold",
                        animation: `slideInUp 0.5s ease ${index * 0.1}s forwards`,
                        opacity: 0,
                        cursor: "pointer"
                      }}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div style={{
                        height: "250px",
                        overflow: "hidden"
                      }}>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="event-image"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
                      </div>
                      <div style={{
                        padding: "25px",
                        position: "relative"
                      }}>
                        <div style={{
                          position: "absolute",
                          top: "-15px",
                          right: "20px",
                          background: "gold",
                          color: "black",
                          padding: "5px 15px",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          fontWeight: "bold"
                        }}>
                          Featured ✦
                        </div>
                        <h3 style={{
                          fontSize: "1.5rem",
                          color: "gold",
                          marginBottom: "10px"
                        }}>
                          {event.title}
                        </h3>
                        <p style={{
                          color: "#ccc",
                          marginBottom: "15px",
                          lineHeight: "1.6"
                        }}>
                          {event.description.substring(0, 100)}...
                        </p>
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "#999",
                          fontSize: "0.9rem"
                        }}>
                          <span>📅 {event.date}</span>
                          <span>👥 {event.guests} guests</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Events Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
              marginBottom: "60px"
            }}>
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="event-card"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,215,0,0.2)",
                    animation: `slideInUp 0.5s ease ${index * 0.1}s forwards`,
                    opacity: 0,
                    cursor: "pointer"
                  }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div style={{
                    height: "250px",
                    overflow: "hidden",
                    position: "relative"
                  }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                    {event.featured && (
                      <div style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "gold",
                        color: "black",
                        padding: "5px 15px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "bold"
                      }}>
                        Featured
                      </div>
                    )}
                  </div>
                  <div style={{
                    padding: "25px"
                  }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "15px"
                    }}>
                      <span style={{
                        background: "rgba(255,215,0,0.1)",
                        padding: "5px 15px",
                        borderRadius: "20px",
                        color: "gold",
                        fontSize: "0.9rem"
                      }}>
                        {categories.find(c => c.id === event.category)?.icon} {event.category}
                      </span>
                      <span style={{ color: "gold", fontSize: "1.2rem" }}>✦</span>
                    </div>
                    <h3 style={{
                      fontSize: "1.5rem",
                      color: "white",
                      marginBottom: "10px"
                    }}>
                      {event.title}
                    </h3>
                    <p style={{
                      color: "#999",
                      marginBottom: "15px",
                      lineHeight: "1.6"
                    }}>
                      {event.description.substring(0, 120)}...
                    </p>
                    <div style={{
                      display: "flex",
                      gap: "15px",
                      color: "#ccc",
                      fontSize: "0.9rem",
                      marginBottom: "15px"
                    }}>
                      <span>📅 {event.date}</span>
                      <span>📍 {event.location}</span>
                    </div>
                    <button style={{
                      width: "100%",
                      padding: "12px",
                      background: "transparent",
                      color: "gold",
                      border: "2px solid gold",
                      borderRadius: "30px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "gold";
                      e.target.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "gold";
                    }}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
              padding: "40px",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "30px"
            }}>
              <div style={{ textAlign: "center" }}>
                <div className="floating-element" style={{ fontSize: "3rem", color: "gold" }}>📅</div>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>500+</div>
                <div style={{ color: "#ccc" }}>Total Events</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="floating-element" style={{ fontSize: "3rem", color: "gold" }}>💍</div>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>200+</div>
                <div style={{ color: "#ccc" }}>Weddings</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="floating-element" style={{ fontSize: "3rem", color: "gold" }}>🏢</div>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>150+</div>
                <div style={{ color: "#ccc" }}>Corporate</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="floating-element" style={{ fontSize: "3rem", color: "gold" }}>🎂</div>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>150+</div>
                <div style={{ color: "#ccc" }}>Parties</div>
              </div>
            </div>

            {/* CTA Section */}
            <div style={{
              textAlign: "center",
              padding: "80px 20px",
              background: "linear-gradient(135deg, rgba(255,215,0,0.1), transparent)",
              borderRadius: "50px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div className="rotating-element" style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                border: "2px solid rgba(255,215,0,0.1)",
                borderRadius: "50%",
                left: "-100px",
                top: "-100px"
              }}></div>

              <div className="rotating-element" style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                border: "2px solid rgba(255,215,0,0.1)",
                borderRadius: "50%",
                right: "-50px",
                bottom: "-50px",
                animationDirection: "reverse"
              }}></div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px"
                }}>
                  Want to Feature Your <span style={{ color: "gold" }}>Event</span>?
                </h2>
                
                <p style={{
                  color: "#ccc",
                  fontSize: "1.2rem",
                  maxWidth: "600px",
                  margin: "0 auto 40px",
                  lineHeight: "1.8"
                }}>
                  Let us help you create an unforgettable experience for your next event
                </p>

                <Link to="/contact">
                  <button className="glowing-element pulse-element" style={{
                    padding: "18px 60px",
                    fontSize: "1.2rem",
                    background: "linear-gradient(135deg, gold, #ffa500)",
                    color: "black",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(255,215,0,0.3)"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                    Plan Your Event ✦
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto"
          }}
          onClick={() => setSelectedEvent(null)}>
            <div className="modal" style={{
              maxWidth: "900px",
              width: "100%",
              background: "#1a1a1a",
              borderRadius: "30px",
              padding: "40px",
              position: "relative",
              border: "2px solid gold"
            }}
            onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "gold",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                ✕
              </button>

              <h2 style={{
                fontSize: "2.5rem",
                color: "gold",
                marginBottom: "20px"
              }}>
                {selectedEvent.title}
              </h2>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                marginBottom: "30px"
              }}>
                <div>
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "20px"
                    }}
                  />
                </div>
                <div>
                  <p style={{
                    color: "#ccc",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "20px"
                  }}>
                    {selectedEvent.description}
                  </p>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  }}>
                    <div style={{ color: "#999" }}>
                      <span style={{ color: "gold" }}>📅 Date:</span> {selectedEvent.date}
                    </div>
                    <div style={{ color: "#999" }}>
                      <span style={{ color: "gold" }}>📍 Location:</span> {selectedEvent.location}
                    </div>
                    <div style={{ color: "#999" }}>
                      <span style={{ color: "gold" }}>👥 Guests:</span> {selectedEvent.guests}
                    </div>
                    <div style={{ color: "#999" }}>
                      <span style={{ color: "gold" }}>🏷️ Category:</span> {selectedEvent.category}
                    </div>
                  </div>
                </div>
              </div>

              {selectedEvent.gallery && (
                <>
                  <h3 style={{
                    fontSize: "1.5rem",
                    color: "white",
                    marginBottom: "20px"
                  }}>
                    Event Gallery
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "15px",
                    marginBottom: "30px"
                  }}>
                    {selectedEvent.gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="gallery-image"
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          cursor: "pointer"
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              <Link to="/contact">
                <button style={{
                  width: "100%",
                  padding: "15px",
                  background: "gold",
                  color: "black",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                  Book Similar Event ✦
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;