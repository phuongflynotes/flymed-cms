import React from 'react';
import {
    Breadcrumbs,
    // Link,
    Typography
} from '@material-ui/core';

import {
    NavigateNext as NavigateNextIcon
} from '@material-ui/icons';

import * as _ from 'lodash';

interface Props {
    items?: any,
    handleClick?: any,
    pathname?: string
}

const Breadcrumb:React.FC<Props> = ({
        items = [],
        // handleClick = () => {},
        pathname = ''
    }) => {
    // const arrPath = pathname.replace(/\\/g, '/').split('/');
    // console.log(arrPath);
    // console.log(pathname);
    // console.log(_.size(arrPath));
    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {
                items.length > 0 && items.map((item: any, index: number) => (
                    (item.to == pathname) &&
                        <Typography color="textPrimary" key={`link-${index}`}>{item.label}</Typography>
                    // :
                    //     <Link color="inherit" key={`link-${index}`} href="/" onClick={handleClick}>
                    //         {item.label}
                    //     </Link>
                ))
            }
        </Breadcrumbs>
    )

  }
  
export default Breadcrumb;