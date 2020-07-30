import React, {useState, Fragment} from "react";
import {FormControlLabel, Typography, Link, Box} from "@material-ui/core";

export const UserInfonComponent = () =>{

    const [station, setStation] = useState("Not Selected");
    const [userName, setUserName] = useState("ronald.celis");
    const [parent, setParent] = useState("Not Selected");

    return (
        <Fragment>
            <section className="rightFill">
                <section className="fillSpace80">
                </section>
                <FormControlLabel 
                    labelPlacement = "start" 
                    control = {
                        <Typography>
                            &nbsp;{station}
                        </Typography>
                    } 
                    label = 'Station: '
                />
                <FormControlLabel 
                    labelPlacement = "start" 
                    className="UserInfoDivider"
                    control = {
                        <Typography>
                            &nbsp;{userName}
                        </Typography>
                    } 
                    label = "User Name: " 
                />
                <FormControlLabel 
                    labelPlacement = "start" 
                    control = {
                        <Link href=""> Logout </Link>
                    } 
                    label = "" 
                />
            </section>
            <section className="break">
            </section>
            <Box component="div" className="ParentHeader">
                <FormControlLabel 
                    labelPlacement = "start" 
                    className="UserInfoDivider"
                    control = {
                        <Typography>
                            {parent}
                        </Typography>
                    } 
                    label = "Parent: " 
                />
            </Box>
        </Fragment>
    );
}
