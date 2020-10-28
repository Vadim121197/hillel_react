import React from "react";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const GistItem = ({ file, owner, id }) => {
  const { filename } = file;
  const { avatar_url, login} = owner;
  return (
    <List.Item>
      <Image avatar src={avatar_url} />
      <List.Content>
        <List.Header>
          <Link to={`/author/${owner.id}`}>{login}</Link>
        </List.Header>
        <List.Description>
          <Link to={`/gists/${id}`}>{filename}</Link>
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

GistItem.propTypes = {
  file: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default GistItem;
