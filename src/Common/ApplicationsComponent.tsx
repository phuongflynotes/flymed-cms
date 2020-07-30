import React from "react";
import { Tooltip, Box, Button } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";

interface Props {
  isPcmm: boolean;
}

export const PCMMAppsComponent = (props: Props) => {
  return (
    <Box component="div" className="fullWidth alingRight">
      <Tooltip title="Patient Care Management Module">
        <Button className={props.isPcmm ? "SelectedApp" : "Apps"}>PCMM</Button>
      </Tooltip>
      <Tooltip title="User Management Module">
        <Button className={!props.isPcmm ? "SelectedApp" : "Apps"}>
          User Management
        </Button>
      </Tooltip>
    </Box>
  );
};
