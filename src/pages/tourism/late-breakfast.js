import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/layout.start'
import Nav from "../../components/nav.tourism";
import Hero from '../../components/hero.tourism'
import Card from '../../components/card'
import heroLogo from "../../assets/img/govilnius-logo-text.svg";
import logoIcon from "../../assets/img/vilnius-1029717_1920.jpg"
// import Carousel from '../../components/carousel.tourism'
import More from '../../components/btn.more'
import CardResponsive from '../../components/card.responsive'
import img1 from '../../assets/late/Atostogos_desertine.jpg'
import img2 from '../../assets/late/Cafe-Montmarte.jpg'
import img3 from '../../assets/late/Holy-Donut-brunch.jpg'
import img4 from '../../assets/late/Kempinski_Brunch-2.jpg'
import img5 from '../../assets/late/sugamour.jpg'
import img6 from '../../assets/late/sugamour-brunch.jpg'
import img7 from '../../assets/late/Time-restaurant-Oysters.jpg'

// import Gallery from '../../components/masonry'

const IndexPage = () => (
  <Layout>
	  {/* <Nav></Nav>
	<section className="pb-5">
		<Carousel/>
	</section> */}
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
	<div className="container" style={{marginTop:-100,zIndex:9999}}>
		<div className="content-card text-justify" style={{background:'#fff'}}>
			< section style = {
				{
					paddingBottom: '30%',
					backgroundImage: `url(${img1})`,
					backgroundSize: 'cover',
					backgroundPosition:'center 0'
				}
			} >

			</section>
			<section className="p-4 pb-2">
				<h1 className="underlined ">Late breakfast in Vilnius</h1>
			</section>
			<section className="px-4 py-2 mb-4" style={{fontSize:'1.25rem'}}>
				Make sure to spare some time
				for eating out
				while in Vilnius.Lithuania’ s capital is home to a vibrant food scene with new eateries emerging each month offering delicious treats.There’ s no better time to feel and eat like a local than brunch on the weekend.No matter the weather, get cosy in one of these lovely places in the heart of Vilnius Old Town and take advantage of the moment:
			</section>
			<section className="px-4 py-2">
				<div class="row no-gutters align-items-center">
					<div class="col mr-lg-4">
						<h4>If you don’t want to run into too many tourists</h4>
						 <p>
							 <a href="http://www.vilnius-tourism.lt/en/what-to-do/eat-and-drink/restaurants/cafes/desertine-atostogos/">Atostogos</a> is your place to go to. Try the silky eggs Benedict on a Belgian waffle, get the crunch of the locally made granola, or dig into the famous curd pancakes with fresh berries. Artisan coffee and gourmet cakes guaranteed. Weekend or not, don’t forget to book in advance; it’s quite a busy place.
						 </p>
					</div>
					<div class="col-lg-5 px-3">
						<img src={img2} className="w-100" alt="Nuotrauka"/>
					</div>
				</div>
			</section>
			<section className="px-4 py-2">
				<div class="row no-gutters align-items-center">
					<div class="col mr-lg-4">
						<h4>Going over the top?</h4>
						 <p>
							 Start your day at <a href="https://www.facebook.com/Holydonut.lt/">Holy Donuts</a> with donuts, milkshakes, bagels with cheddar cheese and chorizo, American pancakes, and many other options.The brunch will fuel you well into the evening and give you the energy you need to explore Vilnius.
						 </p>
					</div>
					<div class="col-lg-5 px-3">
						<img src={img3} className="w-100" alt="Nuotrauka"/>
					</div>
				</div>
			</section>
			<section className="px-4 py-2">
				<div class="row no-gutters align-items-center">
					<div class="col mr-lg-4">
						<h4>Indulge yourself in luxury! </h4>
						 <p>
							 Every Saturday and Sunday from 10 a.m. to 2 p.m. <a href="https://www.kempinski.com/en/vilnius/hotel-cathedral-square/dining/culinary-highlights/kempinski-breakfast/">Kempinski Hotel Cathedral Square</a> hosts a brunch that is much like a royal feast. They offer an extensive a la carte menu to choose from, but their selection of fresh caviar tops it all. They also make more traditional brunch dishes, such as Eggs Benedict or waffles; both done quite exceptionally. The ritual is a feast for both your eyes and appetite. Plus, where else can you start your day off watching bottles of Champagne being opened with a sabre? Oh, what a sight!
						 </p>
					</div>
					<div class="col-lg-5 px-3">
						<img src={img4} className="w-100" alt="Nuotrauka"/>
					</div>
				</div>
			</section>
			<section className="px-4 py-2">
				<div class="row no-gutters align-items-center">
					<div class="col mr-lg-4">
						<h4>Looking for the best Instagram photos? </h4>
						 <p>
							 <a href="http://www.vilnius-tourism.lt/en/what-to-do/eat-and-drink/restaurants/cafes/sugamour/">Sugamour</a> is your place with its fancy decor and gourmet desserts.Taste a Lithuanian version of eggs Benedict with potato cake, order some wholesome porridge, and choose from a
							 case ofcolourful desserts.It’ s a perfect little treat to start your weekend.
						 </p>
					</div>
					<div class="col-lg-5 px-3">
						<img src={img5} className="w-100" alt="Nuotrauka"/>
					</div>
				</div>
			</section>
			<section className="px-4 py-2">
				<div class="row no-gutters align-items-center">
					<div class="col mr-lg-4">
						<h4>Oysters for brunch? </h4>
						 <p>
							Sleep in on Sunday and then eat all you want at <a href="https://www.facebook.com/timeforfood/">Time</a> Restaurant’ s fancy buffet.It’ s a different experience every time because the food served depends on the season.Do book in advance though, because brunch is limited to 70 people.
						 </p>
					</div>
					<div class="col-lg-5 px-3">
						<img src={img7} className="w-100" alt="Nuotrauka"/>
					</div>
				</div>
			</section>
			<section className="px-4 py-2">
				<div class="row no-gutters align-items-center">
					<div class="col mr-lg-4">
						<h4>Getting some French vibes? </h4>
						 <p>
							Check out <a href="http://www.vilnius-tourism.lt/en/what-to-do/eat-and-drink/restaurants/french-cuisine/cafe-montmartre/">Café Montmartre </a>right in the heart of the Old Town.It will transport you right to Paris where your plate can be filled with croque madames, omelettes, and crepes with Nutella and whipped cream.
						 </p>
					</div>
					<div class="col-lg-5 px-3">
						<img src={img6} className="w-100" alt="Nuotrauka"/>
					</div>
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
		</div>
	</div>
  </Layout>
)

export default IndexPage
