import React, { useState, useEffect } from 'react';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { authLogout } from 'src/store/auth/auth.action';
import { debounce } from '../../utils';
import ScrollTo from './common/ScrollTo';

function classList(classes) {
  return Object.entries(classes)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(' ');
}

const TopBar = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const user = useSelector((state) => state.auth?.data.user);

  let scrollableElement = document.querySelector('.scrollable-content');
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  // eslint-disable-next-line prefer-const
  let toggleIcon = isClosed ? 'menu' : 'close';

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      const isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener('scroll', handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(authLogout());
  };

  return (
    <section
      className={classList({
        header: true,
        closed: isClosed
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="/static/images/logoHIT.png" alt="" />
        </div>
        <ul className="navigation">
          <li>
            <ScrollTo to="intro" onScroll={close}>
              Trang chủ
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="leaders" onScroll={close}>
              Ban chủ nhiệm
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="schedule" onScroll={close}>
              Lớp học
            </ScrollTo>
          </li>
          {/* <li>
            <ScrollTo to="classes" onScroll={close}>
              Lớp học
            </ScrollTo>
          </li> */}
          <li>
            <ScrollTo to="testimonial" onScroll={close}>
              Trải nghiệm
            </ScrollTo>
          </li>
          {/* <li>
            <ScrollTo to="blog" onScroll={close}>
              Blog
            </ScrollTo>
          </li> */}
          <li>
            <ScrollTo to="subscription" onScroll={close}>
              Liên hệ
            </ScrollTo>
          </li>
          <li>
            <Link href="#">Kho tài liệu</Link>
          </li>
          <li>
            <Link href="#">Tra cứu</Link>
          </li>
        </ul>
        <div className="m-auto" />
        <div className="navigation flex">
          {!user && (
            <NavLink to="#" className="mr-1">
              <Button
                className="box-shadow-none px-8 rounded-l rounded-r hover-bg-primary capitalize"
                variant="outlined"
                color="primary"
              >
                Đăng nhập
              </Button>
            </NavLink>
          )}
        </div>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          {/* <Icon>{toggleIcon}</Icon> */}
          <MenuIcon>{toggleIcon}</MenuIcon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar;
