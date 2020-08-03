import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, TextareaAutosize } from '@material-ui/core';
import "../css/exception.scss";

interface ChildComponentProps extends RouteComponentProps<any> {}

const ExceptionHandle : React.SFC<ChildComponentProps> = ({ history }) =>{

    const [fakeError, setFakeError] = useState("");

    useEffect(() => {
        // create fake error
        // ** Todo: check with API -> get error **
        try {
            getFakeError();
        } catch (err) {
            setFakeError(err)
        }
    }, []);

    const getFakeError = () => {
        let isError = true;
        if (isError) {
            throw new Error("Something went wrong")
        }
    }

    return (
        <React.Fragment>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="exception-section"
            >
                <p className="main-title">Error!</p>
                <span className="margin-bottom-1">Sorry, but we have experienced an unrecoverable error.</span>
                <span className="margin-bottom-1">The error is detailed in the following box (which you may choose to send to a system administrator): </span>
                <TextareaAutosize disabled className="error-textarea" aria-label="minimum height" rowsMin={25} defaultValue={fakeError} />

                <p className="redirect-link margin-bottom-3">
                    <a onClick={() => history.push('/')}>
                        Back to Home
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                            <path fillRule="evenodd" d="M6 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H6.5A.5.5 0 0 1 6 8zm-2.5 6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z" />
                        </svg>
                    </a>
                </p>

            </Grid>
            
        </React.Fragment>
    )
}

export default ExceptionHandle;