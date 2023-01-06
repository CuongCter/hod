import React from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const useStyles = makeStyles(() => ({
  section: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.67), rgba(0,0,0,0.67)), 
       url('./static/images/3.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 35%'
  },
  buttonBorder: {
    border: '1px solid white !important'
  }
}));

const EventDetails = () => {
  const classes = useStyles();

  return (
    <section className={clsx('section', classes.section)} id="event-details">
      <div className="container">
        <div className="text-center text-white">
          <h1 className="m-0 text-48 font-normal inline-block mx-auto">
            Tìm hiểu thêm về các sự kiện của chúng tôi
          </h1>
          <p className="my-8 max-w-360 mx-auto text-inherit">
            Cùng tìm hiểu xem các sự kiện của CLB Tin học HIT có những điều thú
            vị và bổ ích gì nhé.
          </p>
          <IconButton className={classes.buttonBorder}>
            <PlayArrowIcon className="text-white" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
