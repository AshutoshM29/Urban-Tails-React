import { Link } from 'react-router-dom'
import '../Homepage/homepage.css'

import {
    heroPets,
    pet,
    dogTreat,
    dogLeash,
    dogToys,
    dogGrooming,
    dogBedding,
    dogClothing,
    catClothing,
    catTreat,
    catToys,
    catLitter,
    catGrooming,
    catBedding,
    essPuppy,
    essKitten,
    essSmall,
    valueQty,
    valueTrust,
    valueSprt,
    valueDlry,
    valueBag,
    brandPetmate,
    brandPurina,
    brandKong,
    brandBayer,
    brandRuffwear,
  } from '../../assets/images'
import { Categories } from './Dog-Category'


function Homepage() {
    return ( <div>
    <main>
    <h1 className="hero-txt">Purr-fect for your paws,<br/>
            Every Pet's Essential<br/>
            with <Link to="/Homepage"><span className="span-imp">Urban Tails</span></Link></h1>

        <img className="hero-image" src={heroPets} alt="hero image"/>


        <div className="section-part-header center">
            <h3><span>SHOP FOR DOGS</span></h3>
        </div>
        <Categories />

        <div className="section-part-head center">
            <h3><span>SHOP FOR CATS</span></h3>
        </div>
        <div className="section-category">
            <Link to="/Product">
                <img className="img-category" src={catClothing} alt="Clothing & Accessories" />
                <p className="desc-category">Clothing & Accessories</p>
            </Link>

            <Link to="/Product">
                <img className="img-category" src={catTreat} alt="treat" />
                <p className="desc-category">Treat</p>
            </Link>

            <Link to="/Product">
                <img className="img-category" src={catToys} alt="Toys" />
                <p className="desc-category">Toys</p>
            </Link>

            <Link to="/Product">
                <img className="img-category" src={catLitter} alt="Litter" />
                <p className="desc-category">Litter</p>
            </Link>

            <Link to="/Product">
                <img className="img-category" src={catGrooming} alt="Grooming" />
                <p className="desc-category">Grooming</p>
            </Link>

            <Link to="/Product">
                <img className="img-category" src={catBedding} alt="Bedding" />
                <p className="desc-category">Bedding</p>
            </Link>
        </div>



        <div className="section-part-head center">
            <h3><span>SHOP FOR ESSENTIALS</span></h3>
        </div>
        <div className="section-category">
            <Link to="/Product">
                <img className="img-category-ese" loading="lazy" src={essPuppy} alt="Puppy" />
            </Link>

            <Link to="/Product">
                <img className="img-category-ese" loading="lazy" src={essKitten} alt="Kitten" />
            </Link>

            <Link to="/Product">
                <img className="img-category-ese" loading="lazy" src={essSmall} alt="Small Animal" />
            </Link>
        </div>

        <div className="section-about">
            <img className="img-about" loading="lazy" src={pet} alt="Pet-about" />
            <p className="desc-about">
                <span className="head-about"> URBAN TAILS: <br/>
                    ONLINE PET STORE INDIA <br/></span>
                Urban Tails is the name that visions to comfort pets and pet parents by catering the market of pet
                essentials. We aim to reach at every doorstep around the globe & serve our cuddle buddies the best
                quality products. Our supplies range from all kinds of Food to Grooming,Clothing, Accessories,
                Utilities, Travel Gears & Innovative Toys. We aim to deliver what our pets crave for rather than what we
                want to serve. So, we make sure that our pet supplies fulfil all the standards of quality checks and
                protocols so that there’s no stop to joy in our little one’s life. <br/>

                <br/> At Urban Tails - Online Pet Store India, you will find a flawless experience in searching for the
                right product for your pets. We are confident that your online shopping experience for your pets will be
                much easier than before.</p>
        </div>

        <div className="section-part-head center">
            <h3><span>BRAND VALUES</span></h3>
        </div>
        <div className="section-value">
            <div>
                <img className="img-value" src={valueQty} alt="Quality" />
                <p className="desc-value">Quality</p>
            </div>

            <div>
                <img className="img-value" src={valueTrust} alt="Trustworthy" />
                <p className="desc-value">Trustworthy</p>
            </div>

            <div>
                <img className="img-value" src={valueSprt} alt="Support" />
                <p className="desc-value">Support</p>
            </div>

            <div>
                <img className="img-value" src={valueDlry} alt="Free Delivery" />
                <p className="desc-value">Free Delivery</p>
            </div>

            <div>
                <img className="img-value" src={valueBag} alt="One Stop Shop" />
                <p className="desc-value">One Stop</p>
            </div>
        </div>

        <div className="section-part-head center">
            <h3><span>SHOP FROM 50+ BRANDS </span></h3>
        </div>
        <div className="brands">
            <div className="section-brands">
                <div className="img-brand petmate"><img src={brandPetmate} alt="petmate" /></div>
                <div className="img-brand purina"><img src={brandPurina} alt="purina" /></div>
                <div className="img-brand kong"><img src={brandKong} alt="kong" /></div>
                <div className="img-brand bayer"><img src={brandBayer} alt="bayer" /></div>
                <div className="img-brand ruffwear"><img src={brandRuffwear} alt="ruffwear" /></div>
            </div>
        </div>

    </main>
    </div>)
  }
  
  export {Homepage}