import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../index.css'
import { _getPhones } from '../utils/_DATA'
import { receivePhones } from '../actions/phones'
import Container from './container'
import 'semantic-ui-css/semantic.min.css'

function mapStateToProps({phones}){
  return{
    phones
  }
}

class App extends Component {
  componentDidMount(){
    _getPhones()
      .then((phones) =>{
        this.props.dispatch(receivePhones(phones))
      })
  }
  
  render(){
  
    return (
      <Container />
    );
  }
}

export default connect()(App);
