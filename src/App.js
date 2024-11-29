import Accordion from "./component/accordion";
import RandomColor from "./component/random-color";
import StarRating from "./component/star-rating";

function App() {
  return (
    <>
      <StarRating noOfStars={10} />
      <RandomColor />
      <Accordion />
    </>
  );
}

export default App;
