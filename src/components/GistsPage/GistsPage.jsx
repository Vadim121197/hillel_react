import React from "react";
import GistsList from "./GistsList/GistsList";
import { Grid, Loader } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { getGists, getIsLoading } from "../../redux/selectors/gistsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { gistsFetch } from "../../redux/slices/gistsReducer";
import { useEffect } from "react";
import CodePage from "./CodePage/CodePage";

const GistsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const gists = useSelector(getGists);

  useEffect(() => {
    if (!gists.length) {
      dispatch(gistsFetch());
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader active inline="centered" />
      ) : (
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <GistsList />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route path="/gists/:id">
                <CodePage />
              </Route>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </>
  );
};

export default GistsPage;
