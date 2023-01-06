import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';

export const useStyles = makeStyles(() => {
  return {
    // result
    avatar: {
      margin: 10
    },
    pinkAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: pink[500]
    },
    arrowIcon: {
      marginLeft: '10px'
    },
    title: {
      paddingLeft: '35px !important',
      fontWeight: 600,
      backgroundColor: 'white !important'
    },
    author: {
      paddingLeft: '25px !important',
      backgroundColor: 'white !important'
    },
    released: {
      paddingLeft: '25px !important',
      backgroundColor: 'white !important'
    },

    viewed: {
      backgroundColor: 'white !important'
    },

    // cus
    custom: {
      minHeight: '96px',
      height: 'auto',
      zIndex: 1500
    },
    document: {
      height: '40px',
      zIndex: 1000,
      marginTop: '1px'
    },
    exam: {
      backgroundColor: 'white',
      width: '100%'
    },
    btn: {
      width: '100%',
      height: '39px'
    },

    // not found
    box: {
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center'
    },
    boxImg: {
      marginTop: '50px',
      display: 'inline-block',
      maxWidth: '100%',
      width: 300
    },

    // document
    documentResults: () => {
      return {
        width: '100%',
        overflow: 'hidden',
        zIndex: 1500
      };
    },
    documentContainer: {
      maxHeight: 440
    }
  };
});

const Styles = {
  useStyles
};

export default Styles;
