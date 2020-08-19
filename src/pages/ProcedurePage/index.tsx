import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchAllProcedures} from '@Root/services/procedures/actions';
import { IGlobalState } from '@Root/types';

import Content from './Content';
import useStyles from './style';

const ProcedurePage = (props: any) => {
    const classes = useStyles();
    const proceduresState = useSelector((state:IGlobalState) => state.proceduresState);
    const dispatch = useDispatch();
    const procedures = proceduresState.get('procedures');
    const totalPages = proceduresState.get('totalPages');
    const currentPage = proceduresState.get('currentPage');
    const loading = proceduresState.get('loading');
    const searchQuery = proceduresState.get('searchQuery');

    useEffect(() => {
        dispatch(fetchAllProcedures({payload: {}}));
    }, []);

    return (
        <div className={`${classes.container} flex-row`}>
            <Content procedures={procedures} totalPages={totalPages} loading={loading}
                currentPage={currentPage} searchQuery={searchQuery} {...props} 
            />
        </div>
    )
}

export default ProcedurePage;