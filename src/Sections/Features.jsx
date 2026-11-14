import React from "react";

function Features() {
    return(
        <>
            <style>{`
                .features{
                background: #ffffff;
                text-align: center;
                width: 100%;
                padding: 80px 7%;
                }

                .features-heading h1{
                font-size: 50px;
                margin-bottom: 12px;
                color: #111827;
                }

                .features-heading p{
                font-size: 17px;
                color: #666666;
                }

                .features-heading{
                margin-bottom: 45px;
                }

                .features-container{
                display: flex;
                justify-content: center;
                align-items: stretch;
                gap: 25px;
                }

                .features-card{
                border: 1px solid #e5e7eb;
                border-radius: 15px;
                padding: 30px 25px;
                flex: 1;
                transition: 0.3s;
                }

                .features-card h3{
                font-size: 21px;
                color: #111827;
                margin-bottom: 12px;
                }

                .features-card p{
                font-size: 15px;
                line-height: 1.6;
                color: #666666;
                }

                .features-card:hover{
                transform: translateY(-4px);
                box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                }

                .features-icon{
                margin-bottom: 20px;
                font-size: 40px;
                }

                @media (max-width: 768px) {
                .features{
                padding: 55px 20px;
                }

                .features-heading h1{
                font-size: 29px;
                }

                .features-container{
                flex-direction: column;
                gap: 30px;
                }

                .features-card{
                width: 100%;
                }
                }

            `}</style>
            <section className="features" id="features">
                <div className="features-heading">
                    <h1>Our Features</h1>
                    <p>Why choose us for your next project?</p>
                </div>
                <div className="features-container">
                    <div className="features-card">
                        <div className="features-icon">⚡</div>
                        <h3>Fast Performence</h3>
                        <p>Fast loading and smooth website experience.</p>
                    </div>
                    <div className="features-card">
                        <div className="features-icon">📱</div>
                        <h3>Responsive Design</h3>
                        <p>Perfect layout on mobile, tablet and desktop.</p>
                    </div>
                    <div className="features-card">
                        <div className="features-icon">🛡️</div>
                        <h3>Sequre Website</h3>
                        <p>Modern practices for a safer website.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;