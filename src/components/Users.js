import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          Users!
          {this.props.users.map((user,index) => <li key={index}> {user.username} </li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux


export default connect(mapStateToProps)(Users)
