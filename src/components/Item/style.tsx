import {
    makeStyles,
} from '@material-ui/core';

import { COLORS } from '@Root/config/theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "column",
        display: "flex",
        marginBottom: "24px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        color: COLORS.blueColor,
        fontSize: "16px",
        fontFamily: "Poppins-Bold",
        marginRight: "21px"
    },
    subTitle: {
        color: COLORS.greyColor,
        fontSize: "12px",
        fontFamily: "Poppins-Regular"
    },
    titleStatus: {
        borderRadius: "100px",
        padding: "10px 14px",
        fontSize: "11px",
        fontFamily: "Poppins-Medium",
        backgroundColor: COLORS.lightOrangeColor,
        color: COLORS.orangeColor
    },
    leftArea: {
        flex: 1,
        alignItems: "center",
    },
    rightArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    cardHeader: {
        flexDirection: "row",
        display: "flex",
        padding: "23px 20px 30px 15px",
    },
    cardContent: {
        padding: "0 20px 21px 15px",
    },
    cardFooter: {
        flexDirection: "column",
        display: "flex",
        padding: "0 20px 0 15px",
    },
    iconClock: {
        color: COLORS.greyColor,
        marginRight: "6px"
    },
    iconSwitch: {
        marginRight: "8px",
        display: "flex",
        alignItems: "center"
    },
    content: {
        color: COLORS.darkGreyColor,
        fontSize: "14px",
        fontFamily: "Poppins-Medium",
        textAlign: "left",
        lineHeight: "187.5%"
    },
    groupIcon: {
        marginLeft: "18px",
        '& a': {
            width: "16px",
            height: "16px",
            padding: "9px",
            backgroundColor: COLORS.whiteColor,
            borderRadius: "100%",
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.09)",
            display: "block",

            '& img': {
                width: "100%",
            }
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        color: COLORS.grayishBlue,
        '& span': {
            fontSize: "12px",
            fontFamily: "Poppins-Regular",
            '& svg': {
                width: "16px",
                height: "16px"
            }
        }
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    iOSTrack: {
        backgroundColor: "rgba(58, 183, 123, 0.8) !important"
    },
    iOSChecked: {
        color: `${COLORS.brightGreen} !important`,
    },
    iOSSmall: {
        padding: "4px"
    },
    txtSwitch: {
        color: COLORS.greyColor,
        fontFamily: "Poppins-Regular",
        fontSize: "14px",
        lineHeight: "187.5%"
    }
}));

export default useStyles;