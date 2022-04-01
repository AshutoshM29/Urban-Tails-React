import '../authentication.css'
import {forget} from '../../../assets/images'
import { Link } from 'react-router-dom'

function Forget() {
    return (
      <div>  <main class="main-authentication">
      <section>
          <form class="form-authentication">
              <h2 class="form-title">Forget Password</h2>
              <label class="label" for="email">Enter your email address</label>
              <input class="input-outline" type="email" name="email" placeholder="urbantails.com" required />
              <p>OR</p>
              <label class="label" for="mobile-no">Enter your Mobile Number</label>
              <input class="input-outline" type="number" name="mobile-no" placeholder="0123456789" required />

              <div class="section-btn-authentication">
                  <button class="btn btn-primary-solid">
                      Submit
                  </button>
                  <p>Remember your password?<Link class="underline" to="/Login"><span class="span-link"> Cancel</span></Link></p>
              </div>
          </form>
      </section>
      <div class="hero-login">
          <img src={forget} alt="Forgot Password" />
      </div>

  </main></div>
    )
  }
  
  export {Forget}