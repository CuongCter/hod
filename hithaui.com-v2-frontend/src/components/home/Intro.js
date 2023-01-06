import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import clsx from 'clsx';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const useStyles = makeStyles(() => ({
  introWrapper: {
    position: 'relative',
    background: 'url(./static/images/anhsinhnhat.JPG) center center/cover no-repeat',
    height: '100%',
    overflow: 'hidden'
  },
  intro: {
    padding: '7.5rem 0rem',
    maxWidth: 500,
    // [theme.breakpoints.down('sm')]: {
    //   padding: '2.5rem 0rem'
    // },
    zIndex: 5
  },
  lightWhiteBG: {
    position: 'absolute',
    display: 'block',
    top: 0,
    bottom: 0,
    left: 'calc(50% - 500px)',
    right: 'calc(50% - 500px)',
    background: 'rgba(255,255,255,0.75)',
    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'

    // [theme.breakpoints.down('xs')]: {
    //   right: 0,
    //   left: 0,
    //   clipPath: 'none',
    //   background: 'rgba(255,255,255,0.7)'
    // }
  }
}));

const Intro = () => {
  const classes = useStyles();
  const [diffTime, setDiffTime] = useState({});

  useEffect(() => {
    (() => {
      dayjs.extend(duration);
      const dateNow = dayjs(Date.now());
      const dateBir = dayjs(new Date('08/18/2010'));
      const newDiffTime = dayjs.duration(dateNow.diff(dateBir)).$d;
      setDiffTime(newDiffTime);
    })();
  }, []);

  return (
    <section className="section" id="intro">
      <div className={classes.introWrapper}>
        <div className="container">
          <div
            className={clsx(
              'relative mx-auto text-center flex-column justify-center items-center',
              classes.intro
            )}
          >
            <h4 className="font-normal m-0 mb-4 text-black">
              18th August, 2010
            </h4>
            <h1 className="font-medium text-44 text-primary m-0">
              CLB Tin học Đại học Công Nghiệp Hà Nội
            </h1>
            <p className="mb-6 max-w-400 mx-auto text-black">
              CLB HIT là một câu lạc bộ học thuật của Khoa CNTT trường đại học
              Công Nghiệp Hà Nội,trụ sở tại tầng 9 nhà A1 CS1.
            </p>
            <div className="flex max-w-400 mx-auto flex-wrap mb-2">
              <div className="text-center mr-4 ml-4 mb-8">
                <div className="m-0 text-28">{diffTime.years}</div>
                <div className="m-0">Năm</div>
              </div>
              <div className="text-center mr-4 ml-4 mb-8">
                <div className="m-0 text-28">{diffTime.months}</div>
                <div className="m-0">Tháng</div>
              </div>
              <div className="text-center mr-4 ml-4 mb-8">
                <div className="m-0 text-28">{diffTime.days}</div>
                <div className="m-0">Ngày</div>
              </div>
              {/* <div className="text-center mb-8">
                <div className="m-0 text-28">51</div>
                <div className="m-0">Seconds</div>
              </div> */}
            </div>
            <Button
              variant="contained"
              color="primary"
              className="rounded px-6"
            >
              Khám phá ngay
            </Button>
          </div>
          <div className={classes.lightWhiteBG} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
