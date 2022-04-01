import '../authentication.css'
import {signup, facebook, google, metamask} from '../../../assets/images'
import { Link } from 'react-router-dom'

function Signup() {
    return (
      <div><main class="main-authentication">
      <section>
          <form class="form-authentication">
              <h2 class="form-title">Sign Up</h2>
              <label class="label" for="username">First Name</label>
              <input class="input-outline" type="text" name="name" placeholder="Urban" required />

              <label class="label" for="username">Last Name</label>
              <input class="input-outline" type="text" name="name" placeholder="Tails" required />

              <label class="label" for="email">Enter your email</label>
              <input class="input-outline" type="email" name="email" placeholder="urbantails.com" required />

              <label class="label" for="username">Create Password</label>
              <input class="input-outline" type="password" name="password" placeholder="password" required />

              <label class="label" for="password">Confirm Password</label>
              <input class="input-outline" type="password" name="password" placeholder="********" required />

              <div class="section-tnc">
                  <label id="checkbox-tnc" for="tnc"><input type="checkbox" name="tnc" id="checkbox-tnc" /><span class="tnc"> I accept all the terms & conditions</span></label>
              </div>

              <div class="section-btn-authentication">
                  <button class="btn btn-primary-solid">Signup</button>
              </div>

              <p class="body-cp-sm">Signup using </p>
              <div class="section-icons">
                  <svg class="icons-signup" src={google} alt="google logo" />
                  <svg class="icons-signup" src={facebook} alt="facebook logo" />
                  <svg class="icons-signup" src={metamask} alt="metamask logo" />
              </div>

              <p>Already have an account! <Link class="underline" to="/Login"><span class="span-link">Log
                          In</span></Link></p>

          </form>
      </section>
      <div class="hero-signup">
          <img src={signup} alt="signup" />
      </div>
  </main></div>
    )
  }
  
  export {Signup}