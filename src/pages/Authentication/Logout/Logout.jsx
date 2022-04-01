import '../authentication.css'
import {logout} from '../../../assets/images'
import { Link } from 'react-router-dom'

function Logout() {
    return (
      <div> <main class="main-authentication">
      <section>
          <form class="form-authentication">
                  <h2 class="form-title">Logged Out</h2>
                  <p class="body-cp-md">You have been successfully logged out !</p>
                  <div class="section-btn-authentication">
                      <p>Already have an account!! <Link class="underline" to="/Login"><span class="span-link"> Log In</span></Link></p>
                  </div>
          </form>
      </section>
      <div class="hero-logout">
          <img src={logout} alt="Log In" />
      </div>
  </main></div>
    )
  }
  
  export {Logout}