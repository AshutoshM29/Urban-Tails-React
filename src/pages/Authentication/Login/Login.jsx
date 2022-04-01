import '../authentication.css'
import {login} from '../../../assets/images'
import { Link } from 'react-router-dom'

function Login() {
    return (
      <div> <main class="main-authentication">
      <section>
          <form class="form-authentication">
              <h2 class="form-title">Log In</h2>
              <label class="label" for="email">Email Address</label>
              <input class="input-outline" type="email" name="email" placeholder="urbantails.com" required />

              <label class="label" for="password">Password</label>
              <input class="input-outline" type="password" name="password" placeholder="********" required />

              <div class="section-tnc">
                  <label for="tnc"><input type="checkbox" name="tnc" /><span class="tnc"> Remember Me</span></label>
                  <Link to="/Forget"><span class="span-link">Forget password</span></Link>

              </div>

              <div class="section-btn-authentication">
                  <button class="btn btn-primary-solid">
                      <i class="fas fa-sign-in-alt"></i> Log In
                  </button>
                  <p>Don't have an account! <Link class="underline" to="/Signup"><span class="span-link"> Create Account</span></Link></p>
              </div>
          </form>
      </section>
      <div class="hero-login">
          <img src={login} alt="Log In" />
      </div>

  </main></div>
    )
  }
  
  export {Login}