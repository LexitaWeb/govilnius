import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from "gatsby";
import img1 from '../assets/img/vilnius-1029717_1920.jpg'
import img2 from '../assets/img/vilnius-1570471_1920.jpg'
import img3 from '../assets/img/vilnius-2181373_1920.jpg'
const items = [
	{
		img: img1,
		name: 'Your Guide to the Jewish Heritage of Vilnius',
		desc: 'With bagels making a delicious comeback in Lithuania’s capital and a number of traditional Jewish celebrations becoming part of city life again, there’s a sense that Jewish culture is experiencing somewhat of a rebirth in Vilnius, which has many looking back at the city’s historic ties with its Jewish, or Litvak, community. And though '
	},
	{
		img: img2,
		name: 'Supermetrics, has decided to set up a development office in Vilnius',
		desc: 'Founded in Helsinki in 2013, Supermetrics is a rapidly growing marketing technology company and a leader in its category. It pulls data from various marketing platforms into one single location, making it easy for marketers to report, monitor and analyze the performance of their marketing campaigns. The company is set to open its first office'
	},
	{
		img: img3,
		name: 'Discovering Vilnius in 2019: A Capital of Modern Culture and Gastronomy Open to Experimentation',
		desc: 'Guests to Lithuania’s modern and open capital are in for much more than the cultural heritage and history the city is known for. An impressive museum of modern art, some of the best restaurants in the Baltics, numerous exclusive experiences, and a selection of newly opened hotels make Vilnius an attractive destination for independent'
	},
	{
		img: img1,
		name: 'Interactive Festival of Lights Illuminates Collective Emotions for Vilnius’ 696th Birthday',
		desc: 'It was a weekend to remember in Lithuania’s capital as residents and visitors to the city gathered to celebrate Vilnius’ 696th anniversary. Despite the city’s relatively ancient age, the weekend-long celebration was filled with youthful exuberance. Among the activities planned for the birthday celebration was a spectacular Festival of Lights, which ran for the entire'
	},
	{
		img: img1,
		name: 'Welcome to Vilnius Workshops to Support Foreign Talent Relocating to Lithuania’s Capital',
		desc: 'This Tuesday Vilnius’ business development and tourism agency Go Vilnius at the Workland Business Centre announced a series of dedicated workshops slated to begin taking place later this month. The Welcome to Vilnius workshops are designed to facilitate the transition of foreigners coming to the city to pursue professional opportunities. In just a few hours, …'
	},
	{
		img: img2,
		name: 'Education Programme Line-Up Confirmed for CONVENE 2019',
		desc: 'In addition to the seemingly endless networking opportunities it provides, CONVENE’s reputation as the Baltic Sea Region’s leading exhibition for the meetings and events industry is built largely upon its tradition of encouraging the exchange of ideas among its participants. Now, with less than three months until the seventh edition of the event, organisers are …'
	},
	{
		img: img3,
		name: 'CONVENE Networking Evening Set to Return to Palace of the Grand Dukes of Lithuania',
		desc: 'CONVENE’s Networking Evening is a hallmark of the annual exhibition where Hosted Buyers, Exhibitors, Suppliers, Partners and friends are encouraged to meet and rub elbows in an elegant yet informal setting. Situated in the heart of Vilnius Old Town, the Palace of the Grand Dukes of Lithuania, which has served as an important meeting venue …'
	},
	{
		img: img1,
		name: 'Icelandic payment entrepreneurs establish HQ in Vilnius',
		desc: 'Paystra, a fintech company founded and financed by Icelandic payments experts, providing payment services, is establishing its headquarters in Vilnius, Lithuania, and plans to build a team of 30 professionals over the next two years. The company, led by two payment market veterans, will develop and deploy state-of-the-art electronic payment solutions for European merchants.'
	},
]

const itemsBuild = items.map((el,i)=>(
	<div key={{i}}>
		<div className="tourism-slide" style={{backgroundImage:`url(${el.img})`, height:'70vh', backgroundPosition:'center', backgroundSize:'cover'}}>
			<div className="container">
				<div className="tourism-slide-info">
					<h3>{el.name}</h3>
					<p>
						{el.desc}
					</p>
				</div>
			</div>
		</div>
	</div>
));

export default class CarouselNews extends Component {
  render() {
	  var settings = {
		  dots: true,
		  arrows: false,
		  infinite: true,
		  speed: 500,
		  autoplaySpeed: 3000,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay:true,
	  };
	return (
		<Slider {...settings}>
			{itemsBuild}
		</Slider>
	)
  }
}
