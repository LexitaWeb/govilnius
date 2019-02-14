import React, { Component } from 'react'
import Slider from "react-slick";

const items = [
	{
		img: '1 (10)',
		name: 'Upėtakio filė'
	},
	{
		img: '1 (11)',
		name: 'Karpio šašlykas'
	},
	{
		img: '1 (12)',
		name: 'Silkė'
	},
	{
		img: '1 (13)',
		name: 'Karpio kepsneliai'
	},
	{
		img: '1 (14)',
		name: 'Plačiakakčio filė'
	},
	{
		img: '1 (15)',
		name: 'Plačiakakčio kepsneliai'
	},
]

const itemsBuild = items.map((el, i) => (
	<div key={{ i }}>
		<div className="carousel-img mx-3" style={{ backgroundImage: `url("/static/assets/${el.img}.jpg")` }}>
			<div className="carousel-actions">
				<span>Į krepšelį</span>
			</div>
		</div>
	</div>
));

export default class CarouselMultiple extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 2,
			responsive:false,
			afterChange: function () {
				let siblings = document.querySelectorAll(".slick-slide");
				let current = document.querySelector(".slick-current");

				for (let i = 0; i < siblings.length; i++) {
					siblings[i].style.zIndex = 0;
				}
				current.style.zIndex = 10;
			}
		};
		return (
			<Slider {...settings}>
				{itemsBuild}
			</Slider>
		)
	}
}