import Accordion from "./component/01-accordion";
import ImageSlider from "./component/04-image-slider";
import RandomColor from "./component/02-random-color";
import StarRating from "./component/03-star-rating";
import LoadMore from "./component/05-load-more";

function App() {
  return (
    <>
      <LoadMore />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <StarRating noOfStars={10} />
      <RandomColor />
      <Accordion />
    </>
  );
}

export default App;
