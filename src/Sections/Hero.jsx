import React from "react";

function Hero() {
  return(
    <>
      <style>{`
        .hero{
        display: flex;
        min-height: 550px;
        background: #d3dafa;
        width: 100%;
        padding: 60px 7%;
        gap: 40px;
        justify-content: space-between;
        }

        .hero-image{
        height: 550px;
        flex: 1;
        overflow: hidden;
        }

        .hero-image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
        text-align: center;
        }

        .hero-content h1{
        font-size: 50px;
        line-height: 1.2;
        color: #111827;
        margin-bottom: 20px;
        }

        .hero-content p{
        font-size: 17px;
        line-height: 1.7;
        color: #555;
        margin-bottom: 25px;
        max-width: 500px;
        }

        .hero-btn{
        padding: 14px 30px;
        background: green;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        transition: 0.3s;
        }

        .hero-btn:hover{
        background: darkgreen;
        transform: translateY(-3px);
        }

        @media (max-width: 768px) {
        .hero{
        flex-direction: column;
        text-align: center;
        padding: 45px 20px;
        }

        .hero-content h1{
        font-size: 36px
        }}

      `}</style>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Built Your Dream Website</h1>

          <p>
            Create beautiful and modern websites
            with creative ideas and powerful
            technology. Take your business to
            the next level with us.
          </p>

          <a href="#features" className="hero-btn">Get Strted →</a>
        </div>
        <div className="hero-image">
            <img src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg" alt="Image" />
        </div>
      </section>
    </>
  );
}

export default Hero;