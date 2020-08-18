import React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './style';

const Waiting = () => {
    const classes = useStyles();
    const waitingState = useSelector((state: any) => state.waitingState);

    return (
        <div>
            <Backdrop className={classes.backdrop} open={waitingState.isShowWaiting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default Waiting;