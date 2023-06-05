import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage } from "../../redux/selectors";
import { addDisplayedItems } from "../../redux/operetions";
import { LoadButton } from "./LoadMoreButton.styled";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const handleShowMore = () => {
    dispatch(addDisplayedItems(currentPage + 1));
  };

  return (
    <LoadButton variant="contained" onClick={handleShowMore}>
      Load More
    </LoadButton>
  );
};

export default LoadMoreButton;
