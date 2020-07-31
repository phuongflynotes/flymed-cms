import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  InputLabel,
  FormControl,
  Select,
  NativeSelect,
  Button,
} from "@material-ui/core";
import { MailOutline } from "@material-ui/icons/";
import "../../css/searchuser.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    formControlTimeZone: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
  })
);

const assignedRole = ["Assigned Role"];

const otherRole = ["Other Role"];

const assignedStation = ["Assigned Station"];

const timeZone = [
  "Pacific Time Zone",
  "Mountain Time Zone",
  "Central Time Zone",
  "Eastern Time Zone",
];

const userTemp = ["PCMM", "User ID", "Last, First M"];

function SitePreferences() {
  const classes = useStyles();
  const [assignedRoles, setAssignedRoles] = React.useState<string[]>([]);
  const [otherRoles, setOtherRoles] = React.useState<string[]>([]);
  const [assignedStations, setAssignedStations] = React.useState<string[]>([]);
  const [timeZones, setTimeZones] = React.useState<string[]>([]);

  const handleAssignRoles = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setAssignedRoles(value);
  };

  const handleOtherRoles = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setOtherRoles(value);
  };

  const handleAssignedStations = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setAssignedStations(value);
  };

  const handleTimeZone = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setTimeZones(value);
  };

  return (
    <React.Fragment>
      <Box className="container">
        <h4 className="titleContainer">Site Preferences</h4>
      </Box>
      <Box className="container">
        <p>
          <b>Application Profile for: </b>
          {userTemp[0]}
        </p>
      </Box>
      <Box className="container">
        <p>
          <b>User ID: </b>
          {userTemp[1]}
        </p>
      </Box>
      <Box className="container" style={{ alignItems: "center" }}>
        <p>
          <b>User Name: </b>
          {userTemp[2]}
        </p>
        <MailOutline />
      </Box>
      <Box className="container">
        <FormControl className={classes.formControl}>
          <InputLabel shrink>Assigned Roles:</InputLabel>
          <Select
            multiple
            native
            value={assignedRoles}
            onChange={handleAssignRoles}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {assignedRole.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="container">
        <FormControl className={classes.formControl}>
          <InputLabel shrink>
            Roles for other CISS partner application:
          </InputLabel>
          <Select
            multiple
            native
            value={otherRoles}
            onChange={handleOtherRoles}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {otherRole.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="container">
        <FormControl className={classes.formControl}>
          <InputLabel shrink>Assigned Stations:</InputLabel>
          <Select
            multiple
            native
            value={assignedStations}
            onChange={handleAssignedStations}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {assignedStation.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="container">
        <FormControl className={classes.formControlTimeZone}>
          <InputLabel>Time Zone:</InputLabel>
          <NativeSelect
            value={timeZones}
            onChange={handleTimeZone}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {timeZone.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box className="container" style={{ alignItems: "center", margin: 20 }}>
        <Button variant="contained" color="primary" style={{ marginRight: 20 }}>
          Submit
        </Button>
        <Button variant="contained">Cancel</Button>
      </Box>
      <Box>
        <p>{assignedRoles}</p>
        <p>{otherRoles}</p>
        <p>{assignedStations}</p>
        <p>{timeZones}</p>
      </Box>
    </React.Fragment>
  );
}

export default SitePreferences;
