import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Link,
    Avatar,
    Badge,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    ExpandMore
} from '@material-ui/icons';

import {topNav} from '@Root/utils';
import { Images } from '@Root/config/images';
import {COLORS} from '@Root/config/theme';

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        flex: 1,
    },
    appBarContainer: {
        boxShadow: "none",
        borderBottom: "1px solid #EEEEEE",
    },
    rightInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        backgroundColor: COLORS.whiteSmokeColor,
        borderRadius: "100%",
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        marginRight: '64px',
    },
    titleProfile: {
        fontFamily: "Poppins-SemiBold",
        lineHeight: "24px",
        marginRight: "10px"
    },
    toolbarLink: {
        marginRight: "22px",
        padding: "10px 15px",
        '&:hover': {
            borderRadius: "8px",
            padding: "10px 15px",
            backgroundColor: `${COLORS.lightGreyColor}`,
            textDecoration: "none"
        }
    },
    large: {
        width: "50px",
        height: "50px",
        marginRight: "12px",
    },
    notificationContainer: {
        marginRight: "24px"
    },
    badgeNotification: {
        backgroundColor: `${COLORS.greenColor}`
    },
    iconBell: {
        width: "32px",
        height: "32px"
    },
    iconButton: {
        '&:hover': {
            backgroundColor: "transparent"
        }
    },
    active: {
        borderRadius: "8px",
        padding: "10px 15px",
        backgroundColor: `${COLORS.lightGreyColor}`
    }
}));

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.container}>
            <AppBar color="transparent" position="static" className={classes.appBarContainer}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        FlyWheel
                    </Typography>
                    <nav>
                        { topNav.map((item:any) => (
                            <Link
                                color="inherit"
                                noWrap
                                key={item.title}
                                variant="body2"
                                href={item.url}
                                className={`${classes.toolbarLink} ${item.class === 'active' ? classes.active: ''}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <div className={classes.grow} />
                    <div className={`${classes.rightInfoContainer} flex-row`}>
                        <div className={classes.notificationContainer}>
                            <IconButton disableRipple={true}>
                                <Badge overlap="circle" badgeContent=" " variant="dot" classes={{ badge: classes.badgeNotification}}>
                                    <img src={Images.Bell} alt="notification" className={`${classes.iconBell}`} />
                                </Badge>
                            </IconButton>
                        </div>
                        <div className="userProfileContainer">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                disableRipple={true}
                                className={classes.iconButton}
                            >
                                <Avatar alt="avatar" src={Images.Avatar} className={classes.large} />
                                <Typography variant="h6" className={classes.titleProfile}>Magnus Traff</Typography>
                                <ExpandMore />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;