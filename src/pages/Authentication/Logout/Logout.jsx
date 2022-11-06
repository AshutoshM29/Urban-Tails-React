import '../authentication.css'
import React from 'react';
import {logout} from '../../../assets/images'
import { Link } from 'react-router-dom'
import { Footer, Navigation } from '../../../components';

function Logout() {
return (
<div>
  <Navigation />
    <main className="main-authentication">
        <section>
          <form className="form-authentication">
            <h2 className="form-title">Logged Out</h2>
            <p className="body-cp-md">You have been successfully logged out !</p>
            <div className="section-btn-authentication">
              <p>Already have an account!!
                <Link className="underline" to="/Login"><span className="span-link"> Log In</span></Link>
              </p>
            </div>
          </form>
        </section>
        <div className="hero-logout">
          <img src={logout} alt="Log In" />
        </div>
    </main>
    <Footer />
</div>
)
}
export {Logout}