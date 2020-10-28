import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import {
  getUserById,
  getIsLoading,
} from "../../redux/selectors/usersSelectors";
import { usersFetch } from "../../redux/slices/usersSlices";
import UserCard from "./UserCard/UserCard";

const UserPage = () => {
  const { id } = useParams();
  const isLoading = useSelector(getIsLoading);
  const user = useSelector((state) => getUserById(state, id)) || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersFetch({ id }));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader active inline="centered" />
      ) : (
        <UserCard user={user} />
      )}
    </>
  );
};

export default UserPage;
