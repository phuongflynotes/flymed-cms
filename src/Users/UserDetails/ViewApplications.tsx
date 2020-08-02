import React from 'react';
import {
    Typography,
    Grid,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Icon,
    makeStyles,
    TablePagination,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableRow,
    Paper,
    TableHead,
  } from "@material-ui/core";
import { dataApplications } from '../../data/applications';

interface Props {};

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

  const columns = [
    { id: 'roleName', label: 'Role Name', minWidth: 170 },
    { id: 'permissionName', label: 'Permission Name', minWidth: 170 },
    { id: 'assigned', label: 'Assigned', minWidth: 170 },
  ]

const ViewApplications = (props: Props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isExpanded, setExpanded] = React.useState(false);

    const handleChangePage = (event: any, newPage:number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChange = (event: any) => {
        event.preventDefault();
        setExpanded(!isExpanded);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Accordion expanded={isExpanded} onChange={handleChange} className="customAccordion">
                    <AccordionSummary
                    expandIcon={<Icon className="fa fa-minus-square" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography className={classes.heading}>View Application Permissions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                                <TableBody>
                                {dataApplications.map((row, index) => (
                                    <TableRow key={row.roleName}>
                                    <TableCell component="th" scope="row">
                                        {row.roleName}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {row.permissionNames.length > 0 &&
                                        row.permissionNames.map((perm, i) => (
                                            <div key={`perm-${index}-${i}`}>{perm}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {row.assigned ? "Yes" : "No"}
                                    </TableCell>
                                    </TableRow>
                                ))}

                                </TableBody>
                                <TableFooter>
                                <TableRow>
                                    <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={dataApplications.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
                                </TableRow>
                                </TableFooter>
                            </Table>
                            </TableContainer>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}
export default ViewApplications;