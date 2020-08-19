import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Switch,
    IconButton,
    CardActions,
    Collapse,
} from '@material-ui/core';
import {
    AccessTime as AccessTimeIcon,
    ExpandMore as ExpandMoreIcon
} from '@material-ui/icons';
import clsx from 'clsx';

import { Images } from '@Root/config/images';
import useStyles from './style';


const Item = (props: any) => {
    const classes = useStyles();
    const [isActive, setActive] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const {
        item, 
        handleEdit, 
        isShowStatusBtn = true,
        isShowViewBtn = true,
    } = props;

    const handleChange = (event: any) => {
        event.preventDefault();
        setActive(!isActive);
    }

    const handleExpandClick = (event: any) => {
        event.preventDefault();
        setExpanded(!isExpanded);
    }

    return (
        <Card className={classes.root} variant="outlined">
            <div className={classes.cardHeader}>
                <div className={`${classes.leftArea} flex-row`}>
                    <Typography className={classes.title}>{item?.name}</Typography>
                    {
                        isShowStatusBtn &&
                            <Typography className={classes.titleStatus}>{item?.status}</Typography>
                    }
                </div>
                <ul className={classes.rightArea}>
                    <li className={classes.iconSwitch}>
                        <Typography variant="body2" className={classes.txtSwitch}>Active</Typography>
                        <Switch
                            size="small"
                            checked={isActive}
                            onChange={handleChange}
                            name="activeStatus"
                            classes={{
                                // bar: classes.iOSBar,
                                // icon: classes.iOSIcon,
                                // iconChecked: classes.iOSIconChecked,
                                checked: classes.iOSChecked,
                                track: classes.iOSTrack,
                                sizeSmall: classes.iOSSmall
                            }}
                        />
                    </li>
                    {
                        isShowViewBtn &&
                            <li className={classes.groupIcon}>
                                <button onClick={event => handleEdit(event, item)}>
                                    <img src={Images.Eye} alt="View" />
                                </button>
                            </li>
                    }
                    <li className={classes.groupIcon}>
                        <button onClick={event => handleEdit(event, item)}>
                            <img src={Images.Edit} alt="Edit" />
                        </button>
                    </li>
                </ul>
            </div>
            <CardContent className={classes.cardContent}>
                <Collapse in={isExpanded} collapsedHeight={52}>
                    <Typography>{item?.description}</Typography>
                </Collapse>
            </CardContent>
            <div className={classes.cardFooter}>
                <div className="flex-row">
                    <div className={`${classes.leftArea} flex-row`}>
                        <AccessTimeIcon className={classes.iconClock} />
                        <Typography className={classes.subTitle}>Last updated: {item?.updated_at}</Typography>
                    </div>
                    <CardActions>
                        <Typography variant="body2" color="textSecondary">Show More</Typography>
                        <IconButton
                            onClick={handleExpandClick}
                            aria-label="show more"
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: isExpanded,
                            })}
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}

export default Item;