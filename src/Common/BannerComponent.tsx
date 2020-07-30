import React from "react";
import {Tooltip, Box} from "@material-ui/core";

export const BannerComponent = () =>{
    return(
        <Box component="span" className="BannerBox">
            <Tooltip title="Patient Care Management Module">
                <img alt="Department of Veterans Affairs Patient Care Management Module" src={require("../images/left.jpg")} />
            </Tooltip>
        </Box>
    );
};