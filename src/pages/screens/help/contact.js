import { FaArrowLeft } from "react-icons/fa";

export default function Contact(props) {
  return (
    <>
      <div className="container-fluid help">
        <div className="row">
          <div className="col-md-10 order-2 text-center">
            <h1>Contact Us From Messages</h1>
          </div>
          <div className="col-md-1 order-1">
            <h1
              onClick={(e) => {
                e.preventDefault();
                props.setPages("helps");
              }}
            >
              <FaArrowLeft />
            </h1>
          </div>
        </div>

        <div className="col-12 mt-3">
          <div className="card p-3 help_wrapper">
            <div className="card-body">
              <div className="row">
                {[1, 2, 3, 4].map((element, index) => {
                  return (
                    <div className="col-12 user_card">
                      <div className="col-12 image_box mt-3">
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h3 className="mx-3">Kailey Robinson</h3>
                      </div>
                      <div className="col-12 info_box mt-3">
                        <div className="user_info">
                          <div className="d-flex flex-column">
                            <h5 className="color_grey">First&nbsp;Name</h5>
                            <h5 className="color_grey">Last&nbsp;Name</h5>
                            <h5 className="color_grey">Email</h5>
                            <h5 className="color_grey">Message</h5>
                          </div>
                          <div className="d-flex flex-column">
                            <h5 className="color_grey">:&nbsp;</h5>
                            <h5 className="color_grey">:&nbsp;</h5>
                            <h5 className="color_grey">:&nbsp;</h5>
                            <h5 className="color_grey">:&nbsp;</h5>
                          </div>
                          <div className="d-flex flex-column">
                            <h5>&nbsp;Kailey</h5>
                            <h5>&nbsp;Robinson</h5>
                            <h5>&nbsp;abc@hotmail.com</h5>
                            <h5>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet.
                            </h5>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                          <button className="btn btn-success px-5 py-2">
                            Reply in email
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
