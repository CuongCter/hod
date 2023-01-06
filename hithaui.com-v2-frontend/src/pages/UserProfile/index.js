import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import { Avatar } from '@mui/material';
import { Helmet } from 'react-helmet';
import logo from '../../assets/logo-01-01.png';
import './style.scss';

const UserProfile = () => {
  const params = useParams();

  const [data, setData] = useState({});

  useEffect(async () => {
    try {
      const resData = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/check?stdcode=${params.id}`
      );
      const newData = resData.data;

      setData(newData);
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  return (
    <>
      <Helmet>
        <title>{data.full_name}</title>
      </Helmet>
      <div className="app">
        <div className="header-main">
          <div className="heading">
            <h1>CÂU LẠC BỘ TIN HỌC HIT - HAUI</h1>
            <p>Trường Đại Học Công Nghiệp Hà Nội</p>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="box-main">
          <Avatar
            src={data?.avatar ? data.avatar : '../../static/images/sq-1.png'}
            className="h-200 w-200 inline-block mb-10 mt-5 img"
          />
          <div className="name">{data.full_name}</div>
          <div className="title">{data.bio}</div>
          <div className="infor">
            <div className="infor-desc">
              <div className="infor-icon">
                <EmailIcon />
              </div>
              <div className="infor-title">{data.email}</div>
            </div>

            <div className="infor-desc">
              <div className="infor-icon">
                <KeyboardCommandKeyIcon />
              </div>
              <div className="infor-title">
                {data.school_year ? `K${data.school_year}` : ''}
              </div>
            </div>

            <div className="infor-desc">
              <div className="infor-icon">
                <SchoolIcon />
              </div>
              <div className="infor-title">{data.class_name}</div>
            </div>

            <div className="infor-desc">
              <div className="infor-icon">
                <CodeIcon />
              </div>
              <div className="infor-title">{data.student_code}</div>
            </div>
          </div>

          <div className="contact">
            <div className="contact-face">
              <a href={data.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
            <div className="contact-git">
              <a href={data.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="contact-ins">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
