import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    createStyles({
      '@global': {
        '*': {
          boxSizing: 'border-box',
          // margin: 0,
          padding: 0
        },
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          height: '100%',
          width: '100%'
        },
        body: {
          backgroundColor: '#f4f6f8',
          height: '100%',
          width: '100%'
        },
        a: {
          textDecoration: 'none'
        },
        '#root': {
          height: '100%',
          width: '100%'
        }
      }
    })
  // eslint-disable-next-line function-paren-newline
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
