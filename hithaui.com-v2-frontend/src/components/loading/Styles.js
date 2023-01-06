import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  return {
    // loading
    loading: {
      width: '100%',
      height: '50',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

const Styles = {
  useStyles
};

export default Styles;
