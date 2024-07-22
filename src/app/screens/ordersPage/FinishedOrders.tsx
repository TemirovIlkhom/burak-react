import React from 'react';
import { Box, Card, Typography, Button, Rating, Avatar, Stack } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import DoneAllIcon from '@mui/icons-material/DoneAll';


const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function FinishedOrders() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <Stack>
    {[1, 2, 3].map((ele, index) => {
           return(
           <Box sx={{ p: 2 }}> 
      <Card sx={{ 
        borderRadius: 3, 
        mt: 5, 
        mb: 3, 
        boxShadow: 'var(--joy-shadow-lg)'
        }}>
          <Box sx={{ display: 'flex', flexDirection: "row" }}>
         
                  <Box
                  sx={{  
                    width: "560px",
                    display: "flex", 
                    flexDirection: "column"
                    }}>
                     {[1, 2].map((ele2, index2) => {
                return(
                     <Box
              sx={{ display: "flex", flexDirection: "row"}}>

            <Box sx={{
              pl: '8px',
              pt: '8px',
              height: "64px",
              position: 'relative',
              
              overflow: 'hidden',
              '&:hover .overlay': {
                opacity: 1,
              },
              '&:hover .image': {
                transform: 'scale(1.1)',
              },
            }}>
               <Avatar
               className="image"
                 alt="Remy Sharp"
                 src="/img/kebab.webp"
                 sx={{ width: 56, height: 56, boxShadow: 'var(--joy-shadow-lg)', transition: 'transform 0.3s ease' }}
               />
              
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(251, 251, 251, 0.15)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="overlay"
              />
              
            </Box>

            <Box sx={{ width: '89%', px: 2, pt: 1, pb: 2, }}>
              <Typography variant="h4" gutterBottom>
                Kebab
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </Box>
              </Box>
              <Typography variant="h5" gutterBottom
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-around",
                borderBottom: '1px solid',
                borderTop: '1px solid',
                borderColor: 'divider'
              }}
              >
                <span>$10</span>
                <img src="/icons/close.svg"/>
                <span>$5</span>
                <img src="/icons/pause.svg"/>
                <span>$15</span>
              </Typography>
            </Box>
            </Box>
                  
           
            )
        })} 
        <Box
        sx={{
          
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          p:1

        }}>
           <Typography gutterBottom variant="h5"
           sx={{
            width: "100%",
            display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-around",
           }}
           >
                <span>Product price</span>
                <span>$30</span>
                <img src="/icons/close.svg"/>
                <span>Delivery cost</span>
                <span>$10</span>
                <img src="/icons/pause.svg"/>
                <span>Total</span>
                <span>$40</span>
              </Typography>
        </Box>
              </Box>

            <Box sx={{ 
              width: '30%', 
              borderLeft: '1px solid',
              display: 'flex', 
              flexDirection: "column",
              justifyContent: "center", 
              borderColor: 'divider', 
              mb: "20px",
              pl: 2 
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                <Typography variant="h3" sx={{ mr: 1 }}>$30</Typography>
                <Typography variant="body1" color="text.secondary">
                  <s>$10</s>
                </Typography>
              </Box>
              <Typography variant="h6" color="success.main" sx={{ mb: 2 }}>
              Shipping is free for you
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "space-around", mt: 4 }}>
              Delivery was sent
              <DoneAllIcon fontSize="large" color="success" />
              </Box>
            </Box>
          </Box>
      </Card>
    </Box>
      )
    })} 
    {false && (
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <img
        src='/icons/noimage-list.svg'
        style={{width: 300, height: 300}}
        />
      </Box>
    )}
    </Stack>
  );
}

