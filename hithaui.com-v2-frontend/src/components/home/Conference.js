import React from 'react';
import { Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  descriptionCard: {
    padding: '1rem 4rem'
    // [theme.breakpoints.down('md')]: {
    //   padding: '1rem 2rem'
    // },
    // [theme.breakpoints.down('sm')]: {
    //   padding: '1rem'
    // }
  },
  borderRounded: {
    borderRadius: 16
  }
}));

const Conference = () => {
  const classes = useStyles();

  return (
    <section className="section" id="conference">
      <div className="container">
        <h1 className="mb-14 font-normal text-44 text-center">
          Sự kiện nổi bật
        </h1>
        <div
          className={clsx('section-bg-light-primary', classes.borderRounded)}
        >
          <Grid container spacing={0} alignItems="center">
            <Grid item md={6} sm={12}>
              <img
                src="/static/images/BannerHITOD2022.png"
                alt="microphone  "
                className={clsx('w-full block', classes.borderRounded)}
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <div className={classes.descriptionCard}>
                <h1 className="mt-0 mb-8 text-44 font-medium text-primary">
                  HIT OPEN DAY
                </h1>
                <p className="max-w-400 mb-8">
                  HIT OPEN DAY là sự kiện thường niên lớn nhất của năm do CLB
                  Tin học HIT với xâu chuỗi những hoạt động, nội dung đan xen
                  học tập và giải trí vô cùng thú vị; nhằm mục đích tạo sân chơi
                  trí tuệ, năng động cho các bạn sinh viên đam mê CNTT giao lưu,
                  học hỏi và phát triển bản thân. Đặc biệt, đây cũng là lúc mà
                  mọi người cùng nhìn lại hành trình học tập, hoạt động với hàng
                  loạt chiến tích của CLB trong suốt một năm qua.
                </p>
                {/* <div className="mb-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center">
                      <Icon className="mr-4" color="primary">
                        done
                      </Icon>
                      <p className="my-2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed
                      </p>
                    </div>
                  ))}
                </div> */}
                <Button variant="text" color="primary">
                  Thông tin chi tiết
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Conference;
