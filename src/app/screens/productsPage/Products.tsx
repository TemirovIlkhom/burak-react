import React, { ChangeEvent, useEffect, useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";

/** REDUX SLICE & SELECTOR */
const actionDispatch = ( dispatch: Dispatch ) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
 });

const productsRetriever = createSelector(
  retrieveProducts,
  (products) => ({ products })
);



const CustomInput = styled(Input)
({
    '& .MuiInput-input': {
      marginLeft: '10px',
    },
  });

export default function Products() {

  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [ productSearch, setProductSearch ] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("")
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
    .getProducts(productSearch)
    .then(data => setProducts(data)) //getProducts method+ kirib kelgan datani Redux ga set qil 
    .catch(err => console.log(err));
  }, [productSearch])

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
    setProductSearch({ ...productSearch });
    }
  }, [searchText])
  

  /** HANDLERS */
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };
  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };
  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({...productSearch});
  };
  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

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
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.value)}
                         onKeyDown={(e) => {
                          if (e.key === "Enter") searchProductHandler();
                         }}
                         endAdornment={
                            <InputAdornment position="end">
                              <Button
                              style={{ borderRadius: "18px"}}
                                variant="contained"
                                color="primary"
                                onClick={searchProductHandler}
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
                            style={{borderRadius: "8px"}}
                            color={
                              productSearch.order === "createdAt" 
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchOrderHandler("createdAt")}
                            >
                                New
                            </Button>
                            <Button
                            variant={"contained"}
                            style={{borderRadius: "8px"}}
                            color={
                              productSearch.order === "productPrice" 
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchOrderHandler("productPrice")}
                            >
                                PRICE
                            </Button>
                            <Button
                            variant={"contained"}
                            style={{borderRadius: "8px"}}
                            color={
                              productSearch.order === "productViews" 
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchOrderHandler("productViews")}
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
                            color={
                              productSearch.productCollection === ProductCollection.OTHER
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
                            >
                                OTHER
                            </Button>
                            <Button
                            variant={"contained"}
                            color={
                              productSearch.productCollection === ProductCollection.DESSERT
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}
                            >
                                DESERT
                            </Button>
                            <Button
                            variant={"contained"}
                            color={
                              productSearch.productCollection === ProductCollection.DRINK
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
                            >
                                DRINK
                            </Button>
                            <Button
                            variant={"contained"}
                            color={
                              productSearch.productCollection === ProductCollection.SALAD
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
                            >
                                SALAD
                            </Button>
                            <Button
                            variant={"contained"}
                            color={
                              productSearch.productCollection === ProductCollection.DISH
                              ? "primary"
                              : "secondary"
                            }
                            onClick={() => searchCollectionHandler(ProductCollection.DISH)}
                            >
                                DISH
                            </Button>
                     </div>
                    </Stack>
            <Stack className="product-wrapper">
                {products.length !== 0 ? (
                    products.map((product: Product) => {
                      const imagePath = `${serverApi}/${product.productImages[0]}`
                      const sizeVolume = product.productCollection === ProductCollection.DRINK 
                      ? product.productVolume + "liter"
                      : product.productSize + "size";
                        return(
                            <Stack 
                            key={product._id} 
                            className="product-card"
                              onClick={() => chooseDishHandler(product._id)}
                              >
                                <Stack className="product-img" 
                                sx={{backgroundImage: `url(${imagePath})`}}>
                                    <div className="product-sale">{sizeVolume}</div>
                                    <Button className="shop-btn">
                                        <img 
                                        src={"/icons/shopping-cart.svg"}
                                        style={{ display: "flex"}}
                                        />
                                    </Button>
                                    <Button className="view-btn" sx={{right: "36px"}}>
                                        <Badge badgeContent={product.productViews} color="secondary">
                                            <RemoveRedEyeIcon
                                            sx={{
                                                color: 
                                                product.productViews === 0 ? "gray" : "white",
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
                                        {product.productPrice}
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
                count={
                  products.length !== 0 
                  ? productSearch.page + 1
                  : productSearch.page
                }
                page={productSearch.page}
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
                onChange={paginationHandler}
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