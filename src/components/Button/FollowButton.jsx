import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./FollowButton.styled";
import { addFollower, deleteFollower } from "../../redux/operetions";

const FollowButton = ({ id }) => {
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Button
      className={isFollowing ? "following" : ""}
      onClick={() => {
        setIsFollowing(!isFollowing);
        if (isFollowing) {
          dispatch(deleteFollower(id));
        } else {
          dispatch(addFollower(id));
        }
      }}
    >
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
