import React from "react";
import logo from "./logo.svg";
import { apps, newsLinks, redditLinks } from "./constants/links";
import { Container, Grid, Header } from "semantic-ui-react";
import ListLinks from "./components/listLinks";
import SubHeader from "./components/subheader";
import AppGrid from "./components/appGrid";
import "./App.css";

const App = () => (
  <Container>
    {/* Header, Info */}
    <Header as="h1">Home Sweet Home(page)</Header>
    <SubHeader time={new Date()} />

    {/* First Row */}
    <Grid stackable columns={2} stretched>
      {/* Site Links */}
      <Grid.Column width={8}>
        <Grid columns={2} stretched>
          <Grid.Column>
            <ListLinks
              title={redditLinks.title}
              titleDest={redditLinks.titleDest}
              links={redditLinks.sites}
            />
          </Grid.Column>
          <Grid.Column>
            <ListLinks
              title={newsLinks.title}
              titleDest={newsLinks.titleDest}
              links={newsLinks.sites}
            />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      {/* Some kind of media widget, I don't know */}
      <Grid.Column width={8}>
        <AppGrid apps={apps} />
      </Grid.Column>
      {/* TODO: a news feed, daily phrase, something else */}
    </Grid>
  </Container>
);

export default App;
