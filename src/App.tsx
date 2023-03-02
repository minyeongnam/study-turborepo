import reactImg from "~/assets/images/react.svg";
import { ReactComponent as ImgComponents } from "~/assets/images/react.svg";

const App = () => {
  return (
    <div className="App">
      <h3>import 이미지</h3>
      <img src={reactImg} alt="" />
      <h3>svg component 이미지</h3>
      <ImgComponents />
    </div>
  );
};

export default App;
