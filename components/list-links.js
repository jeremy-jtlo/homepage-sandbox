import { List, Card } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const ListLinks = ({ links, titleDest, title }) => (
  <Card>
    <Card.Header><a href={titleDest}>{title}</a></Card.Header>
    <List divided relaxed>
      {
        links.map(link => (
          <List.Item key={link.key}>
            <List.Content>
              <List.Description as="a" target="blank" href={link.dest}>
                {link.key}
              </List.Description>
            </List.Content>
          </List.Item>
        ))
      }
    </List>
  </Card>
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
