import React from 'react';
import '../authentication.css'
import {forget} from '../../../assets/images'
import { Link } from 'react-router-dom'
import { Footer, Navigation } from '../../../components';

function Forget() {
return (
<div>
    <Navigation />
    <main className="main-authentication">
        <section>
            <form className="form-authentication">
                <h2 className="form-title">Forget Password</h2>
                <label className="label" htmlFor="email">Enter your email address</label>
                <input className="input-outline" type="email" id='email' name="email" placeholder="urbantails.com"
                    required />
                <p>OR</p>
                <label className="label" htmlFor="mobile-no">Enter your Mobile Number</label>
                <input className="input-outline" type="number" id='mobile-no' name="mobile-no" placeholder="0123456789"
                    required />
                <div className="section-btn-authentication">
                    <button className="btn btn-primary-solid">
                        Submit
                    </button>
                    <p>Remember your password?
                        <Link className="underline" to="/Login"><span className="span-link"> Cancel</span></Link>
                    </p>
                </div>
            </form>
        </section>
        <div className="hero-login">
            <img src={forget} alt="Forgot Password" />
        </div>
    </main>
    <Footer />
</div>
)
}

export {Forget}