import React from "react";
import { AppRegistry, Image, StatusBar, View, StyleSheet, ActivityIndicator, TouchableOpacity, LayoutAnimation } from "react-native";
import { Container, Content, Text, List, Input, ListItem, transparent, active, Body, Button, Header,Icon, Left, Right, Card, CardItem } from "native-base";

export default class Home extends React.Component {
    render() {
        const content=
            <Content>
                <Card>
                    <CardItem>
                        <Button primary style={{backgroundColor:"grey"}} onPress={() => this.props.navigation.navigate("Category")}>
                            <Text style={{color:"black"}} >
                                Category
                            </Text>
                        </Button>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                    <Text>
                        Hello, user!
                    </Text>
                </CardItem>
                </Card>
                <Text>
                    Your recommendations
                </Text>
                <Card>
                    <CardItem style={{marginTop:20, padding:10}} button onPress={() => this.props.navigation.navigate("Item")} >
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
                <Button light onPress={() => this.props.navigation.navigate("Recommendations")}>
                    <Text >
                        See more
                    </Text>
                </Button>
                </Card>
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
                <Button light onPress={() => this.props.navigation.navigate("Todays_deals")}>
                    <Text >
                        See more
                    </Text>
                </Button>
                </Card>
            </Content>
        ;
      return (
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
            < Icon name = "ios-cart" onPress={() => this.props.navigation.navigate("Cart")}/>
          </Right>
        </Header>
            { content }
        </Container>
      );
    }
}