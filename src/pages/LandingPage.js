import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'

import landingPageData from 'json/landingPage.json'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPageData.hero}></Hero>
        <MostPicked data={landingPageData.mostPicked}></MostPicked>
      </>
    );
  }
}
