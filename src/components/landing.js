import React from "react";
import './landing.css'

function Landing(){
    return(
    <body>
        
        <section class="hero">
            <div class="hero-content">
                <img src="https://cdn.discordapp.com/attachments/1215849410555150447/1216234168078569572/output-onlinepngtools.png?ex=65ffa556&is=65ed3056&hm=34c5142e16694530b619f8689f8fc7de54be39abe435180187e4609fb2ca740c&" alt="Your Logo" class="logo"></img>
                <h1>Welcome to SoilMates</h1>
                <p>The best AI-powered gardening buddy to have.</p>
                <a href="#" class="hero-cta">Get Started</a>
            </div>
        </section>

        <section class="features">
            <h2>Features</h2>
            <div class="feature-list">
                <div class="feature">
                    <h3>Accessible Plant Database</h3>
                    <p>Find the perfect plants effortlessly with our intuitive search feature. Simply enter your criteria, and we'll do the rest!
</p>
                </div>
                <div class="feature">
                    <h3>Straightforward</h3>
                    <p>Discover the joy of gardening with our effortlessly intuitive platform. Simple browsing, stunning results
</p>
                </div>
                <div class="feature">
                    <h3>AI-Powered Expertise</h3>
                    <p>Get expert gardening advice instantly with our AI chatbot! Say goodbye to uncertainties and hello to hassle-free gardening.
</p>
                </div>
            </div>
        </section>

    </body>
    )
}

export default Landing