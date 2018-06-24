import React, {Component} from 'react'
import CityButtons from './Buttons.jsx'
import Loading from './Loading.jsx'

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  getWeatherData = async (city) => {
    this.setState({isLoading: true, weatherData: null}) // clear state every time so loading state can render
    let weatherData = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},Canada&APPID=f2fa254ec5f9ad4ce8515f36707b683e`)).json()
    setTimeout( () => {
      this.setState({weatherData: weatherData, isLoading: false})
    }, 2000)

  }

  render() {

    let thereIsWeatherData = this.state.weatherData
    let isLoading = this.state.isLoading

    if (thereIsWeatherData) {

      // Results Page
      return(
        <div>
          <h1>Discover the weather in each of Canada's major cities.</h1>
          <CityButtons getWeatherData={this.getWeatherData}/>
          Temperature: {this.state.weatherData.main.temp}
        </div>
      )

    } else if (isLoading) {

      // Loading State
      return(
        <div className="loading">
          <Loading />
        </div>
      )

    } else {

      // Landing Page
      return(
        <div>
          <h1>Discover the weather in each of Canada's major cities.</h1>
          <CityButtons getWeatherData={this.getWeatherData}/>
        </div>
      )

    }
  }

}

export default App
