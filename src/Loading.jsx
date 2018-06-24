import React, {Component} from 'react'
import { PropagateLoader } from 'react-spinners';

class Loading extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>
        <PropagateLoader
          color={'white'}
          loading={true }
          size={10}
        />

      </div>
    )
  }
}

export default Loading;
