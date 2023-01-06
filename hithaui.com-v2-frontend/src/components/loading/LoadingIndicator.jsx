import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { useStyles } from './Styles';

const LoadingIndicator = () => {
  const classes = useStyles();
  const { promiseInProgress } = usePromiseTracker();
  const Loading = () => {
    return (
      promiseInProgress && (
        <div className={classes.loading}>
          <Loader type="ThreeDots" color="#2BAD60" height="15" width="100" />
        </div>
      )
    );
  };

  return (
    <div>
      <Loading />
    </div>
  );
};

export default LoadingIndicator;
