import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  const { avatar_url, login, followers, following } = user;
  return (
    <Card>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{login}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {followers} Followers
        <Icon name="user" />
        {following} Subscriptions
      </Card.Content>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
