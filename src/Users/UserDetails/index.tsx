import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Select,
  Button,
  TextField,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ViewApplications from './ViewApplications';
import { dataRoles, dataStations } from "../../data/userDetails";
import { dataTimeZones } from "../../data/timeZones";
import "./styles.scss";

interface Props {}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const UserDetails = (props: any) => {
  const {history} = props;
  const classes = useStyles();
  const [roles, setRoles] = React.useState([]);
  const [rolesSelected, setRolesSelected] = React.useState([]);
  const [timeZonesSelected, setTimeZones] = React.useState('Dateline Standard Time');
  const [txtAvailable, setTxtAvailable] = React.useState("");
  const [txtAssigned, setTxtAssigned] = React.useState("");

  const dataRolesSelected = dataRoles.slice(1, 5);
  const dataStationsSelected = dataStations.slice(1, 5);

  const handleSelectRole = (event: any) => {
    event.preventDefault();
    const { options } = event.target;
    const value: any = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setRoles(value);
  };

  const handleSelectTimeZones = (event: any) => {
    event.preventDefault();
    setTimeZones(event.target.value);
  };

  const goToNextPage = (event: any) => {
    event.preventDefault();
    history.push("view-application");
  }

  return (
    <Container className="userDetailContainer">
      <div className="headerContainer">
        <Typography
          component="h4"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          User Details
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={5} className="labelArea">
          Application Profile for:
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          PCMM
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={5} className="labelArea">
          Does a CISS Portal account exist for this user?:
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          Yes
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={5} className="labelArea">
          User ID:
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          VHAISPALMACJ
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={5} className="labelArea">
          User Name:
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          Almacen, Joy
          <FontAwesomeIcon className="btn-icon" icon="envelope" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={5} className="labelArea">
          <div className="flex-column">
            <label>Available Role:</label>
            <Select
              className="role-remove has-border"
              inputProps={{
                id: "select-role-remove",
              }}
              multiple
              native
              value={rolesSelected}
            >
              {dataRolesSelected.map((item, i) => (
                <option value={item.id} key={`selected-roles-${item.id}-${i}`}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs>
          <div className="flex-column group-btn">
            <Button>
              <FontAwesomeIcon icon="caret-left" />
            </Button>
            <Button>
              <FontAwesomeIcon icon="caret-right" />
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="flex-row availabled-role-container">
            <div className="flex-column">
              <label className="title">Availabled Role:</label>
              <Select
                id="userDetailSelectMulti"
                className="availabled-role-area has-border"
                multiple
                native
                value={roles}
                onChange={handleSelectRole}
              >
                {dataRoles.map((item, i) => (
                  <option
                    value={item.id}
                    key={`selected-roles-original-${item.id}-${i}`}
                  >
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>
            <label className="notes-area">
              (To assign/unassign the role, drag a role from one list to the
              other or select a role using the Tab key and move it between the
              lists using the left or right arrow keys. )
            </label>
          </div>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5} className="labelArea">
            Other Assigned Roles:
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            CISS_USER
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5} className="labelArea">
            <div className="flex-column">
              <div className="flex-row">
                <label className="text-right title">Available Stations:</label>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={txtAvailable}
                />
              </div>
              <label className="text-highlight">
                (Type letters of the station name or number to search...)
              </label>
              <Select
                className="available-station-area has-border"
                multiple
                native
                value={[]}
              >
                {dataStationsSelected.map((item) => (
                  <option
                    value={item.id}
                    key={`select-stations-original-${item.id}`}
                  >
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>
          </Grid>
          <Grid item xs>
            <div className="flex-column group-btn">
              <Button>
                <FontAwesomeIcon icon="caret-left" />
              </Button>
              <Button>
                <FontAwesomeIcon icon="caret-right" />
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex-row">
              <div className="flex-column">
                <div className="flex-row">
                  <label className="text-right title">Assigned Stations:</label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={txtAssigned}
                  />
                </div>
                <label className="text-highlight">
                  (Type letters of the station name or number to search...)
                </label>
                <Select
                  className="stations-area has-border"
                  multiple
                  native
                  value={[]}
                >
                  {dataStations.map((item, i) => (
                    <option
                      value={item.id}
                      key={`select-stations-${item.id}-${i}`}
                    >
                      {item.name}
                    </option>
                  ))}
                </Select>
              </div>
              <label className="notes-area">
                (To assign/unassign the station, drag a station from one list to
                the other or select a station using the Tab key and move it
                between the lists using the left or right arrow keys. )
              </label>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5} className="labelArea">
            Other Assigned Roles:
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <div className="flex-row">
              <div className="flex-column">
                <label>CHEVENNE VA MEDICAL (#442 Inactive)</label>
                <label>TONASKET VA CLINIC (#668QF Inactive)</label>
              </div>
              <label className="notes-area">
                (These are stations that the currently logged in user doesnt
                have privileges to assign or remove from the user being managed)
              </label>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5} className="labelArea">
            Locked:
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5} className="labelArea">
            Inactivate:
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5} className="labelArea">
            Time Zone:
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Select
                native
              className="has-border"
              value={timeZonesSelected}
              defaultValue={timeZonesSelected}
              onChange={handleSelectTimeZones}
            >
              {dataTimeZones.map((item, i) => (
                <option value={item.text} key={`select-timezones-${i}`}>
                  {item.text}
                </option>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="btnGroup">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={goToNextPage}
          >
            Submit
          </Button>{" "}
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Cancel
          </Button>{" "}
        </Grid>
        <ViewApplications />
      </Grid>
    </Container>
  );
};

export default UserDetails;
