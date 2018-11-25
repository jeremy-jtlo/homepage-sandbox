import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderDrop(props) {
  const linkElements = [];
  const {links, titleDest, title} = props;

  links.forEach((element) => {
    linkElements.push(<li><a href={element.dest}>{element.key}</a></li>);
  });
  return (
    <ul>
      <a href={titleDest}>{title}</a>
      {linkElements}
    </ul>
  );
}

HeaderDrop.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    dest: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
  titleDest: PropTypes.string.isRequired,
}