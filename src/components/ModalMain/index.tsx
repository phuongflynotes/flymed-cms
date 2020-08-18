import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {
    Button,
    TextField,
    Dialog,
    DialogTitle as MuiDialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './style';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

interface Props {
    modalTitle?: string,
    btnPrimaryName?: string,
    btnSecondaryName?: string,
    isOpen?: boolean,
    name?: string,
    description?: string,
    handleClose?: any,
    handleSave?: any,
    handleUpdate?: any,
    handleHideModal?: any,
    handleChange?: any,
    isNew?: boolean,
    errorName?: boolean,
    isSubmit?: boolean,
}

const ModalMain: React.FC<Props> = ({
    modalTitle = 'Title',
    btnPrimaryName = 'Save',
    btnSecondaryName = 'Cancel',
    isOpen = false,
    name = '',
    description = '',
    handleSave = () => { },
    handleUpdate = () => { },
    handleHideModal = () => { },
    handleChange = () => { },
    isNew = true,
    errorName = false,
    isSubmit = false,
}) => {

    const classes = useStyles();
    const titleStr = isNew ? "Add " : "Edit:";

    return (
        <Dialog onClose={handleHideModal} aria-labelledby="customized-dialog-title" 
            open={isOpen} fullWidth={true} disableBackdropClick={true}>
            <DialogTitle id="form-dialog-title" classes={{root: classes.header}} onClose={handleHideModal}>
                {
                    isNew ?
                        <label className={classes.title}>{titleStr} {modalTitle}</label>
                    :
                    <React.Fragment>
                        <label className={classes.title}>{titleStr}</label>
                        <label className={classes.mainTitle}>{modalTitle}</label>
                    </React.Fragment>
                }
                
            </DialogTitle>
            <DialogContent>
                <div className={classes.formControl}>
                    <label>Name</label>
                    <TextField
                        placeholder="Name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        name="name"
                        onChange={handleChange}
                        error={errorName}
                    />
                </div>
                <div className={classes.formControl}>
                    <label>Description</label>
                    <TextField
                        placeholder="Description"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={description}
                        name="description"
                        onChange={handleChange}
                    />
                </div>
            </DialogContent>
            <DialogActions className={classes.btnGroup}>
                <Button disabled={isSubmit} autoFocus onClick={handleHideModal} className={classes.btnSecondary} variant="contained" color="primary">{btnSecondaryName}</Button>
                <Button autoFocus onClick={isNew ? handleSave : handleUpdate} className={classes.btnPrimary} variant="contained" color="primary">{btnPrimaryName}</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalMain;