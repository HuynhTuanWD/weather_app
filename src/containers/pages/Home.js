import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../actions/userActions';
import propTypes from "prop-types";


export class Home extends Component {
  componentDidMount = () => {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        userid:{this.props.user.userId}
        <br/>
        id:{this.props.user.id}
        <br/>
        nội dung:{this.props.user.body}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user.user
})

Home.propTypes = {
  getUser:propTypes.func.isRequired,
}

const mapDispatchToProps = {
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
