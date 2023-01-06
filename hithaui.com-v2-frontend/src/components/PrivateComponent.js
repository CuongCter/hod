import { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateComponent = memo((props) => {
  const token = useSelector((state) => state.auth.data.token, shallowEqual);

  return token ? props.children : <Navigate to="/login" />;
});

PrivateComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PrivateComponent;
