import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config.js";

export default class DisplayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      userName: "",
     email_id:"",
     
      recieverName: "",
      recieverContact: "",
      recieverAddress: "",
      recieverAge: "",
      recieverHobbies: "",
      recieverRequestDocId: "",
    };
  }

  getRecieverDetails() {
    console.log("this.state.recieverId:",this.state.recieverId)
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data())
          this.setState({
            recieverName: doc.data().first_name,
            recieverContact: doc.data().contact,
             recieverEmaiId: doc.data().email_id,
            recieverAddress: doc.data().address,
              recieverAge: doc.data().age,
              recieverHobbies: doc.data().hobbies,
          });
        });
      });

    
  }

  getUserDetails = (userId) => {
    db.collection("users")
      .where("email_id", "==", userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            userName: doc.data().first_name + " " + doc.data().last_name,
          });
          console.log("this.state 65:",this.state)
        });
      });
  };


  componentDidMount() {
    this.getRecieverDetails();
    this.getUserDetails(this.state.userId);
    
  }

  render() {
    return (
      
      <View style={{ flex: 1 }}>

       <ScrollView style={styles.scrollview}>
        <View style={{ flex: 0.1 }}>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#ffffff"
                onPress={() => this.props.navigation.goBack()}
              />
            }
            centerComponent={{
              text: "Display Screen",
              style: {
                color: "#ffffff",
                fontSize: RFValue(20),
                fontWeight: "bold",
              },
            }}
            backgroundColor="#32867d"
          />
        </View>
        <View style={{ flex: 0.9 }}>
          <View
            style={{
              flex: 0.3,
              flexDirection: "row",
              paddingTop: RFValue(30),
              paddingLeft: RFValue(10),
            }}
          >
         
          
          </View>
          <View
            style={{
              flex: 0.7,
              padding: RFValue(20),
            }}
          >
            <View style={{ flex: 0.7 ,justifyContent:'center',alignItems:'center',marginTop:RFValue(50),borderWidth:1,borderColor:'#deeedd',padding:RFValue(10)}}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: RFValue(30),
                }}
              >
               User Information
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
                Name : {this.state.recieverName}
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
                Contact: {this.state.recieverContact}
              </Text>
             
             
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
               Age: {this.state.recieverAge}
              </Text>

                  
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
               Email Id: {this.state.recieverEmaiId}
              </Text>

               <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
                Hobbies: {this.state.recieverHobbies}
              </Text>
            </View>
           
          </View>


        </View>
          </ScrollView>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(60),
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
  },
    scrollview: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
