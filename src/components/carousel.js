import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from "gatsby";
import img1 from '../assets/img/vilnius-1029717_1920.jpg'
import img2 from '../assets/img/vilnius-1570471_1920.jpg'
import img3 from '../assets/img/vilnius-2181373_1920.jpg'
const items = [
	{
		img: img1,
		name:'Upėtakio filė',
		price:'15 €'
	},
	{
		img: img2,
		name:'Karpio šašlykas',
		price:'15 €'
	},
	{
		img: img3,
		name:'Karpio kepsneliai',
		price:'15 €'
	},
	{
		img: img1,
		name:'Upėtakio filė',
		price:'15 €'
	},
	{
		img: img1,
		name:'Upėtakio filė',
		price:'15 €'
	},
	{
		img: img2,
		name:'Karpio šašlykas',
		price:'15 €'
	},
	{
		img: img3,
		name:'Karpio kepsneliai',
		price:'15 €'
	},
	{
		img: img1,
		name:'Upėtakio filė',
		price:'15 €'
	},
]

const itemsBuild = items.map((el,i)=>(
	<div key={{i}}>
		<div className='d-block' style={{paddingBottom:'75%', backgroundImage:`url(${el.img})`, backgroundPosition:'center', backgroundSize:'cover'}}>

		</div>
		{/* <img src={el.img} className="w-100" alt={el.name}/> */}
	</div>
));

export default class Carousel extends Component {
  render() {
	  var settings = {
		  dots: false,
		  arrows: true,
		  infinite: false,
		  speed: 500,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay:false,
		  responsive: [{
		  		breakpoint: 1024,
		  		settings: {
		  			slidesToShow: 3,
		  		}
		  	},
		  	{
		  		breakpoint: 600,
		  		settings: {
		  			slidesToShow: 2,
		  		}
		  	},
		  	{
		  		breakpoint: 480,
		  		settings: {
		  			slidesToShow: 1,
		  		}
		  	}
		  ]
	  };
	return (
		<Slider {...settings}>
			{itemsBuild}
		</Slider>
	)
  }
}
