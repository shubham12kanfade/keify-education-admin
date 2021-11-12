import "./testsection.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsBoxArrowInUpLeft } from "react-icons/bs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function TestSection() {
  return (
    <div className="testsection">
      <div className="section-head">
        <h3>Sections</h3>
        <a href="" className="upload">
          Upload Zip
        </a>
        <i className="close-icon">
          <AiOutlineCloseCircle />
        </i>
        {/* <input
          type="file"
          name="upload"
          className="custombuttonid"
          accept=".pdf, zip"
        /> */}
      </div>
      
      <section>
        <div className="content">
          <div className="accordion">
            <div className="accordion-item" id="question1">
              <a className="accordion-link" href="#question1">
                <i className="icon ion-show">
                  <FaGreaterThan />
                </i>
                <i className="icon ion-hide">
                  <AiOutlineDown />
                </i>
                Tenser7u
                <i className="pencil-icon">
                  <BsPencilSquare />
                </i>
                <span>
                  <i className="clock-icon">
                    <AiOutlineClockCircle />
                  </i>
                  <i className="add-icon">
                    <GrAdd />
                  </i>
                  <i className="del-icon">
                    <RiDeleteBin7Line />
                  </i>
                </span>
              </a>
              <div className="answer">
                <div className="answersheet">
                  {" "}
                  {/*first tense */}
                  <p>
                    Hermits ............ (lead / leads) simple lives(type 1 for
                    lead and type 2 for leads)
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*second tense */}
                  <p>
                    He ........... (dig) a hole in the ground
                    <p className="input">
                      <input type="radio" /> had dug
                    </p>
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*third tense */}
                  <p>
                    The children ........... (swallow) their food lest they
                    <br /> be late for school
                  </p>
                  <p>
                    (A) was swallowing (B) were swallowing
                    <br />
                    (C) have been swallowing (D) swallows
                  </p>
                  <p className="input">
                    <input type="radio" /> C
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*fourth tense */}
                  <p>
                    Mother ........... (cook) the food before father arrived
                  </p>
                  <p className="input">
                    <input type="radio" /> Cooked
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*fifth tense */}
                  <p>
                    The solders ........... (dig) a tunnel befor the firing
                    starts
                  </p>
                  <p className="input">
                    <input type="radio" /> Dig
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*sixth tense */}
                  <p>
                    The host ........... (serve) the drinks before the movie
                    started (type 1 for serve and for served type 2)
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*seventh tense */}
                  <p>
                    If I'm not wrong we ........... (get) married in two
                    <br />
                    months time
                  </p>
                  <p>
                    (A) will get (B) should be get
                    <br />
                    (C) shall be getting (D) will have got
                  </p>
                  <p className="input">
                    <input type="radio" /> A
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*eighth tense */}
                  <p>Jake ........... (ring) me in an hour</p>
                  <p>
                    (A) shall be (B) would ring
                    <br />
                    (C) will be ringing (D) should ring
                  </p>
                  <p className="input">
                    <input type="radio" /> C
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*ninth tense */}
                  <p>
                    They ........... (read) the book before he ...........
                    <br />
                    (question) them
                  </p>
                  <p>
                    (A) will read : questions <br /> (B) shall have read :
                    questions
                    <br />
                    (C) will have read : questions <br /> (D) will be reading :
                    questioned
                  </p>
                  <p className="input">
                    <input type="radio" /> C
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*sixth tense */}
                  <p>
                    Harry ........... (write) the book before he .........
                    <br />
                    (return) home
                  </p>
                  <p>
                    (A) will have written : returns <br /> (B) shall be writing
                    : return
                    <br />
                    (C) should write : was returning <br /> (D) would write :
                    returns
                  </p>
                  <p className="input">
                    <input type="radio" /> A
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                  <button className="addquestion">Add Question</button>
                </div>
              </div>
            </div>

            {/* SECOND SECTION */}

            <div className="accordion-item" id="question2">
              <a className="accordion-link" href="#question2">
                <i className="icon ion-show">
                  <FaGreaterThan />
                </i>
                <i className="icon ion-hide">
                  <AiOutlineDown />
                </i>
                Percentage
                <i className="pencil-icon">
                  <BsPencilSquare />
                </i>
                <span>
                  <i className="clock-icon">
                    <AiOutlineClockCircle />
                  </i>
                  <i className="add-icon">
                    <GrAdd />
                  </i>
                  <i className="del-icon">
                    <RiDeleteBin7Line />
                  </i>
                </span>
              </a>
              <div className="answer">
                <div className="answersheet">
                  {" "}
                  {/*first tense */}
                  <p>
                    A report consists of 30 sheets eact of 65 lines and each
                    such line consists of 75 characters. This report is reduces
                    onto sheets eact of 75 lines such that each line consists of
                    80 characters. The percentage reduction in number of sheets
                    is closest to:
                  </p>
                  <p className="input">
                    <input type="radio" /> 17%
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  {" "}
                  {/*first tense */}
                  <p>
                    A persone who has a certain amount with him goes to market.
                    He can buy 75 oranges or 60mangoes. He retains 20% of the
                    amount for taxi fares and buys 20 mangoes and the balance,
                    he he purchases oranges. Number of oranges he can purchase
                    is:
                  </p>
                  <p className="input">
                    <input type="radio" /> 35
                  </p>
                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr />
                <div className="answersheet">
                  <p>
                    Thirty percent of the employees of a certain company are man
                    and 50% of the men earn more than Rs. 35,000 per year. If
                    35% of the company's employees earn more than Rs.35,000 per
                    year, what fraction of the women employed by the company
                    earn Rs.35,000 or less per year?
                  </p>
                  <p className="input">
                    <input type="radio" /> 5/7
                  </p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr />
                <div className="answersheet">
                  <p>
                    Find the approximate value of 33.33% of 123 + 81.81% of 544
                  </p>
                  <p className="input">
                    <input type="radio" /> 527
                  </p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr />
                {/* <div className="answersheet">
                  <p>
                    A society had raised 80% of the amount it needed for a new building by receiving an average donation of Rs 400 from people it had already solicited. The people already solicited represent 90% of the people society intends to ask for donations. The society wants to raise the exact amount it needs for the new building. Find the average donation it shoukd receive from the remaining people to be solicites.
                  </p>
                  <p className='input'><input type="radio" /> 100 @MarkingFactors: 3.1 @SubjectId: @TopicId: @Sub TopicId: @Sol: Assume the <br /> amount the society needed for the new building to be A. Let the sum of people alrea</p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div> */}
                {/* <hr></hr> */}
                <div className="answersheet">
                  <p>
                    If the price of petrol increases by 35% and Ram intends to
                    spend only an additional 8% on petrol, by how much % will he
                    reduce the quantity of petrol purchased ?
                  </p>
                  <p className="input">
                    <input type="radio" /> 20%
                  </p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  <p>
                    The difference between the value of a number increases by
                    25% and the value of the original number decreased by 50% is
                    60. What is the original number?
                  </p>
                  <p className="input">
                    <input type="radio" /> 80
                  </p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  <p>
                    There are three numbers. The first and the second number are
                    less than the thirs by 50% and 60% respectively. What
                    percent - age of the first number is the second ?
                  </p>
                  <p className="input">
                    <input type="radio" /> 80
                  </p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                </div>
                <hr></hr>
                <div className="answersheet">
                  <p>
                    The price of an article is decreased by 20% by what
                    percentage must its consumption be increased in order to
                    retain the expenditure on a ?
                  </p>
                  <p className="input">
                    <input type="radio" /> 25
                  </p>

                  <span className="icons">
                    <i className="clock-icon">
                      <BsBoxArrowInUpLeft />
                    </i>
                    <i className="pencil-icon">
                      <BsPencilSquare />
                    </i>
                    <i className="del-icon">
                      <RiDeleteBin7Line />
                    </i>
                  </span>
                  <button className="addquestion">Add Question</button>
                </div>
              </div>
            </div>
            <button className="addquestion">Add Sections</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestSection;
