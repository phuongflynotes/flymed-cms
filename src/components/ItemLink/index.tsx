import React from 'react';
import {
    makeStyles,
    Link
} from '@material-ui/core';

import {COLORS} from '@Root/config/theme';

const useStyles = makeStyles(() => ({
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
        alignItems: "center"
    },
    iconNote: {
        width: "24px",
        height: "24px",
        marginRight: "15px",
    }
}));

type Props = {
    items?: any[],
    styleContainer?: string,
    styleItemRow?: string,
    iconUrl?: string,
    iconStyle?: string,
    active?: boolean,
    pathname?: string,
}

const ItemLink:React.FC<Props> = (props: any) => {
    const { 
        items = [],
        styleContainer = null,
        iconUrl = '',
        iconStyle = null,
        pathname = '/'
    } = props;

    const classes = useStyles();

    return (
        <nav className={styleContainer !== '' ? styleContainer : classes.itemContainer}>
            { (items.length > 0) && items.map((item:any, index:number) => (
                <Link
                    color="inherit"
                    noWrap
                    key={item.title ? item.title : index}
                    variant="body2"
                    href={item.url ? item.url : '#'}
                    className={item.url === pathname ? classes.styleItemRowActive : classes.styleItemRow}
                >
                    { (iconUrl !== '') && <img src={iconUrl} alt="note" className={iconStyle !== '' ? iconStyle : classes.iconNote} /> }
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}

export default ItemLink;