
function About() {
    return(
        <>
            <style>{`
                .about{
                display: flex;
                justify-content: space-between;
                padding: 80px 7%;
                width: 100%;
                gap: 50px;
                background: #f8fafc;
                align-items: center;
                }

                .about-image{
                flex: 1;
                }

                .about-image img{
                width: 100%;
                max-width: 500px;
                height: 300px;
                object-fit: cover;
                border-redius: 20px;
                display: block;
                over-flow: hidden;
                }

                .about-content{
                flex: 1;
                }

                .about-content h1{
                font-size: 45px
                color: #111827;
                margin-bottom: 20px;
                }

                .about-content p{
                font-size: 17px;
                color: #555;
                line-height: 1.8;
                margin-bottom: 25px;
                }

                .about-content button{
                padding: 15px 20px;
                border-radius: 8px;
                background: green;
                transition: 0.3s;
                border: none;
                color: white;
                font-size: 15px;
                }

                .about-content button:hover{
                background: darkgreen;
                transform: translateY(-3px);
                }

                .how-it-work{
                text-align: center;
                padding: 80px 7%;
                }

                .how-heading{
                margin-bottom: 45px;
                }

                .how-heading h1{
                font-size: 50px;
                margin-bottom: 12px;
                color: #111827;
                }

                .how-heading p{
                font-size: 16px;
                color: #666;
                }

                .how-container{
                display: flex;
                justify-content: center;
                gap: 20px;
                }

                .how-card{
                border: 1px solid #e5e7eb;
                border-radius: 15px;
                padding: 30px 25px;
                flex: 1;
                transition: 0.3s;
                background: #f8fafc
                }

                .how-card span{
                font-size: 35px;
                color: green;
                display: inline-block;
                font-weight: bold;
                margin-bottom: 15px;
                }

                .how-card h3{
                font-size: 20px;
                margin-bottom: 12px;
                color: #111827;
                }

                .how-card p{
                font-size: 15px;
                color: #666;
                line-height: 1.6;
                }

                .how-card:hover{
                transform: translateY(-4px);
                box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                }

                @media (max-width: 768px) {
                .about{
                flex-direction: column;
                padding: 50px 20px;
                gap: 30px;
                width: 100%;
                }

                .about-content h2{
                font-size: 30px;
                }

                .about-content p {
                font-size: 15px;
                }

                .how-it-work{
                padding: 55px 20px;
                }

                .how-heading h1{
                font-size: 30px;
                }

                .how-card{
                width: 100%;
                }

                .how-container{
                flex-direction: column;
                gap: 20px;
                }
                }

            `}</style>
            <section className="about" id="about">
                <div className="about-image">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.YgVEBi1DmpH15Ose-WkMrwHaEJ?r=0&pid=Api&h=220&P=0" alt="Our aboout image" />
                </div>
                <div className="about-content">
                    <h1>About</h1>
                    <p>This is our about section of the website.</p>
                    <button>Learn more →</button>
                </div>
            </section>
            <section className="how-it-work">
                <div className="how-heading">
                    <h1>How its Work</h1>
                    <p>Look at how we are work for growing your website.</p>
                </div>
                <div className="how-container">
                <div className="how-card">
                    <span>01</span>
                    <h3>Plan</h3>
                    <p>First of all we are planing how we can improve your website.</p>
                </div>
                <div className="how-card">
                    <span>02</span>
                    <h3>Built</h3>
                    <p>After proper planing we are work on your website and then design and make it.</p>
                </div>
                <div className="how-card">
                    <span>03</span>
                    <h3>Deploy</h3>
                    <p>After all testing we are lonched aor deploy your website.</p>
                </div>
                </div>
            </section>
        </>
    );
}

export default About;