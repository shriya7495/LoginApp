import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,Image
} from "react-native";
import MyHeader from "../components/Myheader.js";
import { RFValue } from "react-native-responsive-fontsize";

export default class MyFirstScreen extends React.Component {

  GoToNextScreen=()=>{
    this.props.navigation.navigate("HomeScreen")
  }

   GoToSignUpScreen=()=>{
    this.props.navigation.navigate("SignUpScreen")
  }
  
  render(){
  return (
    
     <View style={styles.container}>
     
     <View style={{ flex: 0.5, alignItems: "center" }}>
 
       <Image
            source={require("../assets/signIn.png")}
            style={styles.signUpImage}
            resizeMode={"stretch"}
          />
<Image
            source={require("../assets/login.png")}
            style={styles.signUpImage}
            resizeMode={"stretch"}
          />
      
        
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.GoToNextScreen();
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

             <Text style={styles.signupText}> New User? Please Sign Up. </Text>
<TouchableOpacity
              style={styles.button2}
              onPress={() => {
                this.GoToSignUpScreen();
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            
            
        
            </View>
            </View>

  );
}
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#dcedc1"
  },
  button: {
    width: "60%",
    height: RFValue(50),
    marginTop:"20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(30),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16
  },
   button2: {
    width: "60%",
    height: RFValue(50),
    marginTop:"5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(5),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16
  },

   buttonText3: {
    width: "60%",
    height: RFValue(50),
    marginTop:"5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(5),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16
  },
  buttonText: {
    color: "#32867d",
    fontWeight: "150",
     justifyContent: "center",
    alignItems: "center",
      fontWeight: "bold",
    fontSize: RFValue(12)
  },
  signUpImage: {
    width: "100%",
    height: RFValue(220)
  },
   signupText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d"
  },
   text: {
    fontSize: RFValue(40),
    fontWeight: "bold",
    color: "black"
  },
  text2: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "grey",
    marginTop:150
  },

});
