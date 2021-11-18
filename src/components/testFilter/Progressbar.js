 import "./Progressbar.css";
import { ImCross } from "react-icons/im";

function Progressbar() {
  return (
    <div className="testsection line">
      <div className="section-head">
        <h3>Filters</h3>
        <i className="close-icon">
          <ImCross />
        </i>
      </div>
      
      <section>
        <div className="content">
          <div className="accordion">
          Price :
               </div>

               <div className="slider">
                 <input type="range" min="1" max="1000" value="5" className="range-slider" id="slider"/>
                 <label for="" className="label-left">0</label>
                 <label for="" className="label-right" id="label">1000</label>
               </div> <br/> <br/> <br/>

               <div className="branches">
                      Branches :
               </div>

               <div className="inputprogress">
                  <input className="inputtag" type="text" placeholder="   Select a branches"/>
              </div>
           </div>    
      </section>
    </div>
  );
}

export default Progressbar;
