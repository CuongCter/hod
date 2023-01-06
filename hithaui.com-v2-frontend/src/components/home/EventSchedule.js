/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';
import { Grid, Button } from '@mui/material';
import { $CombinedState } from 'redux';
import { isNumber } from 'lodash';

const useStyles = makeStyles(({ palette }) => ({
  buttonGroupBG: {
    background: '#fef4ed',
    opacity: 0.9,
    '&>div': {
      transition: 'all 250ms ease',
      '&:hover': {
        background: palette.primary.main,
        color: palette.primary.contrastText,
        borderRadius: 8
      }
      // [theme.breakpoints.down('sm')]: {
      //   textAlign: 'center',
      //   width: '100%'
      // }
    }
  },

  evenetCard: {
    display: 'flex',
    padding: '1.5rem 3rem',
    borderRadius: 12,
    border: '1px solid rgba(0,0,0,0.14)',
    transition: 'all 250ms ease',
    '&:hover': {
      border: '1px solid rgba(var(--primary),1)',
      background: 'rgba(var(--primary),0.075)',
    },
    '& button:hover': {
      background: palette.primary.main,
      color: palette.primary.contrastText
    },
    '& .circle-holder': {
      marginRight: '3rem',
      border: '2px solid rgba(var(--primary),0.15)'
    }
    // [theme.breakpoints.down('sm')]: {
    //   padding: '1rem',
    //   flexDirection: 'column',

    //   '& .circle-holder': {
    //     margin: 0,
    //     marginBottom: '1rem'
    //   }
    // }
  }
}));

