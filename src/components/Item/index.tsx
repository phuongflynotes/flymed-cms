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


const Item = () => {
    const classes = useStyles();
    const [isActive, setActive] = useState(false);
    const [isExpanded, setExpanded] = useState(false);

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
                    <Typography className={classes.title}>Extraction</Typography>
                    <Typography className={classes.titleStatus}>Draft</Typography>
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
                    <li className={classes.groupIcon}>
                        <a href="#"><img src={Images.Eye} alt="View" /></a>
                    </li>
                    <li className={classes.groupIcon}>
                        <a href="#"><img src={Images.Edit} alt="View" /></a>
                    </li>
                </ul>
            </div>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.content} color="textSecondary" paragraph>
                    Extraction is a dental procedure to remove a tooth.
                    It is usually carried out using instruments to remove the tooth and may need to have the gum,
                    bone around the tooth or the tooth itself cut to ensure its removal. This can also be called a surgical extraction.
                    The extraction is normally needed because the tooth has a major problem, is unsaveable, unlikely to survive long term
                    or needs extraction for orthodontic treatment.
                </Typography>
            </CardContent>
            <div className={classes.cardFooter}>
                <div className="flex-row">
                    <div className={`${classes.leftArea} flex-row`}>
                        <AccessTimeIcon className={classes.iconClock} />
                        <Typography className={classes.subTitle}>Last updated: 30/10/2020</Typography>
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
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography className={classes.content} paragraph>Method:</Typography>
                        <Typography className={classes.content} paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                            </Typography>
                        <Typography className={classes.content} paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                        <Typography className={classes.content} paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                        <Typography className={classes.content}>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                    </CardContent>
                </Collapse>
            </div>
        </Card>
    );
}

export default Item;