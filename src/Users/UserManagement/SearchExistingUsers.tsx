import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  Container,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import {dataUsers} from "../../data/users";
import "../../css/searchUser.scss";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  rootForm: {
    flexGrow: 1,
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
}));

interface Props {}

const SearchExistingUsers = (props: any) => {
  const {history} = props;
  const classes = useStyles();
  const [userName, setUserName] = React.useState([]);

  const handleSelectUser = (event: any) => {
    event.preventDefault();
    const { options } = event.target;
    const value:any = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setUserName(value);
  };

  const goToNextPage = (event: any) => {
    event.preventDefault();

    history.push('user-details');
  }

  return (
    <Container>
      <div className="headerContainer">
        <Typography
          component="h4"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Search for Existing Users to Manage
        </Typography>
      </div>
      <div className="formContainer">
        <form className={classes.rootForm} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={3} className="labelArea">
              Select User:*
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                fullWidth
                variant="outlined"
                size="small"
                onChange={handleSelectUser}
              />
              <label>(Enter some text to filter the list below)</label>
              <FormControl className={classes.formControl}>
                <Select
                  multiple
                  native
                  value={userName}
                  onChange={handleSelectUser}
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                  className="selectMultiple"
                >
                  {dataUsers.map((item: any, index: number) => (
                    <option
                      key={`select-user-${item.id}`}
                      value={item.name}
                    >{item.name}</option>
                  ))}
                </Select>
              </FormControl>
              <div className="group-button">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={goToNextPage}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Cancel
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SearchExistingUsers;
