

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import ForgotPasswordController from '../app/component/ForgotPasswordController';

export default class ForgotPassword extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            forgotPasswordModalVisible: false,
            otherParamsToSend: 1,
        };
    }

    btnForgotPassword(){
        this.setState({forgotPasswordModalVisible: true});
        alert("visit your email to change password")
    };

    callbackAfterForgotPassword(success, otherValue) {
        this.setState({forgotPasswordModalVisible: false});
        console.log("success >> "+success+" otherValue >> "+otherValue);
    }

  render() {
    var otherParamsToSend;
    var forgotPasswordModel = <Modal transparent={true} visible={this.state.forgotPasswordModalVisible} onRequestClose={() => {
        this.setState({forgotPasswordModalVisible: false});
    }}>
        <ForgotPasswordController callbackAfterForgotPassword={this.callbackAfterForgotPassword.bind(this)} otherParamsToSend={this.state.otherParamsToSend}/>
    </Modal>

    return (
        <View style={{margin: 10}}>
        <TouchableOpacity onPress={this.btnForgotPassword.bind(this)}>
        
        </TouchableOpacity>
        {forgotPasswordModel}
      </View> 
    );
  }
}