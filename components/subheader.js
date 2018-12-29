import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

function generateTimeString(time) {
  const monthNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];

  const thisMonth = time.getMonth();
  const dayOfMonth = time.getDate();
  const dayName = time.getDay();

  const dateString = `${dayNames[dayName]}, ${monthNames[thisMonth]}${dayOfMonth}`;

  return dateString;
}

const SubHeader = ({ time }) => (
  <Header as="h3">{generateTimeString(time)}</Header>
);

SubHeader.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
};

export default SubHeader;
