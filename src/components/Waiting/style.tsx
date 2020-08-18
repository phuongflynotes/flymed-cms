import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    backdrop: {
      zIndex: 1500,
      color: '#fff',
    },
  }),
);

export default useStyles;