import { Grid, Card, Icon, SemanticICONS } from "semantic-ui-react";
import { appList } from "../constants/links";

export type AppGridProps = {
  apps: appList[];
};

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <Card id="apps">
      <Card.Header>Other</Card.Header>
      <Grid>
        {apps.map((appArray) => (
          <Grid.Row stretched key={appArray[0].icon}>
            {appArray.map((app) => (
              <Grid.Column width={5} as="a" href={app.dest} key={app.name}>
                <Icon name={app.icon as SemanticICONS} size="large" />
                {app.name}
              </Grid.Column>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    </Card>
  );
}
