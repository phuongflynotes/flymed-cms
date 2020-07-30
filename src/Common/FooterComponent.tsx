import React from "react";
import { Box, List, ListItem, Tooltip } from "@material-ui/core";

export const FooterComponent = () =>{
    return(
        <section className="footer">
            <Box className="footerBox" display="inline-block">
              <List dense={true}>
                <ListItem><strong>WARNING:</strong> All PCMM actions are audited and reported by this application.</ListItem>
                <ListItem>If you are experiencing problems or have a question about PCMM, please contact your <a href="https://vssc.med.va.gov/PCMMV2/ListCoordinators">VISN or Facility PCMM Coordinator</a> for assistance.</ListItem> 
                <ListItem>Due to the width of some tables, PCMM is best viewed by maximizing the web browser window to full screen mode.</ListItem>
              </List>
            </Box>
            <Box component="span" display="inline">
              <Tooltip title="VA Healtcare - Defining Excellence">
                <img src={require("../images/VA_Excellence_4C.gif")} alt="VA Healtcare - Defining Excellence"></img>
              </Tooltip>
            </Box>
        </section>
    );
};