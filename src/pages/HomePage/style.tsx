import {
    makeStyles,
} from '@material-ui/core';

import { COLORS } from '@Root/config/theme';

const useStyles = makeStyles(() => ({
    homeContainer: {
        height: "100vh",
    },
    logo: {
        width: "30px",
        height: "30px"
    },
    contentContainer: {
        flex: 2,
        padding: "31px 33px",
    },
    filterContainer: {
        margin: "20px 0 36px 0",
    },
    searchContainer: {
        marginRight: "33px",
    },
    formControl: {
        flex: 1,
        margin: "0 30px 0 0",
        display: "flex",
    },
    filterLabel: {
        color: COLORS.silverFoil
    },
    btnAdd: {
        backgroundColor: "#3AB77B",
        color: COLORS.whiteColor,
        borderRadius: "8px",
    },
    pagination: {
        display: "flex",
        justifyContent: "center"
    }
}));

export default useStyles;