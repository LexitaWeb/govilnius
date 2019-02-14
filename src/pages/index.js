import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.start'
import Nav from "../components/nav";
import Hero from "../components/hero";
import heroLogo from "../assets/img/govilnius-logo-text.svg";
import logoIcon from "../assets/img/test2.svg";
// import Carousel from '../components/carousel'
import CarouselNews from '../components/carousel.news'
import business from '../assets/img/business.jpeg'
import talent from '../assets/img/talent.jpeg'
import tourism from '../assets/img/vilnius-2181373_1920.jpg'
const cards = [
  {
    name:'Tourism',
    icon: 'fa-map-marked-alt',
    img:tourism,
    desc: 'From the romance of the winding streets of Old Town to the excitement of a modern capital that’s reinventing itself every day, come and feel the Vilnius Vibe.'
  },
  {
    name:'Talent',
    icon:'fa-users',
    img:talent,
    desc: 'Make your mark in a city that gives you fresh opportunities and the work - life balance you deserve.Join the open and rapidly - growing Vilnius job market.'
  },
  {
    name:'Business',
    icon:'fa-briefcase',
    img: business,
    desc: 'With a world - class ICT infrastructure, flexible multilingual talent and a close - knit business community, start and grow your business in Vilnius.'
  },
  // {
  //   name:'Contact us',
  //   icon: 'fa-mail-bulk',
  //   desc:'Find out why more and more businesses, visitors and talent are choosing Vilnius. We are ready to be your one - stop - shop for advice and support at all stages and for all your needs.'
  // },
]


const IndexPage = () => (
  <Layout>
    <Hero>
      <Nav />
      <div className="container">
        <div className="hero-content pt-3 pt-lg-4 px-3">
          <div className="row no-gutters">
            <div className="col-lg-7">
              <img src={heroLogo} className="w-100 mb-2" alt="Go Vilnius"/>
              <h1 className="hero-slogan">Welcoming business talent and tourism</h1>
            </div>
          </div>
        </div>
      </div>
    </Hero>
   <section id="content">
     <div className="container" style={{marginTop:-100}}>
      <div className="content-card">
        <main style={{background:'#fff'}}>
          <section className="content-card-section">
              <div className="content-card-section-text">
                <h3>Welcome to Go Vilnius</h3>
                We are the official development agency of the City of Vilnius.Whether you’ re a growth - oriented business or a talented professional, an international events organiser or a traveller looking to experience something new, we’ re here to help you discover all the fresh opportunities that Vilnius has to offer.
              </div>
              <div className="content-card-section-img">
                <img src={logoIcon} alt="Go Vilnius"/>
              </div>
          </section>
          <section>
            <CarouselNews/>
          </section>
          <section style={{background:'#f7f7f7', padding:'4rem 5rem'}}>
              <h3><a href="#">Contact us</a></h3>
              <p>
                Find out why more and more businesses, visitors and talent are choosing Vilnius.We are ready to be your one - stop - shop
                for advice and support at all stages and
                for all your needs.
              </p>
          </section>
          <section className="px-5 py-4">
              <ul className="occ-card-wrap">
                {cards.map((el,i)=>{
                  return(
                    <li key={i}>
                      <div className="occ-card">
                        <div className="occ-card-img" style={{backgroundImage:`url(${el.img})`}}>
                          <div class="occ-card-front">
                            <i className={`fas fa-4x ${el.icon}`}></i>
                            <h3>{el.name}</h3>
                          </div>
                          <div className="text-justify occ-card-back">
                            {el.desc}
                          </div>
                        </div>
                        <div className="text-center mt-2">
                          <Link to="#" className="occ-card-btn">
                            Find out more
                          </Link>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
          </section>
          
          <section className="content-card-social-wrap">
            <a href="#" className="content-card-social card_fb">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="content-card-social card_ig">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="content-card-social card_in">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>
        </main>
      </div>
     </div>
   </section>
  </Layout>
)

export default IndexPage
