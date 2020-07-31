import React from "react";
import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";
import "../../css/searchuser.css";

interface Props {}

const SearchUsers = (props: Props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <React.Fragment>
      <Box className="container">
        <h4 className="titleContainer">Search for Users</h4>
      </Box>
      <Box className="container">
        <FormControl component="fieldset">
          <h3>Select Type of User Search:</h3>
          <RadioGroup
            aria-label="userType"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="userId"
              control={<Radio />}
              label="Based on User ID"
            />
            <FormControlLabel
              value="name"
              control={<Radio />}
              label="Using the full Last Name OR Using a part of the First Name and the full Last Name"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className="container">
        <h3 style={{ marginRight: 200 }}>Last Name *</h3>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
      <Box className="container">
        <h3 style={{ marginRight: 217 }}>First Name</h3>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
      </Box>
      <Box className="container">
        <p style={{ width: "80%" }}>
          (Type in the full first name or any part of it. Please use the *
          wildchar to indicate that you are passing a partial first name. For
          example, to search for all first names with the letters "ohn" in them,
          use *"ohn"* as the first name.)
        </p>
      </Box>
    </React.Fragment>
  );
};

export default SearchUsers;
