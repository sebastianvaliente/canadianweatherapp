import React, {Component} from 'react'
import { ClipLoader } from 'react-spinners';

class Loading extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div className="loading">

        <ClipLoader
          color={'white'}
          size={100}
        />

      </div>
    )
  }
}

export default Loading;
