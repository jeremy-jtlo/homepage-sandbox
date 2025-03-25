import { List, Card } from "semantic-ui-react";
import { siteLink } from "../constants/links";

export type ListLinksProps = {
  links: siteLink[];
  title: string;
  titleDest: string;
};

export default function ListLinks({ links, title, titleDest }: ListLinksProps) {
  return (
    <Card>
      <Card.Header>
        <a href={titleDest}>{title}</a>
      </Card.Header>
      <List divided relaxed>
        {links.map((link) => (
          <List.Item key={link.key}>
            <List.Content>
              <List.Description as="a" target="blank" href={link.dest}>
                {link.key}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Card>
  );
}
