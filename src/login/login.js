import React from "react";
import PasswordInputText from 'react-native-hide-show-password-input';
import { StatusBar, StyleSheet, ActivityIndicator, AppRegistry, AsyncStorage, Image, TouchableOpacity, flex, View, props, backgroundColor} from "react-native";
import { Container, Header, Title, Col, Button, Left, Fab, List, Input, ListItem, Item, InputGroup, Icon, Right, StyleProvider, iconCenter, active, Footer,onPress, FooterTab, Grid, Body, Content,Text, Card, CardItem, Tabs, TabHeading, Tab } from "native-base";

class Login extends React.Component {
    constructor(props){
        super(props);
        // We have the same props as in our signup.js file and they serve the same purposes.
        this.state = {
          loading: false,
          email: '',
          password: ''
        }
      }

    render() {
      const content = this.state.loading ? <ActivityIndicator size="large"/> :
        <Content>
        <List>
        <ListItem>
          <InputGroup>
            <Icon name="ios-person" />
            <Input
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholder={"Email Address"} />
          </InputGroup>
        </ListItem>
        <ListItem>
       <InputGroup>
         <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
       <Input
         onChangeText={(text) => this.setState({password: text})}
         value={this.state.password}
         secureTextEntry={true}
         placeholder={"Password"} />
       </InputGroup>
  </ListItem>
         </List>
         <Button full rounded onPress={this.login.bind(this)}>
             <Text> Login </Text>
         </Button>
         <Text style={{color:"darkblue", marginTop:5,marginBottom:5,marginLeft:5}}>
             New Here?
         </Text>
         <Button full rounded onPress={this.goToSignup.bind(this)}>
             <Text > Sign-up</Text>
         </Button>
         <Text style={{color:"darkblue", marginTop:5,marginBottom:5,marginLeft:5}}>
             Sign-in later
         </Text>
         <Button full rounded onPress={this.home.bind(this)}>
             <Text > Home</Text>
             <Icon name="ios-home" />
         </Button>
   </Content>;

      return (
        <Container>
           <Header style={{backgroundColor:"#E3EDF0"}} >
                <Title style={{marginTop:10, marginRight:5, color:"black"}} >Login</Title>
            </Header>
            {content}
        </Container>
      );
    }
    goToSignup(){
        this.props.navigate({
          component: Signup
        });
      }

      home(){
        this.props.navigation.navigate("Home");
    }

      login(){
        this.setState({
          loading: true
        });
        // Log in and display an alert to tell the user what happened.
        this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then((userData) =>
          {
            this.setState({
                    loading: false
                  });
                  AsyncStorage.setItem('userData', JSON.stringify(userData));
                  this.props.navigator.push({
                    component: Account
                  });
          }
        ).catch((error) =>
            {
                  this.setState({
                    loading: false
                  });
            alert('Login Failed. Please try again'+error);
        });
      }
  }

  var styles = StyleSheet.create({
    image: {
        height: 45,
        width:40,
        flex:0.9,
        marginLeft: 3,
        marginTop: 7,
        marginRight: 5,
      }
  });

  export default Login;
  AppRegistry.registerComponent('Login', () => Login);