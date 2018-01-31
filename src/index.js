import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import Login from '../src/login/login';
import Home from '../src/Home/home';
import SideBar from '../src/Sidebar/SideBar';
import Cart from '../src/Cart/Cart';
import Item from '../src/Item/item';
import Category from '../src/category/Category';
import Todays_deals from '../src/SeeMore/todays_deals';
import Recommendations from '../src/SeeMore/recommendations';
import Orders from '../src/Order/Order';

const HomeScreenRouter = DrawerNavigator(
  {
    Login: { screen: Login},
    Home: { screen: Home },
    Cart: { screen: Cart},
    Item: { screen: Item},
    Category: { screen: Category},
    Todays_deals: { screen: Todays_deals},
    Recommendations: { screen: Recommendations},
    Orders: { screen: Orders}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
