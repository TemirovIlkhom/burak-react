import React from "react";
import { Box, Button, CardActionArea, Container, Input, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import InputAdornment from '@mui/material/InputAdornment';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';


const products = [
{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
{ productName: "Kebab", imagePath: "/img/kebab.webp" },
{ productName: "Lavash", imagePath: "/img/lavash.webp" },
{ productName: "Lavash", imagePath: "/img/lavash.webp" },
{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
{ productName: "Kebab", imagePath: "/img/kebab.webp" },
{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

const CustomInput = styled(Input)
({
    '& .MuiInput-input': {
      marginLeft: '10px',
    },
  });

export default function Products() {
    return ( <div className={"products"}>
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
            <Stack className={"avatar-big-box"}>
                    <Stack className="title-search-box">
                        <span>Burak Restaurant</span>
                        
                        <CustomInput
                         disableUnderline
                         placeholder="Type in here..."
                         className="search-rectangle"
                         endAdornment={
                            <InputAdornment position="end">
                              <Button
                              style={{ borderRadius: "18px"}}
                                variant="contained"
                                color="primary"
                              >
                                Button
                                <SearchIcon style={{ marginLeft: '6px' }}  />
                              </Button>
                            </InputAdornment>
                          }
                        />
                    </Stack> 
                    </Stack>
            <Stack className="filter-section">
                        <Stack className="filter-box">
                            <Button
                            variant={"contained"}
                            color={"primary"}
                            style={{borderRadius: "8px"}}
                            >
                                New
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            style={{borderRadius: "8px"}}
                            >
                                PRICE
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            style={{borderRadius: "8px"}}
                            >
                                VIEWS
                            </Button>
                        </Stack>
                    </Stack>
            <Stack className="category-section">
            <Stack className="product-category">
                      <div className="category-button">
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            >
                                OTHER
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            >
                                DESERT
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            >
                                DRINK
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"secondary"}
                            >
                                SALAD
                            </Button>
                            <Button
                            variant={"contained"}
                            color={"primary"}
                            >
                                DISH
                            </Button>
                     </div>
                    </Stack>
            <Stack className="product-wrapper">
                {products.length !== 0 ? (
                    products.map((product, index) => {
                        return(
                            <Stack 
                            key={index} 
                            className="product-card">
                                <Stack className="product-img" sx={{backgroundImage: `url(${product.imagePath})`}}>
                                    <div className="product-sale">Normal size</div>
                                    <Button className="shop-btn">
                                        <img 
                                        src={"/icons/shopping-cart.svg"}
                                        style={{ display: "flex"}}
                                        />
                                    </Button>
                                    <Button className="view-btn" sx={{right: "36px"}}>
                                        <Badge badgeContent={20} color="secondary">
                                            <RemoveRedEyeIcon
                                            sx={{
                                                color: 20 ? "gray" : "white",
                                            }}
                                            />
                                        </Badge>
                                    </Button>
                                </Stack>
                                <Box className="product-desc">
                                    <span className="product-title">
                                        {product.productName}
                                    </span>
                                    <div className="product-desc-icon">
                                        <MonetizationOnIcon/>
                                        {12}
                                    </div>
                                </Box>
                            </Stack>
                        )
                    })
                ) : (
                    <Box className={"no-data"}>Products are not available!</Box>
                )}
                    </Stack>
                    </Stack>
            <Stack className="pagination-section">
                <Pagination
                count={10}
                page={1}
                renderItem={(item) => (
                    <PaginationItem
                    components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                    }}
                    {...item}
                    color={"secondary"}
                    />
                )}
                />
            </Stack>
                    </Stack> 
        </Container>
        <div className="brands-logo">
            <span className="logo-title">Our Family Brands</span>
            <Container className="logo-box">
              
            <Card sx={{ 
                maxWidth: 259,
                height: 350, 
                background: "#0D1518",
                borderRadius: "20px",
                boxShadow: "0px 0px 22px 0px #E4D4D4"
                }}>
      <CardActionArea>
        <CardMedia
        sx={{padding: "15px"}}
          component="img"
          height="350"
          image="/img/gurme.webp"
          alt=""
        />
      </CardActionArea>
    </Card>

    <Card sx={{ 
                maxWidth: 259,
                height: 350, 
                background: "#0D1518",
                borderRadius: "20px",
                boxShadow: "0px 0px 22px 0px #E4D4D4"
                }}>
      <CardActionArea>
        <CardMedia
        sx={{padding: "15px"}}
          component="img"
          height="350"
          image="/img/seafood.webp"
          alt=""
        />
      </CardActionArea>
    </Card>
    <Card sx={{ 
                maxWidth: 259,
                height: 350, 
                background: "#0D1518",
                borderRadius: "20px",
                boxShadow: "0px 0px 22px 0px #E4D4D4"
                }}>
      <CardActionArea>
        <CardMedia
        sx={{padding: "15px"}}
          component="img"
          height="350"
          image="/img/sweets.webp"
          alt=""
        />
      </CardActionArea>
    </Card>
    <Card sx={{ 
                maxWidth: 259,
                height: 350, 
                background: "#0D1518",
                borderRadius: "20px",
                boxShadow: "0px 0px 22px 0px #E4D4D4"
                }}>
      <CardActionArea>
        <CardMedia
        sx={{padding: "15px"}}
          component="img"
          height="350"
          image="/img/doner.webp"
          alt=""
        />
      </CardActionArea>
    </Card>
            </Container>
        </div>
        <div className="address">
        <span>Our address</span>
          <Container>
            <>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14865809.389312375!2d79.84166274282693!3d24.542633711745257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6955cdc0a649%3A0xf08ece466df23124!2sCZN%20Burak%20Dubai!5e0!3m2!1sko!2skr!4v1721277232993!5m2!1sko!2skr" 
            width="100%" height="500" 
             style={{marginTop: "80px"}}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </>
          </Container>
        </div>
    </div> 
    );
} 