import '../authentication.css'
import {signup, facebook, google, metamask} from '../../../assets/images'
import { Link } from 'react-router-dom'

function Signup() {
return (
<div>
    <main className="main-authentication">
        <section>
            <form className="form-authentication">
                <h2 className="form-title">Sign Up</h2>
                <label className="label" htmlFor="username">First Name</label>
                <input className="input-outline" type="text" id='name' name="name" placeholder="Urban" required />

                <label className="label" htmlFor="username">Last Name</label>
                <input className="input-outline" type="text" id='name' name="name" placeholder="Tails" required />

                <label className="label" htmlFor="email">Enter your email</label>
                <input className="input-outline" type="email" id='email' name="email" placeholder="urbantails.com"
                    required />

                <label className="label" htmlFor="username">Create Password</label>
                <input className="input-outline" type="password" id='password' name="password" placeholder="password"
                    required />

                <label className="label" htmlFor="password">Confirm Password</label>
                <input className="input-outline" type="password" id='password' name="password" placeholder="********"
                    required />

                <div className="section-tnc">
                    <label id="checkbox-tnc" htmlFor="tnc"><input type="checkbox" name="tnc" id="checkbox-tnc" /><span
                            className="tnc"> I accept all the terms & conditions</span></label>
                </div>

                <div className="section-btn-authentication">
                    <button className="btn btn-primary-solid">Signup</button>
                </div>

                <p className="body-cp-sm">Signup using </p>
                <div className="section-icons">
                    <svg className="icons-signup" src={google} alt="google logo" />
                    <svg className="icons-signup" src={facebook} alt="facebook logo" />
                    <svg className="icons-signup" src={metamask} alt="metamask logo" />
                </div>

                <p>Already have an account!
                    <Link className="underline" to="/Login"><span className="span-link">Log
                        In</span></Link>
                </p>

            </form>
        </section>
        <div className="hero-signup">
            <img src={signup} alt="signup" />
        </div>
    </main>
</div>
)
}

export {Signup}