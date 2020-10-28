import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFiles,
  getFilesById,
} from "../../../../redux/selectors/filesSelectors";
import { filesFetch } from "../../../../redux/slices/filesReducer";
import SyntaxHighlighterComponent from "./SyntaxHighlighterComponent/SyntaxHighlighterComponent";
import PropTypes from "prop-types";

const FileField = ({ gist }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const files = useSelector(() => getFiles(gist));

  useEffect(() => {
    if (gist) {
      dispatch(filesFetch({ files, id }));
    }
  }, [files, id]);

  const contentFiles = useSelector((state) => getFilesById(state, id)) || [];

  return (
    <>
      {contentFiles.map((file) => (
        <SyntaxHighlighterComponent
          key={contentFiles.indexOf(file)}
          fileContent={file.fileContent}
        />
      ))}
    </>
  );
};

FileField.propTypes = {
  gist: PropTypes.object.isRequired,
};

export default FileField;
