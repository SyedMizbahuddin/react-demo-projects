/* eslint-disable no-unused-vars */
import Accordion from "./component/01-accordion";
import ImageSlider from "./component/04-image-slider";
import RandomColor from "./component/02-random-color";
import StarRating from "./component/03-star-rating";
import LoadMore from "./component/05-load-more";
import TreeView from "./component/06-tree-view";
import { menus } from "./component/06-tree-view/data";
import QRCodeGenerator from "./component/07-qr-code";
import LightDarkMode from "./component/08-switch-theme";
import ScrollIndicator from "./component/09-scroll-indicator";
import TabTest from "./component/10-tabs/tsb-test";
import ModalTest from "./component/11-modal";
import GithubFinder from "./component/12-github-profile";

function App() {
  return (
    <>
      <GithubFinder />
      {/* <ModalTest /> */}
      {/* <TabTest /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <LightDarkMode />
      <QRCodeGenerator />
      <TreeView menu={menus} />
      <LoadMore />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <StarRating noOfStars={10} />
      <RandomColor />
      <Accordion /> */}
    </>
  );
}

export default App;
