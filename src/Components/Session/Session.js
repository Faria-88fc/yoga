import React from 'react';
import './Session.css';

const Session = () => {
    return (
        <div>
            <div>
            <img className='img-fluid w-100 session-img' src="https://dwellyogastudio.com/wp-content/uploads/2018/07/Yoga-16-1300x311.png" alt="" />
            
            </div>
            <div className='container mx-auto
            mt-1 rounded info'>
                <h2 className='text-center'>Pricing & Session</h2>
                <h4 className='py-4'>ADULT CLASSES</h4>
                <p>first time visitor $15</p>
                <p>Unlimited MemberShip $200</p>
                <small>The best value for those wanting to practice 2-3 times a week. This is an auto-draft contract that can be canceled anytime with a 30-day notice.</small>
                <p>Limited Membership $111/mo</p>
                <small>This membership is limited to 4 classes/month. Classes do not roll over if not used.</small>

                <h4 className='py-4'>STUDENT PACKAGE</h4>
                <p>first time visitor $10</p>
                <p>Unlimited Membership | $119/mo</p>
                <small>
                The best value for those wanting to practice 2-3 times a week. This is an auto-draft contract that can be canceled anytime with a 30-day notice. 
                </small>
                <p>Limited Membership | $59/mo</p>
                <small>This membership is limited to 4 classes/month. Classes do not roll over if not used.</small>

                <h3 className='py-4'>Packages</h3>
                <p>4 Session / expires 2 months – $119</p>
                <p>8 Session / expires 3 months – $225</p>
                <p>12 Session / expires 4 months – $315</p>

                <h3 className='py-4'>MemberShips</h3>
                <p>4 Sessions / Month – $99</p>
                <p >8 Sessions / Month – $189</p>

                <h5 className='pb-5'><small className='click'>Click here</small> to book your desirable package</h5>

            </div>
        </div>
    );
};

export default Session;