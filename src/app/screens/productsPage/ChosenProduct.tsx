import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Rating from '@mui/material/Rating';

export default function ChosenProduct() {
    return ( 
    <div className={"chosen-product"}>
        <Container>
            <div className="chosen-box">
        <span>Product Detail</span>
            
            <Stack className="product-box">
                <Box className="left-box">
                <Card sx={{ maxWidth: 600 }}>
                 <CardMedia
                     component="img"
                     alt="green iguana"
                     height="480"
                     image="/img/fresh.webp"
                     />
                 </Card>             
                </Box>


                <Box className="right-box">
                <span className="title">FR Kebab</span>
                <div className="rating">
                <Rating 
                className="half-rating"
                defaultValue={2.5} 
                precision={0.5} 
                />
                <div className="eye">
                <VisibilityIcon/>
                10 pc 
                </div>
                </div>
                <div className="desc">This is Kebab with Fruits.</div>
                <div className="line"></div>
                <Box className="price-box">
                    <span>Price:</span>
                    <span>$ 15</span>
                </Box>
                <Button
                            variant={"contained"}
                            color={"primary"}
                            sx={{ width: 221.878,
                                height: 46.726 }}
                            >
                                ADD TO BASKET
                            </Button>
                </Box>
            </Stack>
            </div>
        </Container>
    </div>)
}