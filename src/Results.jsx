import React, {Component} from 'react';

class Results extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>

        <img src={`http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png`}/>
        <img src={`http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png`}/>
        <img src={`http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png`}/>

        <div>
          <p>Minimum Temperature: {this.props.weatherData.main.temp_min}°</p>
          <p>Temperature: {this.props.weatherData.main.temp}°</p>
          <p>Maximum Temperature: {this.props.weatherData.main.temp_max}°</p>
        </div>

      </div>

    )
  }

}

export default Results;
