import React, { useState } from 'react';
import {
    FormControl,
    OutlinedInput,
    InputAdornment,
    Select,
    Button
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Pagination from '@material-ui/lab/Pagination';

import Breadcrumb from '@Root/components/Breadcrumb';
import Item from '@Root/components/Item';
import useStyles from './style';

const items = [
    { to: '/', label: 'Procedures' },
    { to: '/risk', label: 'Risks' },
    { to: '/benefit', label: 'Benefits' },
    { to: '/method', label: 'Methods' },
    { to: '/consideration', label: 'Considerations' },
];

const Content = (props: any) => {
    const classes = useStyles();
    const { location } = props;
    const [txtSearch, setTxtSearch] = useState('');
    const [txtFilter, setTxtFilter] = useState('');

    const handleClick = (event: any) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const handleSearchChange = (event: any) => {
        event.preventDefault();
        setTxtSearch(event.target.value);
    }

    const handleFilterChange = (event: any) => {
        event.preventDefault();
        setTxtFilter(event.target.value);
    }

    return (
        <div className={`${classes.contentContainer}`}>
            <Breadcrumb items={items} handleClick={handleClick} pathname={location.pathname} />
            <div className={`${classes.filterContainer} flex-row`}>
                <FormControl className={classes.searchContainer} variant="outlined">
                    <OutlinedInput
                        id="outlined-search"
                        value={txtSearch}
                        onChange={handleSearchChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        native
                        value={txtFilter}
                        onChange={handleFilterChange}
                        inputProps={{
                            name: 'filter',
                            id: 'outlined-filter-native',
                        }}
                    >
                        <option value={''} disabled>Filter</option>
                        <option value={'draft'}>Draft</option>
                        <option value={'pending'}>Pending approval</option>
                        <option value={'approved'}>Approved</option>
                        <option value={'active'}>Active</option>
                        <option value={'inactive'}>Inactive</option>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" startIcon={<AddIcon />} className={classes.btnAdd}>
                    Add Procedure
                </Button>
            </div>
            <Item />
            <Pagination count={10} shape="rounded" showFirstButton showLastButton className={classes.pagination} />
        </div>
    )
}

export default Content;