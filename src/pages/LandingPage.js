import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'

import landingPageData from 'json/landingPage.json'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPageData.hero}></Hero>
        <MostPicked refMostPicked={this.refMostPicked} data={landingPageData.mostPicked}></MostPicked>
        <Categories data={landingPageData.categories}></Categories>
      </>
    );
  }
}
