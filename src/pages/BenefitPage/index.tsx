import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// import SidebarMain from '@Root/components/SidebarMain';
// import SidebarCategories from '@Root/components/SidebarCategories';
import {fetchAllBenefits} from '@Root/services/benefits/actions';
import { IGlobalState } from '@Root/types';

import Content from './Content';
import useStyles from '@Root/utils/globalStyle';

const BenefitPage = (props: any) => {
    const classes = useStyles();
    const benefitsState = useSelector((state:IGlobalState) => state.benefitsState);
    const dispatch = useDispatch();
    const benefits = benefitsState.get('benefits');
    const totalPages = benefitsState.get('totalPages');
    const currentPage = benefitsState.get('currentPage');
    const loading = benefitsState.get('loading');
    const searchQuery = benefitsState.get('searchQuery');

    useEffect(() => {
        dispatch(fetchAllBenefits({payload: {}}));
    }, []);

    return (
        <div className={`${classes.container} flex-column`}>
            <Content benefits={benefits} totalPages={totalPages} loading={loading}
                currentPage={currentPage} searchQuery={searchQuery} {...props} 
            />
        </div>
    )
}

export default BenefitPage;