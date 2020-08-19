import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchAllRisks} from '@Root/services/risks/actions';
import { IGlobalState } from '@Root/types';

import Content from './Content';
import useStyles from '@Root/utils/globalStyle';

const RiskPage = (props: any) => {
    const classes = useStyles();
    const risksState = useSelector((state:IGlobalState) => state.risksState);
    const dispatch = useDispatch();
    const risks = risksState.get('risks');
    const totalPages = risksState.get('totalPages');
    const currentPage = risksState.get('currentPage');
    const loading = risksState.get('loading');
    const searchQuery = risksState.get('searchQuery');

    useEffect(() => {
        dispatch(fetchAllRisks({payload: {}}));
    }, []);

    return (
        <div className={`${classes.container} flex-column`}>
            <Content risks={risks} totalPages={totalPages} loading={loading}
                currentPage={currentPage} searchQuery={searchQuery} {...props} 
            />
        </div>
    )
}

export default RiskPage;