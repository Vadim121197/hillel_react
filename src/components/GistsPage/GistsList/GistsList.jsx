import React from "react";
import { useSelector } from "react-redux";
import { getGists } from "./../../../redux/selectors/gistsSelectors";
import { List } from "semantic-ui-react";
import GistItem from "./GistItem/GistItem";

const GistsList = () => {
  const gists = useSelector(getGists);

  return (
    <List divided relaxed>
      {gists.map((gist) => {
        const { id, owner } = gist;
        for (let objKeys in gist.files) {
          return (
            <GistItem
              key={id}
              id={id}
              file={gist.files[objKeys]}
              owner={owner}
            />
          );
        }
      })}
    </List>
  );
};

export default GistsList;
