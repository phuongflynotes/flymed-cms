import React from 'react';
import {
    makeStyles,
} from '@material-ui/core';

import {Images} from '@Root/config/images';
import {sidebarNavMain} from '@Root/utils';
import {COLORS} from '@Root/config/theme';
import ItemLink from '@Root/components/ItemLink';

const useStyles = makeStyles(() => ({
    sidebarMainContainer: {
        flex: 0.8
    },
    itemContainer: {
        marginRight: "28px"
    },
    styleItemRow: {
        padding: "9px 9px 9px 45px",
        backgroundColor: `${COLORS.lightGreyColor}`,
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        display: "flex",
        alignItems: "center"
    },
    logoContainer: {
        margin: "42px auto 24px 45px",
        alignItems: "center",
    },
    logo: {
        width: "30px",
        height: "30px",
        marginRight: "10px",
    },
    iconNote: {
        width: "24px",
        height: "24px",
        marginRight: "15px",
    }
}));

const SidebarMain = () => {
    const classes = useStyles();

    return (
        <div className={`${classes.sidebarMainContainer} border-right flex-column full-height`}>
            <div className={`${classes.logoContainer} flex-row`}>
                <img src={Images.Logo} alt="logo" className={classes.logo} />
                <h5>Flynotes.co.uk</h5>
            </div>
            <ItemLink 
                items={sidebarNavMain} 
                styleContainer={classes.itemContainer} 
                styleItemRow={classes.styleItemRow}
                iconUrl={Images.Note}
                iconStyle={classes.iconNote}
            />
        </div>
    )
}

export default SidebarMain;