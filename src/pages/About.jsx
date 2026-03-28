import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [counts, setCounts] = useState({
    events: 0,
    clients: 0,
    members: 0,
    years: 0,
    satisfaction: 0,
    partners: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Counter animation
    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      
      setCounts({
        events: Math.min(500, Math.floor((500 / steps) * currentStep)),
        clients: Math.min(450, Math.floor((450 / steps) * currentStep)),
        members: Math.min(50, Math.floor((50 / steps) * currentStep)),
        years: Math.min(12, Math.floor((12 / steps) * currentStep)),
        satisfaction: Math.min(100, Math.floor((100 / steps) * currentStep)),
        partners: Math.min(100, Math.floor((100 / steps) * currentStep))
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({ 
          events: 500, 
          clients: 450, 
          members: 50, 
          years: 12,
          satisfaction: 100,
          partners: 100
        });
      }
    }, interval);

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
      clearInterval(timer);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "15+ years in luxury event planning",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Award-winning event designer",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Emma Williams",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      bio: "Expert in flawless execution",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "David Brown",
      role: "Lead Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Specialist in corporate events",
      social: { linkedin: "#", twitter: "#", email: "#" }
    }
  ];

  const milestones = [
    { year: "2012", title: "Company Founded", icon: "https://cdn-icons-png.flaticon.com/512/3095/3095110.png", desc: "Started with a vision" },
    { year: "2015", title: "100+ Events", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041918.png", desc: "Reached major milestone" },
    { year: "2018", title: "International Expansion", icon: "https://cdn-icons-png.flaticon.com/512/1150/1150348.png", desc: "Opened NYC office" },
    { year: "2020", title: "Virtual Events", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", desc: "Adapted to new normal" },
    { year: "2022", title: "Award Winning", icon: "https://cdn-icons-png.flaticon.com/512/2583/2583197.png", desc: "Best Event Company" },
    { year: "2024", title: "Global Recognition", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", desc: "Top 10 Event Planners" }
  ];

  const values = [
    { icon: "https://cdn-icons-png.flaticon.com/512/1827/1827372.png", title: "Excellence", desc: "We never compromise on quality" },
    { icon: "https://cdn-icons-png.flaticon.com/512/1903/1903317.png", title: "Integrity", desc: "Honest and transparent dealings" },
    { icon: "https://cdn-icons-png.flaticon.com/512/1164/1164156.png", title: "Innovation", desc: "Creative solutions for every event" },
    { icon: "https://cdn-icons-png.flaticon.com/512/864/864350.png", title: "Passion", desc: "We love what we do" }
  ];

  const testimonials = [
    {
      quote: "Elite Events transformed our wedding into a fairytale. Every detail was perfect!",
      author: "Sarah & Michael",
      role: "Wedding Clients",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
    },
    {
      quote: "The most professional team we've ever worked with. Highly recommended!",
      author: "James Wilson",
      role: "CEO, TechCorp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop"
    },
    {
      quote: "They handled our corporate gala flawlessly. 500+ guests and everything went smoothly.",
      author: "Lisa Anderson",
      role: "Event Director",
      rating: 5,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
    }
  ];

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

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes zoomIn {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.1);
            }
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

          .card-hover {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .card-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent);
            transition: left 0.5s;
          }

          .card-hover:hover::before {
            left: 100%;
          }

          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(255,215,0,0.2);
          }

          .team-card {
            transition: all 0.3s ease;
          }

          .team-card:hover {
            transform: translateY(-10px) scale(1.02);
          }

          .team-card:hover .team-image {
            animation: pulse 1s ease infinite;
          }

          .milestone-line {
            position: relative;
          }

          .milestone-line::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, transparent, gold, transparent);
            transform: translateX(-50%);
          }

          .tab-button {
            transition: all 0.3s ease;
          }

          .tab-button:hover {
            background: gold;
            color: black;
          }

          .tab-button.active {
            background: gold;
            color: black;
          }

          .counter-number {
            background: linear-gradient(135deg, gold, #ffa500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
          }

          .hero-image {
            animation: float 6s ease-in-out infinite;
          }

          .hero-background {
            animation: zoomIn 20s ease-in-out infinite alternate;
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
          width: "600px",
          height: "600px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          left: "-200px",
          top: "-100px"
        }}></div>

        <div className="rotating-element" style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          right: "-100px",
          bottom: "-50px",
          animationDirection: "reverse"
        }}></div>
      </div>

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 20px 50px"
      }}>
        {/* Hero Section with Background Image */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "80px",
          position: "relative",
          padding: "80px 40px",
          borderRadius: "50px",
          overflow: "hidden"
        }}>
          {/* Hero Background Image */}
          <div className="hero-background" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(1.05)`,
            transition: "transform 0.1s ease-out",
            animation: "zoomIn 20s ease-in-out infinite alternate"
          }}>
            {/* Dark Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)"
            }}></div>
          </div>

          {/* Hero Content */}
          <div style={{
            position: "relative",
            zIndex: 2,
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: "transform 0.1s ease-out"
          }}>
            {/* Hero Image */}
            <div className="hero-image" style={{
              width: "200px",
              height: "200px",
              margin: "0 auto 30px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid gold",
              boxShadow: "0 0 50px rgba(255,215,0,0.5)",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop"
                alt="Elite Events"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Animated Badge */}
            <div className="floating-element" style={{
              display: "inline-block",
              padding: "8px 25px",
              background: "rgba(255,215,0,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid gold",
              borderRadius: "30px",
              marginBottom: "30px"
            }}>
              <span style={{ color: "gold", letterSpacing: "2px" }}>✦ SINCE 2012 ✦</span>
            </div>

            {/* Title with Gradient */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "800",
              marginBottom: "30px",
              lineHeight: "1.2",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}>
              <span style={{ color: "white" }}>About</span>{" "}
              <span style={{
                background: "linear-gradient(135deg, gold, #ffa500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Elite Events</span>
            </h1>

            {/* Description with Animation */}
            <p style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#ccc",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "50px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
            }}>
              We are a premium event management company dedicated to creating unforgettable experiences. 
              With over a decade of expertise, we've mastered the art of turning visions into reality, 
              delivering world-class events from luxury weddings to corporate galas.
            </p>

            {/* Stats Row */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginBottom: "60px"
            }}>
              {[
                { label: "Years", value: counts.years, icon: "⭐" },
                { label: "Events", value: counts.events, icon: "🎉" },
                { label: "Clients", value: counts.clients, icon: "😊" }
              ].map((stat, index) => (
                <div key={index} className="card-hover" style={{
                  padding: "20px 40px",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,215,0,0.3)"
                }}>
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "10px" }}>{stat.icon}</span>
                  <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "gold" }}>{stat.value}+</div>
                  <div style={{ color: "#ccc" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values Section with Images */}
        <div ref={sectionRef} style={{
          maxWidth: "1200px",
          margin: "0 auto 80px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px"
          }}>
            Our <span style={{ color: "gold" }}>Core Values</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {values.map((value, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  padding: "40px 30px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "20px",
                  textAlign: "center",
                  border: "1px solid rgba(255,215,0,0.1)",
                  animation: `slideInUp 0.5s ease ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  background: "rgba(255,215,0,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img 
                    src={value.icon}
                    alt={value.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain"
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "gold",
                  marginBottom: "15px"
                }}>
                  {value.title}
                </h3>
                <p style={{ color: "#999", lineHeight: "1.6" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Counters Grid */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto 80px",
          padding: "60px 20px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "50px",
          backdropFilter: "blur(10px)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px"
          }}>
            {[
              { label: "Events Managed", value: counts.events, icon: "🎉" },
              { label: "Happy Clients", value: counts.clients, icon: "😊" },
              { label: "Team Members", value: counts.members, icon: "👥" },
              { label: "Years Experience", value: counts.years, icon: "⭐" },
              { label: "Satisfaction", value: counts.satisfaction, icon: "💯", suffix: "%" },
              { label: "Partners", value: counts.partners, icon: "🤝", suffix: "+" }
            ].map((counter, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  textAlign: "center",
                  padding: "30px",
                  background: "rgba(255,215,0,0.05)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,215,0,0.2)"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{counter.icon}</div>
                <div className="counter-number" style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "10px"
                }}>
                  {counter.value}{counter.suffix || "+"}
                </div>
                <div style={{ color: "#ccc", fontSize: "1rem" }}>{counter.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline with Images */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto 80px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px"
          }}>
            Our <span style={{ color: "gold" }}>Journey</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  padding: "40px 30px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "20px",
                  textAlign: "center",
                  border: "1px solid rgba(255,215,0,0.1)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div className="floating-element" style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  background: "rgba(255,215,0,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img 
                    src={milestone.icon}
                    alt={milestone.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain"
                    }}
                  />
                </div>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "gold",
                  marginBottom: "10px"
                }}>
                  {milestone.year}
                </div>
                <h3 style={{
                  fontSize: "1.3rem",
                  color: "white",
                  marginBottom: "10px"
                }}>
                  {milestone.title}
                </h3>
                <p style={{ color: "#999" }}>
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section with Images */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto 80px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "20px"
          }}>
            Meet Our <span style={{ color: "gold" }}>Team</span>
          </h2>
          <p style={{
            textAlign: "center",
            color: "#ccc",
            maxWidth: "600px",
            margin: "0 auto 50px"
          }}>
            The creative minds behind our success
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card card-hover"
                style={{
                  padding: "40px 20px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "20px",
                  textAlign: "center",
                  border: "1px solid rgba(255,215,0,0.1)"
                }}
              >
                <div className="team-image floating-element" style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                  border: "3px solid gold",
                  boxShadow: "0 10px 30px rgba(255,215,0,0.3)"
                }}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "5px" }}>
                  {member.name}
                </h3>
                <p style={{ color: "gold", marginBottom: "15px", fontWeight: "500" }}>
                  {member.role}
                </p>
                <p style={{ color: "#999", fontSize: "0.9rem", marginBottom: "20px" }}>
                  {member.bio}
                </p>
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px"
                }}>
                  <a href={member.social.linkedin} className="social-icon" style={{
                    color: "#0077b5",
                    fontSize: "1.2rem",
                    textDecoration: "none"
                  }}>📘</a>
                  <a href={member.social.twitter} style={{
                    color: "#1da1f2",
                    fontSize: "1.2rem",
                    textDecoration: "none"
                  }}>🐦</a>
                  <a href={member.social.email} style={{
                    color: "gold",
                    fontSize: "1.2rem",
                    textDecoration: "none"
                  }}>✉️</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section with Images */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto 80px",
          padding: "60px 20px",
          background: "rgba(255,215,0,0.02)",
          borderRadius: "50px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px"
          }}>
            Client <span style={{ color: "gold" }}>Stories</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  padding: "40px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,215,0,0.1)",
                  position: "relative"
                }}
              >
                <div style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  marginBottom: "20px"
                }}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                
                <div style={{
                  fontSize: "4rem",
                  color: "rgba(255,215,0,0.1)",
                  position: "absolute",
                  top: "20px",
                  right: "20px"
                }}>"</div>
                
                <div style={{
                  display: "flex",
                  gap: "5px",
                  marginBottom: "20px"
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: "gold", fontSize: "1.5rem" }}>★</span>
                  ))}
                </div>

                <p style={{
                  color: "#ccc",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  fontStyle: "italic"
                }}>
                  "{testimonial.quote}"
                </p>

                <div>
                  <h4 style={{ color: "white", fontSize: "1.1rem" }}>{testimonial.author}</h4>
                  <p style={{ color: "gold", fontSize: "0.9rem" }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Image */}
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, rgba(255,215,0,0.1), transparent)",
          borderRadius: "50px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div className="rotating-element" style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            border: "2px solid rgba(255,215,0,0.1)",
            borderRadius: "50%",
            left: "-50px",
            top: "-50px"
          }}></div>

          <div className="rotating-element" style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            border: "2px solid rgba(255,215,0,0.1)",
            borderRadius: "50%",
            right: "-30px",
            bottom: "-30px",
            animationDirection: "reverse"
          }}></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              width: "120px",
              height: "120px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid gold"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&h=200&fit=crop"
                alt="Event Planning"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <h2 style={{
              fontSize: "2rem",
              marginBottom: "20px"
            }}>
              Ready to Create Your <span style={{ color: "gold" }}>Dream Event</span>?
            </h2>
            
            <p style={{
              color: "#ccc",
              marginBottom: "30px",
              fontSize: "1.1rem"
            }}>
              Let's bring your vision to life with our expertise
            </p>

            <Link to="/contact">
              <button className="glowing-element pulse-element" style={{
                padding: "15px 50px",
                fontSize: "1.1rem",
                background: "linear-gradient(135deg, gold, #ffa500)",
                color: "black",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                Get Started Today ✦
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;