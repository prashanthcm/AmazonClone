import React from "react";
import { AppRegistry, Image, StatusBar, View, StyleSheet, ActivityIndicator, TouchableOpacity, LayoutAnimation } from "react-native";
import { Container, Content, Text, List, Input, ListItem, transparent, active, Body, Button, Header,Icon, Left, Right, Card, CardItem } from "native-base";

export default class Item extends React.Component {
    render() {
        var content = 
        <Content>
            <Card>
                <CardItem >
                    <Text>
                        Description
                    </Text>
                </CardItem>
                    <Button full style={{backgroundColor:"#EC560B"}}  >
                        <Text style={{color:"black"}} > Buy Now </Text>
                    </Button>  
                    <Text>
                    </Text>
                    <Button full style={{backgroundColor:"#D9EC1E"}}  >
                        <Text style={{color:"black"}} > Add to cart </Text>
                    </Button>   
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