const EventSchedule = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();

  const events = [
    {
      id: 1,
      time: 'Thứ 5 - 9h30',
      title: 'Lớp C/C++',
      address: 'Hà Nam',
      icon: 'C++',
      status: 1,
      tab: 1,
    },
    {
      id: 2,
      time: 'Thứ 4 - 18h',
      title: 'Lớp tư duy lập trình',
      address: 'Phòng CLB',
      icon: 'C++',
      status: 1,
      tab: 1,
    },
    {
      id: 3,
      time: 'Thứ 6 - 18h',
      title: 'Lớp thiết kế Web Public',
      address: 'Tầng 9 - A1',
      icon: 'Web',
      status: 1,
      tab: 2,
    },
    {
      id: 4,
      time: 'Thứ 6 - 18h',
      title: 'Lớp Java',
      address: 'Tầng 9 - A1',
      icon: 'Java',
      status: 1,
      tab: 3,
    },
    {
      id: 5,
      time: 'Chủ Nhật - 18h',
      title: 'Lớp Python',
      address: 'Tầng 9 - A1',
      icon: 'Python',
      status: 1,
      tab: 4,
    },
    {
      id: 6,
      time: 'Thứ 3 - 18h',
      title: 'Lớp OOP',
      address: 'Tầng 9 - A1',
      icon: 'C++',
      status: 3,
      tab: 5,
    },
    {
      id: 7,
      time: 'Thứ 2 - 18h',
      title: 'Lớp Blockchain',
      address: 'Phòng CLB',
      icon: 'Sol',
      status: 1,
      tab: 6,
    },
    {
      id: 8,
      time: 'Chủ Nhật - 18h',
      title: 'Lớp Photoshop',
      address: 'Tầng 9 - A1',
      icon: 'Ps',
      status: 1,
      tab: 6,
    },
    {
      id: 9,
      time: 'T2/2023',
      title: 'Lớp NodeJS',
      address: 'Phòng CLB',
      icon: 'NodeJS',
      status: 2,
      tab: 7,
    },
    {
      id: 10,
      time: 'T2/2023',
      title: 'Lớp AI',
      address: 'Phòng CLB',
      icon: 'AI',
      status: 2,
      tab: 8,
    },
    {
      id: 11,
      time: 'T2/2023',
      title: 'Lớp ReactJS',
      address: 'Phòng CLB',
      icon: 'ReactJS',
      status: 2,
      tab: 9,
    },
    {
      id: 12,
      time: 'Thứ 3 - 18h',
      title: 'Lớp Unity',
      address: 'Phòng CLB',
      icon: 'Unity',
      status: 1,
      tab: 10,
    },
    {
      id: 13,
      time: 'T2/2023',
      title: 'Lớp đồ họa',
      address: 'Phòng CLB',
      icon: 'Graphic',
      status: 2,
      tab: 11,
    },
    {
      id: 14,
      time: 'T2/2023',
      title: 'Lớp Java Web',
      address: 'Phòng CLB',
      icon: 'Java',
      status: 1,
      tab: 3,
    },
  ];
  
  return (
    <section className="section" id="schedule">
      <div className="container">
        <div className="max-w-500 mx-auto text-center">
          <h1 className="mt-0 font-normal text-44">Các lớp học của chúng tôi</h1>
          <p className="mb-16">
            Mỗi năm CLB đều tổ chức các nhóm học thuật public dành cho các bạn sinh viên trong khoa và các lớp private dành cho các thành viên trong CLB mục đích tạo ra môi trường học tập cho các bạn sinh viên cùng trao đổi kiến thức và nghiên cứu từng mảng khác nhau theo định hướng của bản thân.
          </p>
          <div className="inline-block mb-10">
            <div
              className={`flex flex-wrap items-center border-radius-8 ${classes.buttonGroupBG}`}
            >
              <div
                className="px-6 py-2 cursor-pointer"
                onClick={() => setTabIndex(0)}
              >
                Tất cả
              </div>
              <div
                className="px-6 py-2 cursor-pointer"
                onClick={() => setTabIndex(1)}
              >
                Lớp đang diễn ra
              </div>
              <div
                className="px-6 py-2 cursor-pointer"
                onClick={() => setTabIndex(2)}
              >
                Lớp sắp diễn ra
              </div>
              <div
                className="px-6 py-2 cursor-pointer"
                onClick={() => setTabIndex(3)}
              >
                Lớp đã kết thúc
              </div>
            </div>
          </div>
        </div>

        {isNumber(tabIndex) && (
          <Grid container spacing={2}>
            {events
            .filter (item => {return tabIndex === 0 ? true : tabIndex === item.status;})
            .map((item) => (
              <Grid key={item.id} item sm={6} xs={12}>
                <div className={classes.evenetCard}>
                  <div>
                    <div className="p-2px inline-block rounded circle-holder">
                      <div className="w-76 h-76 rounded bg-light-primary flex-column justify-center items-center text-primary">
                        <h4 className="font-medium m-0">{item.icon}</h4>
                        {/* <small>Oct</small> */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="event-title m-0 text-primary font-normal">
                      {item.title}
                    </h4>
                    <div className="mt-4 mb-8 relative">
                      <Grid container spacing={0}>
                        <Grid item xs={3.5}>
                          <span className="font-medium">Địa điểm:</span>
                        </Grid>
                        <Grid item xs={8.5}>
                          {item.address}
                        </Grid>
                        <Grid item xs={3.5}>
                          <span className="font-medium">Thời gian:</span>
                        </Grid>
                        <Grid item xs={8.5}>
                          {item.time}
                        </Grid>
                        <Grid item xs={3.5}>
                          <span className="font-medium">Trạng thái:</span>
                        </Grid>
                        <Grid item xs={8.5}>
                          {item.status === 1 && 'Đang diễn ra' || item.status === 2 && 'Sắp điễn ra' || item.status === 3 && 'Đã kết thúc'}
                        </Grid>
                      </Grid>
                    </div>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="rounded px-8 buy-ticket-button"
                    >
                      {item.status === 1 && 'Tham gia' || item.status === 2 && 'Đăng ký' || item.status === 3 && 'Xem thêm'}
                    </Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </section>
  );
};

export default EventSchedule;
