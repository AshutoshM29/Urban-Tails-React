import '../authentication.css'
import {login} from '../../../assets/images'
import { Link } from 'react-router-dom'

function Login() {
return (
<div>
    <main className="main-authentication">
        <section>
            <form className="form-authentication">
                <h2 className="form-title">Log In</h2>
                <label className="label" htmlFor="email">Email Address</label>
                <input className="input-outline" type="email" id='email' name="email" placeholder="urbantails.com"
                    required />

                <label className="label" htmlFor="password">Password</label>
                <input className="input-outline" type="password" id='password' name="password" placeholder="********"
                    required />

                <div className="section-tnc">
                    <label htmlFor="tnc"><input type="checkbox" id='tnc' name="tnc" /><span className="tnc"> Remember
                            Me</span></label>
                    <Link to="/Forget"><span className="span-link">Forget password</span></Link>

                </div>

                <div className="section-btn-authentication">
                    <button className="btn btn-primary-solid">
                        <i className="fas fa-sign-in-alt"></i> Log In
                    </button>
                    <p>Don't have an account!
                        <Link className="underline" to="/Signup"><span className="span-link"> Create Account</span>
                        </Link>
                    </p>
                </div>
            </form>
        </section>
        <div className="hero-login">
            <img src={login} alt="Log In" />
        </div>

    </main>
</div>
)
}

export {Login}