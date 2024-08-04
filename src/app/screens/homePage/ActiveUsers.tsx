import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Card from '@mui/joy/Card';
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio  from "@mui/joy/AspectRatio";
import { CssVarsProvider } from "@mui/joy/styles";


import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */
const TopUsersRetriever = createSelector(
    retrieveTopUsers,
  (topUsers) => ({ topUsers })
);


export default function ActiveUsers() {
  const { topUsers } = useSelector(TopUsersRetriever);

    return (
    <div className={"active-users-frame"}>
        <Container>
            <Stack className={"main"}>
                <Box className={"category-title"}>Active Users</Box>
                <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                    {topUsers.length !== 0 ? (
                         topUsers.map((member: Member) => {
                      const imagePath = `${serverApi}/${member.memberImage}`;
                            return (
                                <Card key={member._id} variant="outlined" className={"card"}>
                                    <CardOverflow>
                                       <AspectRatio ratio="1">
                                        <img src={imagePath} alt="" />
                                       </AspectRatio>
                                    </CardOverflow>

                                    <CardOverflow variant="soft" className="product-detail">
                                        <Stack className="info">
                                            <Stack 
                                            flexDirection={"row"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            >
                                                <Typography className={"title"}>
                                                    {member.memberNick}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </CardOverflow>
                                </Card>
                            )
                        })
                    ) : (
                        <Box className="no-data"> New products are mot available!</Box>
                    )}
                    </CssVarsProvider>
                </Stack>
            </Stack>
        </Container>
    </div>);
}