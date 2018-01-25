import React from "react";
import { AppRegistry, Image, StatusBar, View, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";
import { Container, Content, Text, List, ListItem, transparent, active, Body, Button, Header,Icon, Left, Right, Card, CardItem } from "native-base";

export default class SideBar extends React.Component {
    render() {
        var content=
        <Content>
            <Header style={{backgroundColor:"white"}} >
                <Left>
                <Icon name="ios-person" />
                </Left>
                <Body>
                    <Text style={{marginTop:8, fontWeight:"100"}} >Hello, User!</Text>
                </Body>
            </Header>
            <Card >
            <CardItem style={{marginTop:10}} >
                <Text>Home</Text>
            </CardItem>
            <CardItem style={{marginTop:10}} >
                <Text>Shop by Category</Text>
            </CardItem>
            <CardItem style={{marginTop:10}} >
                <Text>Today's Deals</Text>
            </CardItem>
            </Card>
            <Card >
            <CardItem style={{marginTop:10}} >
                <Text>Your orders</Text>
            </CardItem>
            <CardItem style={{marginTop:10}} >
                <Text>Your Wishlist</Text>
            </CardItem>
            <CardItem style={{marginTop:10}} >
                <Text>Your Account</Text>
            </CardItem>
            </Card>
            <Card >
            <CardItem style={{marginTop:10}} >
                <Text>Settings</Text>
            </CardItem>
            <CardItem style={{marginTop:10}} >
                <Text>Customer service</Text>
            </CardItem>
            </Card>
        </Content>
        ;
      return (
          <Container>
            {content}
          </Container>
      );
    }
}