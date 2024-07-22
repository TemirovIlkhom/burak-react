import React, { SyntheticEvent, useState }  from "react";
import {  Container, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from "@mui/joy/styles";
import Box from '@mui/joy/Box';
import Badge  from '@mui/joy/Badge';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import "../../../css/order.css";






export default function OrdersPage() {
  const [value, setValue] = useState('1'); 

  /** HANDLERS **/
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }
  return (
    <div className="order-page">
      <Container className="order-container">
      <Stack className={'order-left'}>
                    <TabContext value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList 
                            onChange={handleChange}
                             aria-label="lab API tabs example"
                              className={"table-list"}>
                                    <Tab label="PAUSED ORDERS" value="1"/>
                                    <Tab label="PROCESS ORDERS" value='2'/>
                                    <Tab label="FINISHED ORDERS" value='3'/>
                                </TabList>
                            </Box> 
                            
                         <Stack className={'order-main-content'}>
                           <TabPanel value="1" sx={{ p: 0 }}><PausedOrders /></TabPanel>
                           <TabPanel value='2' sx={{ p: 0 }}><ProcessOrders /></TabPanel>
                           <TabPanel value='3' sx={{ p: 0 }}><FinishedOrders /></TabPanel>
                        </Stack>
            </TabContext>
                </Stack>



                <Stack className={'order-right'}>
                    <CssVarsProvider>
                <Card
      sx={{
        width: "100%",
        maxWidth: '100%',
        boxShadow: "lg",
        background: "#F8F8FE",
          }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
      <Badge
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    
    badgeContent={
        <Avatar variant="solid" 
        sx={{ '--Avatar-size': '24px' }}
        />
      
    }
    badgeInset="10%"
    sx={{ '--Badge-paddingX': '0px', '--Badge-ringColor': 'solid' }}
  >
    <Avatar alt="Travis Howard" src="/img/justin.webp " sx={{ 
        width:  117, 
        height: 112, 
        borderRadius: 37, 
        marginTop: "25px"
      }}/>
  </Badge>
        
        <Typography level="title-lg" sx={{ marginTop: "8px" }}>Justin</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch', marginTop: "5px" }}>
        USER
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
         
         
        </Box>
      </CardContent>
      <CardOverflow 
      sx={{ 
        bgcolor: 'background.level1',
        borderTop: '1px solid #A1A1A1',
        borderBottom: '1px solid #A1A1A1',
        boxShadow: "lg",
        }}>
        <CardActions buttonFlex="1">
        <IconButton size="sm" variant="plain" color="neutral">
           <LocationOnIcon/>
           South Korea, Busan
          </IconButton>
        </CardActions>
      </CardOverflow>
    </Card>

    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        marginTop: "23px",
        boxShadow: "lg",
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add new card
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name</FormLabel>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
        <Box className="card-icons">
        <Checkbox label="Save card" 
        sx={{ gridColumn: '1/-1', my: 1 }}
        />
        <img src="/icons/western-card.svg" alt="" />
        <img src="/icons/master-card.svg" alt="" />
        <img src="/icons/paypal-card.svg" alt="" />
        <img src="/icons/visa-card.svg" alt="" />
        </Box>
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary">
            Add card
          </Button>
        </CardActions>
      </CardContent>
    </Card>
    </CssVarsProvider>
                </Stack>
      </Container>
    </div>
  )
}