import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getGistById } from "../../../redux/selectors/gistsSelectors";
import FileField from "./FileField/FileField";

const CodePage = () => {
  const { id } = useParams();
  const gist = useSelector((state) => getGistById(state, id));

  if (!gist) return <Redirect to="/gists" />;

  return (
    <div>
      <FileField gist={gist} />
    </div>
  );
};

export default CodePage;
