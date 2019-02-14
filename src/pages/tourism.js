import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout.start'
import Nav from "../components/nav.tourism";
import Card from '../components/card'
import img1 from '../assets/img/vilnius-1029717_1920.jpg'
import img2 from '../assets/img/vilnius-1570471_1920.jpg'
import img3 from '../assets/img/vilnius-2181373_1920.jpg'
import Carousel from '../components/carousel.tourism'
import Gallery from '../components/masonry'

const IndexPage = () => (
  <Layout>
	  <Nav></Nav>
	<section className="pb-5">
		<Carousel/>
	</section>
	<section>
		<div className="container">
			<h1>Latest tips</h1>
			<Card name="tavo tevas" desc='asdasdasdasd'/>
		</div>
	</section>
	<section>
		<Gallery elements={[{src:img1},{src:img2},{src:img3}]}/>
	</section>
  </Layout>
)

export default IndexPage
