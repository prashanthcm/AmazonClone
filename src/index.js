import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import Login from '../src/login/login';
import Home from '../src/Home/home';
import SideBar from '../src/Sidebar/SideBar';
import Cart from '../src/Cart/Cart';
const HomeScreenRouter = DrawerNavigator(
  {
    Login: { screen: Login},
    Home: { screen: Home },
    Cart: { screen: Cart}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
