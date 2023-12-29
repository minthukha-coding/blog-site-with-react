import Navbar from "../Components/Navbar";
import View from "../routes";

function index() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <View />
      </div>
    </div>
  );
}

export default index;