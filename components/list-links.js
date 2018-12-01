import React from 'react';
import PropTypes from 'prop-types';

export const ListLinks = ({ links, titleDest, title }) => (
  <ul>
    <a href={titleDest}>{title}</a>
    {
      links.map(link => (
        <li key={link.key}>
          <a href={link.dest}>{link.key}</a>
        </li>
      ))
    }
  </ul>
);

ListLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    dest: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
  titleDest: PropTypes.string.isRequired,
};

export default ListLinks;
