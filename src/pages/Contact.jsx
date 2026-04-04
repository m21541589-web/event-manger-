import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Mouse move for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (formData.phone && !/^[\d\s-+()]{10,}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 2000);
    } else {
      setFormErrors(errors);
      
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const contactInfo = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      title: "Visit Us",
      details: ["Bangla Gogera", "Okara, Punjab", "Pakistan"],
      action: "Get Directions",
      link: "https://maps.google.com/?q=Bangla+Gogera+Okara+Punjab+Pakistan",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=400&h=300&fit=crop"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
      title: "Call Us",
      details: ["+92 300 1234567", "+92 300 7654321", "24/7 Support"],
      action: "Call Now",
      link: "tel:+923001234567",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      title: "Email Us",
      details: ["info@eliteevents.com", "support@eliteevents.com", "bookings@eliteevents.com"],
      action: "Send Email",
      link: "mailto:info@eliteevents.com",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png",
      title: "Business Hours",
      details: ["Mon-Fri: 9am - 8pm", "Sat: 10am - 6pm", "Sun: 12pm - 5pm"],
      action: "Emergency: 24/7",
      link: "#",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "How soon should I book my event?",
      answer: "We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller gatherings.",
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! We offer both in-person and virtual consultations via Zoom or Google Meet to accommodate your schedule.",
      icon: "https://cdn-icons-png.flaticon.com/512/1903/1903317.png"
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 30+ days before the event receive a full refund. 15-29 days: 50% refund. Less than 15 days: no refund.",
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827372.png"
    },
    {
      question: "Do you travel for events?",
      answer: "Absolutely! We specialize in destination events and have experience planning events worldwide.",
      icon: "https://cdn-icons-png.flaticon.com/512/864/864350.png"
    }
  ];

  const socialLinks = [
    { icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", name: "Facebook", url: "#", color: "#1877f2", followers: "50K" },
    { icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png", name: "Instagram", url: "#", color: "#e4405f", followers: "100K" },
    { icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png", name: "Twitter", url: "#", color: "#1da1f2", followers: "30K" },
    { icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png", name: "Pinterest", url: "#", color: "#bd081c", followers: "40K" },
    { icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png", name: "LinkedIn", url: "#", color: "#0a66c2", followers: "25K" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png", name: "TikTok", url: "#", color: "#000000", followers: "80K" }
  ];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      background: "#0a0a0a",
      color: "white",
      overflowX: "hidden",
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

          @keyframes borderPulse {
            0%, 100% { border-color: gold; }
            50% { border-color: #ffa500; }
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

          .contact-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .contact-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent);
            transition: left 0.5s;
          }

          .contact-card:hover::before {
            left: 100%;
          }

          .contact-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(255,215,0,0.2);
          }

          .input-field {
            transition: all 0.3s ease;
            background: rgba(255,255,255,0.05);
            border: 2px solid transparent;
          }

          .input-field:hover {
            background: rgba(255,255,255,0.08);
          }

          .input-field:focus {
            outline: none;
            border-color: gold;
            box-shadow: 0 0 20px rgba(255,215,0,0.3);
            background: rgba(255,255,255,0.1);
          }

          .input-field.error {
            border-color: #ff4444;
            animation: pulse 0.5s ease;
          }

          .submit-button {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .submit-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }

          .submit-button:hover::before {
            left: 100%;
          }

          .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px gold;
          }

          .submit-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .social-icon {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
          }

          .faq-item {
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .faq-item:hover {
            background: rgba(255,215,0,0.05);
          }

          .success-message {
            animation: slideInUp 0.5s ease forwards;
          }

          .loading-spinner {
            border: 4px solid rgba(255,215,0,0.1);
            border-top: 4px solid gold;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: rotate 1s linear infinite;
          }

          .map-container {
            transition: all 0.3s ease;
          }

          .map-container:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 40px gold;
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
      <div style={{
        position: "relative",
        zIndex: 1
      }}>
        {/* Hero Section with Full Width Background Image */}
        <div style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}>
          {/* Full Width Background Image */}
          <div className="hero-background" style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)"
            }}></div>
          </div>

          {/* Hero Content */}
          <div style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            textAlign: "center",
            padding: "100px 20px",
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: "transform 0.1s ease-out"
          }}>
            {/* Hero Image */}
            <div className="floating-element" style={{
              width: "180px",
              height: "180px",
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
                alt="Contact Us"
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
              padding: "10px 30px",
              background: "rgba(255,215,0,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid gold",
              borderRadius: "40px",
              marginBottom: "30px"
            }}>
              <span style={{ color: "gold", letterSpacing: "2px" }}>✦ GET IN TOUCH ✦</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "800",
              marginBottom: "20px",
              lineHeight: "1.2",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}>
              Contact <span style={{
                background: "linear-gradient(135deg, gold, #ffa500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Us</span>
            </h1>

            {/* Description */}
            <p style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#ccc",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "40px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
            }}>
              Have a question or want to plan your next event? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="floating-element" style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "0.8rem",
            letterSpacing: "2px",
            writingMode: "vertical-rl",
            opacity: 0.5,
            zIndex: 2
          }}>
            SCROLL
          </div>
        </div>

        {/* Rest of the content */}
        <div style={{
          maxWidth: "1400px",
          margin: "80px auto",
          padding: "0 20px"
        }}>
          {/* Contact Info Cards with Images */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginBottom: "60px"
          }}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-card"
                style={{
                  padding: "30px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,215,0,0.1)",
                  textAlign: "center",
                  animation: `slideInUp 0.5s ease ${index * 0.1}s forwards`,
                  opacity: 0,
                  overflow: "hidden"
                }}
              >
                {/* Card Background Image */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.1,
                  zIndex: 0
                }}>
                  <img 
                    src={info.image}
                    alt={info.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="floating-element" style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    background: "rgba(255,215,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img 
                      src={info.icon}
                      alt={info.title}
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: "1.5rem",
                    color: "gold",
                    marginBottom: "15px"
                  }}>
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} style={{
                      color: "#ccc",
                      marginBottom: "5px",
                      fontSize: "0.95rem"
                    }}>
                      {detail}
                    </p>
                  ))}
                  <a
                    href={info.link}
                    style={{
                      display: "inline-block",
                      marginTop: "15px",
                      padding: "8px 20px",
                      background: "rgba(255,215,0,0.1)",
                      border: "1px solid gold",
                      borderRadius: "20px",
                      color: "gold",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "gold";
                      e.target.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255,215,0,0.1)";
                      e.target.style.color = "gold";
                    }}
                  >
                    {info.action} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Form Section */}
          <div ref={formRef} style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "40px",
            marginBottom: "60px"
          }}>
            {/* Contact Form */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: "30px",
              padding: "40px",
              border: "1px solid rgba(255,215,0,0.2)"
            }}>
              <h2 style={{
                fontSize: "2rem",
                marginBottom: "30px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Message" style={{ width: "30px", height: "30px" }} />
                Send us a Message
              </h2>

              {submitSuccess && (
                <div className="success-message" style={{
                  background: "rgba(0,255,0,0.1)",
                  border: "1px solid #00ff00",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>✅</span>
                  <div>
                    <h4 style={{ color: "#00ff00", marginBottom: "5px" }}>Message Sent Successfully!</h4>
                    <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "20px"
                }}>
                  {/* Name Field */}
                  <div>
                    <label style={{
                      display: "block",
                      color: "gold",
                      marginBottom: "8px",
                      fontSize: "0.9rem"
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      placeholder="Rai Mudassar"
                      className={`input-field ${formErrors.name ? 'error' : ''}`}
                      style={{
                        width: "100%",
                        padding: "15px",
                        background: activeField === "name" ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.05)",
                        border: `2px solid ${formErrors.name ? '#ff4444' : (activeField === "name" ? 'gold' : 'transparent')}`,
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "1rem"
                      }}
                    />
                    {formErrors.name && (
                      <p style={{ color: "#ff4444", fontSize: "0.8rem", marginTop: "5px" }}>
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label style={{
                      display: "block",
                      color: "gold",
                      marginBottom: "8px",
                      fontSize: "0.9rem"
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      placeholder="raimudassar820@gmail.com"
                      className={`input-field ${formErrors.email ? 'error' : ''}`}
                      style={{
                        width: "100%",
                        padding: "15px",
                        background: activeField === "email" ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.05)",
                        border: `2px solid ${formErrors.email ? '#ff4444' : (activeField === "email" ? 'gold' : 'transparent')}`,
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "1rem"
                      }}
                    />
                    {formErrors.email && (
                      <p style={{ color: "#ff4444", fontSize: "0.8rem", marginTop: "5px" }}>
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{
                    display: "block",
                    color: "gold",
                    marginBottom: "8px",
                    fontSize: "0.9rem"
                  }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField(null)}
                    placeholder="+92 3466614399"
                    className={`input-field ${formErrors.phone ? 'error' : ''}`}
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: activeField === "phone" ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.05)",
                      border: `2px solid ${formErrors.phone ? '#ff4444' : (activeField === "phone" ? 'gold' : 'transparent')}`,
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "1rem"
                    }}
                  />
                  {formErrors.phone && (
                    <p style={{ color: "#ff4444", fontSize: "0.8rem", marginTop: "5px" }}>
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{
                    display: "block",
                    color: "gold",
                    marginBottom: "8px",
                    fontSize: "0.9rem"
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField("subject")}
                    onBlur={() => setActiveField(null)}
                    placeholder="What is this regarding?"
                    className={`input-field ${formErrors.subject ? 'error' : ''}`}
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: activeField === "subject" ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.05)",
                      border: `2px solid ${formErrors.subject ? '#ff4444' : (activeField === "subject" ? 'gold' : 'transparent')}`,
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "1rem"
                    }}
                  />
                  {formErrors.subject && (
                    <p style={{ color: "#ff4444", fontSize: "0.8rem", marginTop: "5px" }}>
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: "30px" }}>
                  <label style={{
                    display: "block",
                    color: "gold",
                    marginBottom: "8px",
                    fontSize: "0.9rem"
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    placeholder="Tell us about your event or inquiry..."
                    rows="6"
                    className={`input-field ${formErrors.message ? 'error' : ''}`}
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: activeField === "message" ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.05)",
                      border: `2px solid ${formErrors.message ? '#ff4444' : (activeField === "message" ? 'gold' : 'transparent')}`,
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "1rem",
                      resize: "vertical"
                    }}
                  />
                  {formErrors.message && (
                    <p style={{ color: "#ff4444", fontSize: "0.8rem", marginTop: "5px" }}>
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: "linear-gradient(135deg, gold, #ffa500)",
                    color: "black",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message ✦
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              {/* Map */}
              <div className="map-container" style={{
                background: "rgba(255,255,255,0.02)",
                borderRadius: "30px",
                padding: "30px",
                border: "1px solid rgba(255,215,0,0.2)",
                marginBottom: "30px"
              }}>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Location" style={{ width: "25px", height: "25px" }} />
                  Our Location - Bangla Gogera, Okara
                </h3>
                
                <div style={{
                  height: "300px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Google Maps Embed for Bangla Gogera, Okara */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27180.592866542825!2d73.816272!3d30.809553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2c8f8e8a8e8d%3A0x7e8e8e8e8e8e8e8e!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "brightness(0.8) contrast(1.2)"
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bangla Gogera Okara Map"
                  ></iframe>
                  
                  {/* Overlay Pin */}
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    pointerEvents: "none",
                    zIndex: 1
                  }}>
                    <div className="pulse-element" style={{
                      width: "60px",
                      height: "60px",
                      background: "gold",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                      boxShadow: "0 0 20px rgba(255,215,0,0.5)"
                    }}>
                      <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Pin" style={{ width: "30px", height: "30px" }} />
                    </div>
                    <p style={{ 
                      color: "white", 
                      fontWeight: "bold",
                      background: "rgba(0,0,0,0.7)",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9rem"
                    }}>
                      Bangla Gogera, Okara
                    </p>
                  </div>
                </div>
                
                {/* Location Details */}
                <div style={{
                  marginTop: "15px",
                  padding: "15px",
                  background: "rgba(255,215,0,0.05)",
                  borderRadius: "15px",
                  textAlign: "center"
                }}>
                  <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                    📍 Bangla Gogera, Okara, Punjab, Pakistan
                  </p>
                  <p style={{ color: "gold", fontSize: "0.85rem", marginTop: "5px" }}>
                    Easy access from main GT Road
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div style={{
                background: "rgba(255,255,255,0.02)",
                borderRadius: "30px",
                padding: "30px",
                border: "1px solid rgba(255,215,0,0.2)"
              }}>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Social" style={{ width: "25px", height: "25px" }} />
                  Connect With Us
                </h3>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "15px"
                }}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{
                        padding: "15px",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "10px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        border: "1px solid rgba(255,215,0,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <img src={social.icon} alt={social.name} style={{ width: "25px", height: "25px" }} />
                      <div>
                        <div style={{ color: "white", fontWeight: "bold", fontSize: "0.9rem" }}>
                          {social.name}
                        </div>
                        <div style={{ color: "gold", fontSize: "0.8rem" }}>
                          {social.followers}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section with Icons */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            borderRadius: "30px",
            padding: "40px",
            border: "1px solid rgba(255,215,0,0.2)",
            marginBottom: "60px"
          }}>
            <h2 style={{
              fontSize: "2rem",
              marginBottom: "30px",
              textAlign: "center"
            }}>
              Frequently Asked <span style={{ color: "gold" }}>Questions</span>
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "20px"
            }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item"
                  style={{
                    padding: "20px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255,215,0,0.1)"
                  }}
                >
                  <h4 style={{
                    color: "gold",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <img src={faq.icon} alt="FAQ" style={{ width: "25px", height: "25px" }} />
                    {faq.question}
                  </h4>
                  <p style={{ color: "#ccc", lineHeight: "1.6", marginLeft: "35px" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            textAlign: "center",
            padding: "60px 20px",
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
              <div style={{
                width: "120px",
                height: "120px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid gold"
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&h=200&fit=crop"
                  alt="Contact"
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
                Prefer to <span style={{ color: "gold" }}>Call or Email</span>?
              </h2>
              
              <p style={{
                color: "#ccc",
                fontSize: "1.2rem",
                maxWidth: "600px",
                margin: "0 auto 30px",
                lineHeight: "1.8"
              }}>
                We're available 24/7 to answer your questions and start planning your dream event
              </p>

              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap"
              }}>
                <a href="tel:+923001234567">
                  <button className="pulse-element" style={{
                    padding: "15px 40px",
                    fontSize: "1.1rem",
                    background: "transparent",
                    color: "gold",
                    border: "2px solid gold",
                    borderRadius: "50px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "gold";
                    e.target.style.color = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "gold";
                  }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Call" style={{ width: "20px", height: "20px" }} />
                    Call Us Now
                  </button>
                </a>

                <a href="mailto:info@eliteevents.com">
                  <button className="glowing-element" style={{
                    padding: "15px 40px",
                    fontSize: "1.1rem",
                    background: "linear-gradient(135deg, gold, #ffa500)",
                    color: "black",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 10px 30px rgba(255,215,0,0.3)"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style={{ width: "20px", height: "20px" }} />
                    Email Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;