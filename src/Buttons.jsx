import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

class CityButtons extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div className="allCityButtons">
        <Grid fluid>
          <Row>

            <Col xs={12} sm={12} md={4} lg={4}>
                <div onClick={() => this.props.getWeatherData("Toronto")} className="button">
                  Toronto
                </div>
            </Col>

            <Col xs={12} sm={12} md={4} lg={4}>
              <div onClick={() => this.props.getWeatherData("Montreal")} className="button">
                Montreal
              </div>
            </Col>

            <Col xs={12} sm={12} md={4} lg={4}>
              <div onClick={() => this.props.getWeatherData("Ottawa")} className="button" >
                Ottawa
              </div>
            </Col>

          </Row>
        </Grid>
     </div>
    )
  }
}

export default CityButtons;
