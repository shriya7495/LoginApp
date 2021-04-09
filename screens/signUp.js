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
  Platform,
  Alert,
  ScrollView
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Constants from 'expo-constants';

import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons'

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
   
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      hobbies: "",
      contact: "",
        age: "",
      confirmPassword: "",
      isModalVisible: "true"
    };
  }
 GoToHomeScreen=()=>{
    this.props.navigation.navigate("HomeScreen")
  }
  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            hobbies: this.state.hobbies,
             age: this.state.age,
            email_id: this.state.emailId,
           password: this.state.password,
           
            address: this.state.address,
            IsBookRequestActive: false
          });
          return alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("DisplayScreen");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  
 goToForgotPassword = () => this.props.navigation.navigate('ForgotPassword');
  
   
   
  
  render() {
     return (
     
        <ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={styles.signupText}> SIGN UP </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>First Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"First Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  firstName: text
                });
              }}
            />

            <Text style={styles.label}>Last Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Last Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  lastName: text
                });
              }}
            />

            <Text style={styles.label}>Contact </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

                <Text style={styles.label}>Age </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Age"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  age: text
                });
              }}
            />


            <Text style={styles.label}> Address </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Address"}
              multiline={true}
              onChangeText={text => {
                this.setState({
                  address: text
                });
              }}
            />

           
              <View
        style={{
              ...(Platform.OS !== 'android' && {
            zIndex: 10
          })
          
        }}
      >
  <Text style={styles.label}> Hobbies </Text>
          <View style={styles.hobbyInput}>
        <DropDownPicker style={styles.hobbyInput}
          items={[
             { label: 'Acting', value:'Acting'  },
            { label: 'Singing', value: 'Singing' },
            { label: 'Dancing', value: 'Dancing' },
            { label: 'Reading', value: 'Reading' },
             { label: 'Cooking', value: 'Cooking' },
               { label: 'Sketching', value: 'Sketching' },
          ]}
          placeholder="Select a Hobby"
          containerStyle={{height: 40}}
          style={{ backgroundColor: '#ffffff' }}
          dropDownStyle={{ backgroundColor: 'white' }}
             onChangeItem={item => this.setState({
        hobbies: item.value
    })}
        />
      </View>
          </View>

            <Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

         
 <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />
          </View>

        
    

          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.userSignUp(
                  this.state.emailId,
                  this.state.password,
                  this.state.confirmPassword
                )
              }
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <Text
              style={styles.cancelButtonText}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}
            >
              Cancel
            </Text>

             <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
              this.GoToHomeScreen()
                
              }
            >
              <Text style={styles.registerButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  dropdown: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10)
  },
  text2:{
  fontSize: RFValue(20),
    fontWeight: "bold",
    color: "brown"
  },
  button: {
    width: "80%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16
  },
  buttonText: {
    color: "#e2a94e",
    fontWeight: "200",
    fontSize: RFValue(20)
  },
  label: {
    fontSize: RFValue(13),
    color: "#717D7E",
    fontWeight: "bold",
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20)
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
  hobbyInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
      color: "#32867d",
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#e2a94e",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10)
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff"
  },
  cancelButtonText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d",
    marginTop: RFValue(10)
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#fff"
  },
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  signupText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d"
  },
  
 
  TextInput: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  loginImage: {
    width: "100%",
    height: RFValue(220)
  }
});
