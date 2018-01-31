import React from "react";
import { AppRegistry, Image, StatusBar, View, StyleSheet, ActivityIndicator, TouchableOpacity, LayoutAnimation } from "react-native";
import { Container, Content, Text, List, Input, ListItem, transparent, active, Body, Button, Header,Icon, Left, Right, Card, CardItem } from "native-base";

export default class Todays_deals extends React.Component {
    render() {
        var content = 
        <Content>
        <Text>
            Deals of the day!
        </Text>
        <Card>
            <CardItem style={{marginTop:20, padding:10}}>
            <Text>
                Item 1 Price
            </Text>
        </CardItem>
        <CardItem style={{marginTop:20, padding:10}}>
            <Text>
                Item 2 Price
            </Text>
        </CardItem>
        <CardItem style={{marginTop:20, padding:10}}>
            <Text>
                Item 3 Price
            </Text>
        </CardItem>
        <CardItem style={{marginTop:20, padding:10}}>
            <Text>
                Item 4 Price
            </Text>
        </CardItem>
        <CardItem style={{marginTop:20, padding:10}}>
            <Text>
                Item 5 Price
            </Text>
        </CardItem>
        </Card>
        </Content>
        ;
        return(
            <Container>
            <Header style={{backgroundColor:"white"}} >
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                < Icon name = "ios-menu" />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 1 }}>
            <Text >Amazon</Text>
          </Body>
          <Right>
            < Icon name = "ios-search" style={{flex:0.5}} >
            </ Icon>
            < Icon name = "ios-cart" />
          </Right>
        </Header>
            { content }
        </Container>
        );
    }
}