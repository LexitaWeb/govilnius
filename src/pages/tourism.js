import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout.start'
import Nav from "../components/nav.tourism";
import Hero from '../components/hero.tourism'
import Card from '../components/card'
import img1 from '../assets/img/vilnius-1029717_1920.jpg'
import img2 from '../assets/img/vilnius-1570471_1920.jpg'
import img3 from '../assets/img/vilnius-2181373_1920.jpg'
import heroLogo from "../assets/img/govilnius-logo-text.svg";
import logoIcon from "../assets/img/vilnius-1029717_1920.jpg"
// import Carousel from '../components/carousel.tourism'
import More from '../components/btn.more'
import CardResponsive from '../components/card.responsive'
import CarouselNews from '../components/carousel.news'


// import Gallery from '../components/masonry'
const tips = [
	{
		title: 'Vilnius: Things to do Over Easter weekend',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2019/02/Vilnius-Cathedral-263x181.jpg'
	},
	{
		title: 'Foodie city break',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2018/05/JUS_2571-263x181.jpg'
	},
	{
		title: 'Forget paris: vilnius is the city of love',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2019/01/Monika-Krilaviciene-2018-Ruduo-Diena-Bernardinu-parkas-su-zmonemis-zmones-3-dienos-Vilniuje-leidinys-horizont-263x181.jpg'
	},
	{
		title: 'Vilnius on screen',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2016/08/Patvirtinta-BFS-263x181.jpg'
	},
	{
		title: 'The best of Vilnius restaurants',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2019/01/GV-10-263x181.jpg'
	},
	{
		title: 'Your winter adventure awaits in vilnius',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2018/12/Saulius-Ziura-2018-lukiskes-ziema-vakaras-zmones-ciuozykla-4-263x181.jpg'
	},
	{
		title: 'Have fun: vilnius in winter',
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2018/12/GV-32-263x181.jpg'
	},
	{
		title: "Don't miss out on the most exciting winter events in vilnius",
		img: 'http://www.vilnius-tourism.lt/wp-content/uploads/2018/10/VMS_0757_siaura-263x181.jpg'
	},
];
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
		<div className="content-card" style={{background:'#fff'}}>
			<section>
				<div className="row">
					<div className="col-lg-8 bg-primary text-white" style={{padding:'5rem'}}>
						<h1>Tourism</h1>
						From the romance of the winding streets of Old Town to the excitement of a modern capital that’s reinventing itself every day, come and feel the Vilnius Vibe.
					</div>
					<div className="col-lg d-flex flex-column justify-content-center align-items-center py-4" style={{backgroundImage:`url(${img3})`, backgroundSize:'cover', backgroundPosition:'center'}}>
						<i className="fas fa-5x fa-map-marked-alt text-white"></i>
					</div>
				</div>
			</section>
			<section>
				<CarouselNews/>
			</section>
			<section>
					<div class="p-4">
						<h2 className="underlined spaced-4 mb-4">Latest tips</h2>
						<div className="row flex-wrap">
							{tips.map((el,i)=>{
								return(
									<div className="col-lg-3 mb-3" key={i}>
										<Card name={el.title} img={el.img}/>
									</div>
								);
							})}
						</div>
						<div className="text-center pt-3">
							<More text="View more" icon="fas fa-arrow-circle-right mr-2"/>
						</div>
					</div>
			</section>
			<section className="p-4" style={{background:'#f7f7f7'}}>
					<h2 className="underlined spaced-4 mb-4">Events not to miss</h2>
					<div className="row mb-3">
						<div className="col-lg-6">
							<CardResponsive className="card-responsive-top" title="CITY OF ROBOTS" desc="City of Robots – 72 newest robots from Las Vegas, Beijing, London and Berlin, the theater of robots, 11 amazing virtual realities and space technologies..." date="2019-03-08" img={'http://www.vilnius-events.lt/wp-content/uploads/2019/01/51172600_608788712898928_193921110603988992_n.jpg'}/>
						</div>
						<div className="col-lg-6">
							<div className="mb-3">
								<CardResponsive title="DON’T MISS OUT ON THE MOST EXCITING SPRING EVENTS IN VILNIUS" date="2019-03-08" img={'http://www.vilnius-events.lt/wp-content/uploads/2018/11/TOP-10.jpg'}/>
							</div>
							<div>
								<CardResponsive title="“SU-MENĖK”" date="2019-03-08" img={'http://www.vilnius-events.lt/wp-content/uploads/2019/01/unnamed.png'}/>
							</div>
						</div>
					</div>
						<div className="row">
							<div className="col-lg-6">
								<CardResponsive title="ART TOUR AT MO MUSEUM" date="2019-03-08" img={'http://www.vilnius-events.lt/wp-content/uploads/2019/01/mo-1.png'}/>
							</div>
							<div className="col-lg-6">
								<CardResponsive title="TALES OF THE VIENNESE FOREST" date="2019-03-08" img={'http://www.vilnius-events.lt/wp-content/uploads/2019/01/regular_vienos-misko-pasakos-uk.jpg'}/>
							</div>
						</div>
				<div className="text-center pt-4">
					<More text="View all events" icon="fas fa-arrow-circle-right mr-2"/>
				</div>
			</section>
			<section className="p-4">
					<h2 className="underlined spaced-4 mb-4">Others about Vilnius</h2>
					<div className="mb-3">
						<CardResponsive title="Your Guide to the Jewish Heritage of Vilnius" desc="With bagels making a delicious comeback in Lithuania’s capital and a number of traditional Jewish celebrations becoming part of city life again, there’s a sense that Jewish culture is experiencing somewhat of a rebirth in Vilnius, which has many looking back at the city’s historic ties with its Jewish, or Litvak, community. And though …" date="2019-03-08" img={img1} className="card-responsive-news"/>
					</div>
					<div className="mb-3">
						<CardResponsive title="One of the world’s fastest growing marketing tech companies, Supermetrics, has decided to set up a development office in Vilnius" desc="Founded in Helsinki in 2013, Supermetrics is a rapidly growing marketing technology company and a leader in its category. It pulls data from various marketing platforms into one single location, making it easy for marketers to report, monitor and analyze the performance of their marketing campaigns. The company is set to open its first office …" date="2019-03-08" img={img2} className="card-responsive-news"/>
					</div>
					<div className="mb-3">
						<CardResponsive title="Discovering Vilnius in 2019: A Capital of Modern Culture and Gastronomy Open to Experimentation" desc=" Guests to Lithuania’s modern and open capital are in for much more than the cultural heritage and history the city is known for. An impressive museum of modern art, some of the best restaurants in the Baltics, numerous exclusive experiences, and a selection of newly opened hotels make Vilnius an attractive destination for independent …" date="2019-03-08" img={img3} className="card-responsive-news"/>
					</div>
					<div className="mb-3">
						<CardResponsive title="Interactive Festival of Lights Illuminates Collective Emotions for Vilnius’ 696th Birthday" desc="It was a weekend to remember in Lithuania’s capital as residents and visitors to the city gathered to celebrate Vilnius’ 696th anniversary. Despite the city’s relatively ancient age, the weekend-long celebration was filled with youthful exuberance. Among the activities planned for the birthday celebration was a spectacular Festival of Lights, which ran for the entire …" date="2019-03-08" img={img2} className="card-responsive-news"/>
					</div>
					<div className="mb-3">
						<CardResponsive title="Welcome to Vilnius Workshops to Support Foreign Talent Relocating to Lithuania’s Capital" desc="This Tuesday Vilnius’ business development and tourism agency Go Vilnius at the Workland Business Centre announced a series of dedicated workshops slated to begin taking place later this month. The Welcome to Vilnius workshops are designed to facilitate the transition of foreigners coming to the city to pursue professional opportunities. In just a few hours, … " date="2019-03-08" img={img1} className="card-responsive-news"/>
					</div>
					<div className="text-center pt-4">
					<More text="View all news" icon="fas fa-arrow-circle-right mr-2"/>
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
