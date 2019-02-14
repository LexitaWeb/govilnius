import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout.start'
import Nav from "../components/nav";
import Hero from "../components/hero";
import heroLogo from "../assets/img/govilnius-logo-text.svg";
import logoIcon from "../assets/img/test2.svg";
import Carousel from '../components/carousel'
import CarouselNews from '../components/carousel.news'
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
          <section className="content-card-section section-icon">
              <div className="content-card-section-img">
                <div className="mb-2">
                  <i className="fas fa-4x fa-map-marked-alt text-muted"></i>
                </div>
                <h3 className="text-body">Tourism</h3>
              </div>
              <div className="content-card-section-text">
                 From the romance of the winding streets of Old Town to the excitement of a modern capital that’s reinventing itself every day, come and feel the Vilnius Vibe.
              </div>
          </section>
          <section className="content-card-section section-icon">
              <div className="content-card-section-img">
                <div className="mb-2">
                  <i className="fas fa-4x fa-users text-muted"></i>
                </div>
                <h3 className="text-body">Talent</h3>
              </div>
              <div className="content-card-section-text">
                 Make your mark in a city that gives you fresh opportunities and the work - life balance you deserve.Join the open and rapidly - growing Vilnius job market.
              </div>
          </section>
          <section className="content-card-section section-icon">
              <div className="content-card-section-img">
                <div className="mb-2">
                  <i className="fas fa-4x fa-briefcase text-muted"></i>
                </div>
                <h3 className="text-body">Business</h3>
              </div>
              <div className="content-card-section-text">
                 With a world - class ICT infrastructure, flexible multilingual talent and a close - knit business community, start and grow your business in Vilnius.
              </div>
          </section>
          <section className="content-card-section section-icon">
              <div className="content-card-section-img">
                <div className="mb-2">
                  <i className="fas fa-4x fa-mail-bulk text-muted"></i>
                </div>
                <h3 className="text-body">Contact us</h3>
              </div>
              <div className="content-card-section-text">
                 Find out why more and more businesses, visitors and talent are choosing Vilnius. We are ready to be your one - stop - shop
                 for advice and
                 support at all stages and
                 for all your needs.
              </div>
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
