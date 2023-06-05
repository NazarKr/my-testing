import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import { fetchAllUsers } from "../../redux/operetions";
import { selectAllUsers } from "../../redux/selectors";
import LoadMoreButton from "../Button/LoadMoreButton";

export const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const list = useSelector(selectAllUsers);

  return (
    <>
      <ul>
        {list.map(({ id, avatar, tweets, followers }) => {
          return (
            <UserCard
              key={id}
              id={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            />
          );
        })}
      </ul>
      <LoadMoreButton />
    </>
  );
};

