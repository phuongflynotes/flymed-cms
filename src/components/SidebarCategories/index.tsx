import React, {useState} from 'react';
import {
    makeStyles,
    FormControl,
    Select
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import {COLORS} from '@Root/config/theme';
import ItemLink from '@Root/components/ItemLink';
import {sidebarTemplates, sidebarCategories} from '@Root/utils';

const useStyles = makeStyles(() => ({
    sidebarCategoriesContainer: {
        flex: 1,
        overflowY: "scroll",
    },
    blockContainer: {
        padding: "0 36px 23px 0",

        '&::after': {
            content: '""',
            display: "block",
            borderBottom: "1px solid #EEEEEE",
            margin: "38px 31px 23px",
        },
        '&:last-child': {
            '&::after': {
                content: '""',
                display: "none",
            },
        }
    },
    logo: {
        margin: "31px 0 31px 56px",
    },
    header: {
        color: COLORS.greenColor,
        paddingLeft: '56px',
        marginBottom: '11px'
    },
    sidebarMainContainer: {
        flex: 0.8
    },
    itemContainer: {
        marginRight: "28px"
    },
    styleItemRowActive: {
        padding: "10px 0 14px 56px",
        backgroundColor: `${COLORS.lightGreyColor}`,
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        display: "flex",
        alignItems: "center"
    },
    styleItemRow: {
        padding: "10px 0 14px 56px",
        display: "flex",
        alignItems: "center",

        '&:hover': {
            padding: "10px 0 14px 56px",
            backgroundColor: `${COLORS.lightGreyColor}`,
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
        }
    },
    formControl: {
        flex: 1,
        margin: "0 0 0 56px",
        display: "flex",
    }
}));

const SidebarCategories = (props:any) => {
    const classes = useStyles();
    const [languages, setLanguages] = useState('en');
    const { location } = props;

    const handleChange = (event:any) => {
        event.preventDefault();
        setLanguages(event.target.value);
    }

    return (
        <div className={`${classes.sidebarCategoriesContainer} border-right flex-column`}>
            <h3 className={classes.logo}>Flymed</h3>
            <div className={`${classes.blockContainer}`}>
                <h6 className={classes.header}>Language</h6>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                    <Select
                        native
                        value={languages}
                        onChange={handleChange}
                    >
                        <option value={'en'}>English</option>
                        <option value={'jp'}>Japanese</option>
                        <option value={'zh'}>Chinese</option>
                    </Select>
                </FormControl>
            </div>
            <div className={`${classes.blockContainer}`}>
                <h6 className={classes.header}>Template</h6>
                <ItemLink 
                    items={sidebarTemplates} 
                    styleContainer={classes.itemContainer} 
                    styleItemRow={classes.styleItemRowActive}
                    pathname={location.pathname}
                />
            </div>
            <div className={`${classes.blockContainer}`}>
                <h6 className={classes.header}>Main base data</h6>
                <ItemLink 
                    items={sidebarCategories} 
                    styleContainer={classes.itemContainer} 
                    styleItemRow={classes.styleItemRow}
                    pathname={location.pathname}
                />
            </div>
        </div>
    )
}

export default withRouter(SidebarCategories);