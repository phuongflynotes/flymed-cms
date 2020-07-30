import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Menu, { SubMenu, MenuItem } from "rc-menu";
import "../css/menu.css";

interface Props {
  showMenu: boolean;
}

interface SelectedItem {
  selectedKeys: string;
}

export const PCMMMenuComponent = (props: Props) => {
  // const [open, setOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const onSelect = (selectedItem: any) => {
    let option = selectedItem as SelectedItem;
    switch (selectedItem.selectedKeys) {
      case "9":
        window.location.href = "/station";
        // history.push("/station");
        break;
    }
  };

  return (
    <Box component="div" className="fullWidth AppMenu">
      <Menu mode="horizontal" onSelect={onSelect}>
        <MenuItem key="1">Home</MenuItem>
        <SubMenu
          title={<span className="submenu-title-wrapper">Patient</span>}
          key="2"
        >
          <MenuItem key="2-1">Search for Patient</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Teams</span>}
          key="3"
        >
          <MenuItem key="3-1">List All Teams</MenuItem>
          <MenuItem key="3-2">Search for Teams</MenuItem>
          <MenuItem key="3-3">Create a Team</MenuItem>
          <MenuItem key="3-4">
            View / Adjust Station Modeled Capacity Calculation
          </MenuItem>
          <MenuItem key="3-5">View Primary Care Intensity</MenuItem>
          <MenuItem key="3-6">Search / Maintain Model Configuration</MenuItem>
          <MenuItem key="3-6">Search for VA Staff</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Rooms</span>}
          key="4"
        >
          <MenuItem key="4-1">List All Rooms</MenuItem>
          <MenuItem key="4-2">Search for Room</MenuItem>
          <MenuItem key="4-3">Create a Room</MenuItem>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">Non-VA Providers</span>
          }
          key="5"
        >
          <MenuItem key="5-1">Search for Non-VA Provider</MenuItem>
          <MenuItem key="5-2">Search for Non-VA Practice</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Reports</span>}
          key="6"
        >
          <MenuItem key="6-1">Canned and Ad-hoc Reporting</MenuItem>
          <MenuItem key="6-2">Background Job Log</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Alerts</span>}
          key="7"
        >
          <MenuItem key="7-1">Alerts Summary</MenuItem>
          <MenuItem key="7-2">Open Alerts List for Current Station</MenuItem>
          <MenuItem key="7-3">Closed Alerts List for Current Station</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Administration</span>}
          key="8"
        >
          <MenuItem key="8-1">Manage Reference Data</MenuItem>
        </SubMenu>
        <MenuItem key="9">Change Station</MenuItem>
        <SubMenu
          title={<span className="submenu-title-wrapper">Help</span>}
          key="10"
        >
          <MenuItem key="10-1">Web Help</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">Reference</span>}
          key="11"
        >
          <SubMenu
            title={
              <span className="submenu-title-wrapper">Primary Care Links</span>
            }
            key="11-1"
          >
            <MenuItem key="11-1-1">PACT SharePoint</MenuItem>
            <MenuItem key="11-1-2">PCMM Training</MenuItem>
            <MenuItem key="11-1-3">VSCC PCMM Coordinator List</MenuItem>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">Mental Health Links</span>
            }
            key="11-2"
          >
            <MenuItem key="11-2-1">MH-PCMM MHTC SharePoint</MenuItem>
            <MenuItem key="11-2-2">BHIP Team Basics</MenuItem>
            <MenuItem key="11-2-3">Menthal Health Dashboard</MenuItem>
            <MenuItem key="11-2-4">Electronic Technical Manual</MenuItem>
          </SubMenu>
          <MenuItem key="11-3">OEF / OIF / OND Links</MenuItem>
          {/* <SubMenu title={<span className="submenu-title-wrapper">Primary Care Links</span>} key="11-3">
                        <MenuItem key="11-1-1">PACT SharePoint</MenuItem>
                        <MenuItem key="11-1-2">PCMM Training</MenuItem>
                        <MenuItem key="11-1-3">VSCC PCMM Coordinator List</MenuItem>
                    </SubMenu>                 */}
        </SubMenu>
      </Menu>
    </Box>
  );
};

export const UserAdminMenuComponent = (props: Props) => {
  return (
    <Box component="div" className="fullWidth AppMenu">
      <Menu mode="horizontal">
        <MenuItem key="1">Home</MenuItem>
        <SubMenu
          title={<span className="submenu-title-wrapper">Users</span>}
          key="2"
        >
          <MenuItem key="2-1">Option 1</MenuItem>
          <MenuItem key="2-2">Option 2</MenuItem>
          <MenuItem key="2-3">Option 3</MenuItem>
        </SubMenu>
      </Menu>
    </Box>
  );
};
