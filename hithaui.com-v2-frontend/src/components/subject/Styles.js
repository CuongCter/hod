import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';

export const useStyles = makeStyles({
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
    fontWeight: 600
  },
  author: {
    paddingLeft: '25px !important'
  },
  released: {
    paddingLeft: '25px !important'
  },
  // search
  searching: {
    display: 'flex !important'
    // backgroundColor: 'white'
  },
  document: {
    width: '250px',
    margin: '10px 20px'
    // padding: '2px 0 !important',
  },
  exam: {
    margin: '9px 20px !important',
    width: '250px',
    backgroundColor: 'white'
    // height: '32px !important'
  },
  btn: {
    margin: '10px 0 10px 0 !important'
  }
});

const Styles = {
  useStyles
};

export default Styles;
