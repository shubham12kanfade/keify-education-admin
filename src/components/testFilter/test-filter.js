import "./testfilter.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function TestFilter() {
  const func = () => {
    var slider = document.getElementById("slider");
    var selector = document.getElementById("selector");
    slider.oninput = function () {
      selector.style.left = this.value + "%";
    };
  };

  return (
    <>
      <div className="main">
        <div className="test-filter">
          <div className="head">
            <h3>Filters</h3>
            <AiOutlineCloseCircle />
          </div>

          <div className="price-fields">
            <h3>Price: </h3>
            <p className="pricerange">
              <label>0</label>
              <label>1000</label>
            </p>

            <input type="range" min="0" max="100" id="range" />
          </div>

          <script></script>

          <div className="branch-field">
            <h3>Tests: </h3>
            <input
              type="text"
              className="txtfield"
              placeholder="Search a Test...."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TestFilter;
