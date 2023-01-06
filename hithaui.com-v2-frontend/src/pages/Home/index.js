import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';

import Footer from 'src/components/home/Footer';
import TopBar from 'src/components/home/TopBar';
import Intro from 'src/components/home/Intro';
import Blog from 'src/components/home/Blog';
import Conference from 'src/components/home/Conference';
import EventSchedule from 'src/components/home/EventSchedule';
import Leaders from 'src/components/home/Leaders';
import EventDetails from 'src/components/home/EventDetails';
import Classes from 'src/components/home/Classes';
import Testimonial from 'src/components/home/Testimonial';
import Subscription from 'src/components/home/Subscription';
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <Scrollbar
      className="h-full-screen scrollable-content"
      option={{ suppressScrollX: true }}
    >
      <div className="landing">
        <Helmet>
          <title>HIT - Câu Lạc Bộ Tin Học DHCNHN</title>
        </Helmet>
        <TopBar />
        <Intro />
        <Conference />
        <Leaders />
        <EventSchedule />
        <EventDetails />
        {/* <Classes /> */}
        <Testimonial />
        {/* <Blog /> */}
        <Subscription />
        <Footer />
      </div>
    </Scrollbar>
  );
};

export default Landing;
