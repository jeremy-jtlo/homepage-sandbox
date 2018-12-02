import { Grid, Card, Icon } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const AppGrid = ({ apps }) => (
  <Card id="apps">
    <Card.Header>Applications</Card.Header>
    <Grid>
      {
        apps.map(appArray => (
          <Grid.Row stretched key={appArray[0].icon}>
            {
            appArray.map(app => (
              <Grid.Column width={5} as="a" href={app.dest} key={app.name}>
                <Icon name={app.icon} size="large" />
                {app.name}
              </Grid.Column>
            ))
            }
          </Grid.Row>
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
