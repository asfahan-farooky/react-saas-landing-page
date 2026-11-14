
function Pricing() {
    return(
        <>
            <style>{`
                .pricing{
                text-align: center;
                padding: 80px 7%;
                background: #e8edf9;
                }

                .pricing-heading{
                margin-bottom: 45px;
                }

                .pricing-heading h1 {
                font-size: 50px;
                color: #111827;
                margin-bottom: 12px;
                }

                .pricing-heading p{
                font-size: 16px;
                color: #666;
                }
                
                .pricing-container{
                display: flex;
                justify-content: center;
                gap: 20px;
                }

                .pricing-card{
                border: 1px solid #373738;
                padding: 30px 25px;
                flex: 1;
                border-radius: 15px;
                transition: 0.3s;
                padding-bottom: 60px;
                width: 100%;
                }

                .pricing-card:hover{
                transform: translateY(-2px);
                box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                }

                .pricing-card ul{
                list-style: none;
                text-align: left;
                gap: 5px;
                margin-bottom: 30px;
                }

                .pricing-card h3{
                font-size: 35px;
                color: #f3b21a;
                margin-bottom: 10px;
                }

                .pricing-card h4 {
                font-size: 20px;
                margin-bottom: 7px;
                }

                .pricing-card p {
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 5px;
                }

                .pricing-btn{
                text-decoration: none;
                color: white;
                background: green;
                padding: 14px 30px;
                margin-top: 20px;
                border-radius: 8px;
                transition: 0.3s;
                }

                @media (max-width: 768px){
                .pricing-container{
                flex-direction: column;
                }

                
                }

            `}</style>
            <section className="pricing" id="pricing">
                <div className="pricing-heading">
                    <h1>Chose your Plane</h1>
                    <p>Selrct your perfect plan for your growth and business.</p>
                </div>
                <div className="pricing-container">
                    <div className="pricing-card">
                        <h3>Basic Plan</h3>
                        <h4>₹499 <span>/ month</span></h4>
                        <p>Perfect for individual and begginers.</p>
                        <ul>
                            <li>1 Website</li>
                            <li>Basic Features</li>
                            <li>Email Support</li>
                            <li>Limited Storage</li>
                        </ul>
                        <a href="#contect"  className="pricing-btn">
                            Choose Basic
                        </a>
                    </div>
                    <div className="pricing-card">
                        <h3>Pro Plan</h3>
                        <h4>₹999 <span>/ month</span></h4>
                        <p>Perfect for your business growth.</p>
                        <ul>
                            <li>5 Website</li>
                            <li>All Basic Features</li>
                            <li>Priority Support</li>
                            <li>Advance Features</li>
                        </ul>
                        <a href="#contect" className="pricing-btn">
                            Choose Pro
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;