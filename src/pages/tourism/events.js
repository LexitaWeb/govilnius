import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/layout.start'
import Nav from "../../components/nav.tourism";
import Checkbox from "../../components/checkbox";
import Hero from '../../components/hero.tourism'
import heroLogo from "../../assets/img/govilnius-logo-text.svg";
import logoIcon from "../../assets/img/vilnius-1029717_1920.jpg"
// import Carousel from '../../components/carousel.tourism'
import More from '../../components/btn.more'
import Card from '../../components/card.events'
import img1 from '../../assets/late/Atostogos_desertine.jpg'
import img2 from '../../assets/late/Cafe-Montmarte.jpg'
import img3 from '../../assets/late/Holy-Donut-brunch.jpg'
import img4 from '../../assets/late/Kempinski_Brunch-2.jpg'
import img5 from '../../assets/late/sugamour.jpg'
import img6 from '../../assets/late/sugamour-brunch.jpg'
import img7 from '../../assets/late/Time-restaurant-Oysters.jpg'

// import Gallery from '../../components/masonry'
const events = [
	{
		title: "“SU-MENĖK”",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2019/01/unnamed.png"
	},{
		title: "VILNIUS BOOK FAIR 2019",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2018/11/vkm_2018_LT_EN_1280x400.png"
	},{
		title: "CITY OF ROBOTS",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2019/01/51172600_608788712898928_193921110603988992_n.jpg"
	},{
		title: "Tales of the Viennese forest",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2019/01/regular_vienos-misko-pasakos-uk.jpg"
	},{
		title: "Gintaras Sodeika “POST FUTURUM”",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2017/09/51383426_10157003459038454_4453737853087645696_n.jpg"
	},{
		title: "“Dance for the Vacuum Cleaner and Dad”",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2018/09/zoomed_c-laura-vanseviciene-6139.jpg"
	},{
		title: "V. SPIVAKOV AND THE MOSCOW VIRTUOSI",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2018/11/galleryFullImage-3-2.jpg"
	},{
		title: "Tuomas Räsänen Quintet",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2019/01/1547662099.jpeg"
	}, {
		title: "“Future Live”",
		img: "http://www.vilnius-events.lt/wp-content/uploads/2018/10/1.jpg"
	}
];
const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sit nihil nobis, architecto reiciendis repudiandae accusamus accusantium impedit voluptate voluptates asperiores fuga placeat, repellendus nemo officia autem. Non, illum nam!';
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
					<div className="col-lg-8 d-none d-lg-block bg-primary text-white" style={{padding:'1rem 2rem'}}>
						<div className="row">
							{['All events', 'Festivals', 'Concerts', 'Free Admission','Performances', 'Exhibitions', 'For Children', 'Open Air', 'Sport', 'Excursions','Cinema', 'Other'].map((el,i)=>{
								return(
									<div key={i} class="col-lg-3 col-md-4 col-6">
										<Checkbox label={el}/>
									</div>
								)
							})}
						</div>
						<hr/>
						<div className="row">
							<div className="col-md-6">
								<div>
									<label className="text-white">Date from</label>
								</div>
								<input type="text"/>
							</div>
							<div className="col-md-6">
								<div>
									<label className="text-white">Date to</label>
								</div>
								<input type="text"/>

							</div>
						</div>
					</div>
					<div className="col-lg d-flex flex-column justify-content-center align-items-center py-4" style={{ backgroundSize:'cover', backgroundPosition:'center'}}>
						<i className="fas fa-5x fa-calendar-alt text-muted mb-2"></i>
						<h3>EVENTS</h3>
					</div>
				</div>
			</section>
			<section className="py-2 px-4 w-100 text-center" style={{background:'#efefef'}}>
				<a href="http://www.vilnius-tourism.lt/wp-content/uploads/2018/09/EVENTS_2019_GB_po1.pdf" target="_blank" className="btn-download">
					<i className="fas fa-download"></i> Download latest events calendar in PDF
				</a>
			</section>
			<section className="p-4">
				<div className="row">
					{events.map((el,i)=>{
						return(
							<div className="col-lg-4 col-md-6 mb-3">
								<Card title={el.title} desc={lorem} date="2019-09-15" img={el.img}/>
							</div>
						)
					})}
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
