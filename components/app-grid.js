import { Grid, Card, Segment } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const AppGrid = ({ apps }) => (
  <Card>
    <Card.Header>Applications</Card.Header>
    <Grid columns="equal">
      {
        apps.map(appArray => (
          <Grid.Column width={8} key={appArray[0].icon}>
            {
            appArray.map(app => (
              <Segment key={app.name}>{app.name}</Segment>
            ))
            }
          </Grid.Column>
        ))
    }
    </Grid>
  </Card>
);

AppGrid.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dest: PropTypes.string.isRequired,
  }))).isRequired,
};

export default AppGrid;
