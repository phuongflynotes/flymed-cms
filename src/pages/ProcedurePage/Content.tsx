import React, { useState, useEffect, useCallback } from 'react';
import {
    FormControl,
    OutlinedInput,
    InputAdornment,
    Select,
    Button
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Pagination from '@material-ui/lab/Pagination';

import Breadcrumb from '@Root/components/Breadcrumb';
import Item from '@Root/components/Item';
import ModalMain from '@Root/components/ModalMain';
import {showModalMain, hideModalMain} from '@Root/services/modalMain/actions';
import {handleAddProcedures, handleEditProcedures, handleFilter} from '@Root/services/procedures/actions';
import { ContentMultipleListLoader } from '@Root/components/ContentLoader';

import useStyles from './style';

const itemsRoute = [
    { to: '/', label: 'Procedures' },
    { to: '/risk', label: 'Risks' },
    { to: '/benefit', label: 'Benefits' },
    { to: '/method', label: 'Methods' },
    { to: '/consideration', label: 'Considerations' },
];

const Content = (props: any) => {
    const classes = useStyles();
    const { location, procedures, totalPages, currentPage, searchQuery, loading } = props;
    const [txtFilter, setTxtFilter] = useState('');
    const [txtSearch, setTxtSearch] = useState(searchQuery);
    const [dataForm, setDataForm] = useState({
        name: '',
        description: ''
    });
    const [isSubmit, setSubmit] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const [idProcedure, setIdProcedure] = useState(null);

    //reset timeout when user input, handle input search
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(handleFilter({searchQuery: txtSearch, status: txtFilter}));
        }, 1500);
        return () => clearTimeout(timeout);
    }, [txtSearch]);

    const dispatch = useDispatch();
    const modalMainState = useSelector((state:any) => state?.modalMainState);

    const handleClick = (event: any) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const handleSearchChange = (event: any) => {
        event.persist();
        const value = event.target.value;
        setTxtSearch(value);
    }

    const handleFilterChange = (event: any) => {
        event.preventDefault();
        setTxtFilter(event.target.value);
        dispatch(handleFilter({searchQuery: txtSearch, status: event.target.value}))
    }

    const handleShowModal = (event:any) => {
        event.persist();
        dispatch(showModalMain());
    }

    const handleHideModal = (event:any) => {
        event.preventDefault();
        dispatch(hideModalMain());
    }

    const handleSave = async (event:any) => {
        event.preventDefault();

        setSubmit(true);
        if(dataForm.name !== '') {
            await dispatch(handleAddProcedures(dataForm));
            await setSubmit(false);
            await setDataForm({name: '', description: ''});
        }

    }

    const handleChange = (event:any) => {
        event.preventDefault();
        const {name, value} = event.target;

        setDataForm({...dataForm, [name]: value});
    }

    const handlePagination = (event: any, currentPage: number) => {
        event.preventDefault();
        dispatch(handleFilter({currentPage}));
    }

    const handleEdit = useCallback(async (event:any, item = null) => {
        await setIsNew(false);
        await setDataForm({
            name: item?.name,
            description: item?.description,
        });
        await setIdProcedure(item?._id);
        await handleShowModal(event);
    }, [idProcedure]);

    const handleUpdate = (event: any) => {
        event.persist();

        dispatch(handleEditProcedures({ ...dataForm, id: idProcedure}));
    }

    return (
        <div className={`${classes.contentContainer}`}>
            <Breadcrumb items={itemsRoute} handleClick={handleClick} pathname={location.pathname} />
            <div className={`${classes.filterContainer} flex-row`}>
                <FormControl className={classes.searchContainer} variant="outlined" size="small">
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
                <FormControl variant="outlined" className={classes.formControl} size="small">
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
                <Button onClick={handleShowModal} variant="contained" color="primary" startIcon={<AddIcon />} className={classes.btnAdd}>
                    Add Procedure
                </Button>
            </div>
            {
                loading ?
                    <ContentMultipleListLoader />
                :
                    (procedures && procedures.size > 0) && 
                        <React.Fragment>
                            { procedures.map((procedure:any, index:number) => <Item handleEdit={handleEdit} item={procedure} key={`procedure-${index}-${procedure._id}`} />) }
                            { totalPages > 1 && <Pagination onChange={handlePagination} page={currentPage} count={totalPages} shape="rounded" showFirstButton showLastButton className={classes.pagination} /> }
                        </React.Fragment>
            }
            <ModalMain 
                isOpen={modalMainState?.isShowModal} 
                handleHideModal={handleHideModal} 
                handleSave={handleSave} 
                handleUpdate={handleUpdate}
                handleChange={handleChange}
                name={dataForm.name}
                description={dataForm.description} 
                modalTitle={`${isNew ? 'Procedure' : dataForm.name}`}
                errorName={(isSubmit && dataForm.name === '')}
                isSubmit={isSubmit}
                isNew={isNew}
            />
        </div>
    )
}

export default Content;