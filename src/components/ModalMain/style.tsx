import {
    makeStyles,
} from '@material-ui/core';

import { COLORS } from '@Root/config/theme';

const useStyles = makeStyles(() => ({
    header: {
        textAlign: "center"
    },
    title: {
        color: COLORS.lightBlackColor,
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        marginRight: 15,
    },
    mainTitle: {
        color: COLORS.blueColor,
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        marginRight: 15,
    },
    formControl: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 23,

        '& label': {
            color: COLORS.darkGreyColor,
            fontSize: 14,
            lineHeight: "187.5%",
            fontFamily: "Poppins-Regular",
            marginBottom: 10,
        }
    },
    btnGroup: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 39px 50px",
    },
    btnSecondary: {
        borderRadius: 4,
        backgroundColor: COLORS.platinumColor,
        color: COLORS.philippineGrayColor,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        flex: 0.3
    },
    btnPrimary: {
        borderRadius: 4,
        backgroundColor: COLORS.brightGreenColor,
        color: COLORS.whiteColor,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        flex: 0.3
    }
}));

export default useStyles;