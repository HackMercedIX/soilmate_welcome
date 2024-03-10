import React from "react";
import './landing.css'

function Landing(){
    return(
    <body>
        <header>
            <nav class="navbar">
                <div class="logo">AI Chat</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#" class="cta">Try Now</a></li>
                </ul>
            </nav>
        </header>
        <section class="hero">
            <div class="hero-content">
                <h1>Welcome to AI Chat</h1>
                <p>The next generation of AI communication.</p>
                <a href="#" class="hero-cta">Get Started</a>
            </div>
        </section>
        <section class="features">
            <h2>Features</h2>
            <div class="feature-list">
                <div class="feature">
                    <h3>Intelligent Conversations</h3>
                    <p>Experience smarter dialogues with AI that understands context and nuances.</p>
                </div>
                <div class="feature">
                    <h3>24/7 Availability</h3>
                    <p>Your AI companion is available anytime to assist with inquiries, tasks, or just a chat.</p>
                </div>
                <div class="feature">
                    <h3>Privacy First</h3>
                    <p>We prioritize your privacy and ensure all conversations are securely managed.</p>
                </div>
            </div>
        </section>
    </body>
    )
}

export default Landing