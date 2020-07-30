import React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import "../../css/searchuser.css";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

interface Column {
  id: "userId" | "userName" | "title" | "department" | "office" | "phoneNumber";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "userId", label: "User ID", minWidth: 170 },
  { id: "userName", label: "User Name", minWidth: 100 },
  {
    id: "title",
    label: "title",
    minWidth: 170,
  },
  {
    id: "department",
    label: "department",
    minWidth: 170,
  },
  {
    id: "office",
    label: "Office",
    minWidth: 170,
  },
  {
    id: "phoneNumber",
    label: "phoneNumber",
    minWidth: 170,
  },
];

interface Data {
  userId: string;
  userName: string;
  title: string;
  department: string;
  office: string;
  phoneNumber: number;
}

function createData(
  userId: string,
  userName: string,
  title: string,
  department: string,
  office: string,
  phoneNumber: number
) {
  return { userId, userName, title, department, office, phoneNumber };
}

const rows = [
  createData("1", "1", "1", "1", "1", 1),
  createData("2", "2", "2", "2", "2", 2),
  createData("3", "3", "3", "3", "3", 3),
  createData("4", "4", "4", "4", "4", 4),
  createData("5", "5", "5", "5", "5", 5),
  createData("6", "6", "6", "6", "6", 6),
  createData("7", "7", "7", "7", "7", 7),
  createData("8", "8", "8", "8", "8", 8),
  createData("9", "9", "9", "9", "9", 9),
  createData("10", "10", "10", "10", "10", 10),
  createData("11", "11", "11", "11", "11", 11),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <Box className="container">
        <h4 className="titleContainer">User Search Results</h4>
      </Box>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.userName}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </React.Fragment>
  );
}
