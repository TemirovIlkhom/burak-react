import React from 'react';
import '../css/app.css';
import { Box,Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { HomPage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import { Footer } from './components/footer';

function App() {
  const location = useLocation();
  console.log("location:", location);
  
  return (
    <>
    {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
        <Switch>
          <Route path="/products">
          <ProductsPage />
          </Route>

          <Route path="/orders">
          <OrdersPage />
          </Route>

          <Route path="/member-page">
          <UserPage />
          </Route>

          <Route path="/help-page">
          <HomPage />
          </Route>

          <Route path="/">
            <HomPage />
          </Route>
        </Switch>
        <Footer />
      </>
  );
}






export default App;
