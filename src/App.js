import React, {Component} from 'react'
import CityButtons from './Buttons.jsx'
import Loading from './Loading.jsx'
import Results from './Results.jsx'
import testData from './testData.js'

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  getWeatherData = async (city) => {
    this.setState({isLoading: true, weatherData: null}) // clears state every time so loading state can render

    try {
      var weatherData = await (await fetch(`http://api.openweathermap.org/1data/2.5/weather?q=${city},Canada&units=metric&APPID=7d6f7bb8698882389fd14b203d5bb8aa`)).json()
    } catch (error) {
      console.log(error)
      var weatherData = null
    }

    setTimeout( () => {
      //timeout to simulate loading
      this.setState({weatherData: weatherData, isLoading: false, visibility: ""})
    }, 1500)
  }

  render() {

    let thereIsWeatherData = this.state.weatherData
    let isLoading = this.state.isLoading

    if (thereIsWeatherData) {
      return(

        // Results Page
        <div className="masterContainer">

          <h1>Discover the weather in each of Canada's major cities.</h1>

          <CityButtons getWeatherData={this.getWeatherData}/>

          <div className="results">
            <Results weatherData={this.state.weatherData}/>
          </div>

        </div>

      )
    } else if (isLoading) {
      return(

        // Loading State
        <div className="loading">
          <Loading />
        </div>

      )
    } else if(!thereIsWeatherData) {
      return(

        <div className="masterContainer">

          <h1>Discover the weather in each of Canada's major cities.</h1>

          <CityButtons getWeatherData={this.getWeatherData}/>

          <div className="results">
            <h4>The Weather API is unresponsive. Please try again later.</h4>
          </div>

        </div>

      )
    } else {
      return(

        // Landing Page
        <div className="masterContainer">
          <h1>Discover the weather in each of Canada's major cities.</h1>
          <CityButtons getWeatherData={this.getWeatherData}/>
        </div>

      )
    }
  }

}

export default App
