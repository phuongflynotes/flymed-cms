import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import SidebarMain from '@Root/components/SidebarMain';
import SidebarCategories from '@Root/components/SidebarCategories';
import {fetchAllProcedures} from '@Root/services/procedures/actions';
// import {IProceduresState} from '@Root/services/procedures/types';

import Content from './Content';
import useStyles from './style';

const HomePage = (props: any) => {
    const classes = useStyles();
    // const proceduresState = useSelector((state:IProceduresState) => state.procedures);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProcedures({payload: {}}));
    }, []);

    return (
        <div className={`${classes.homeContainer} flex-row`}>
            <SidebarMain {...props} />
            <SidebarCategories {...props} />
            <Content {...props} />
        </div>
    )
}

export default HomePage;