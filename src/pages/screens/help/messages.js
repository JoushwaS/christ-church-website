export default function Helps(props) {
  return (
    <>
      <div className="container-fluid help">
        <div className="col-12 text-center">
          <h1>Contact Us From Messages</h1>
        </div>

        <div className="col-12 mt-3">
          <div className="card p-3 help_wrapper">
            <div className="card-body">
              <div className="row text-center">
                {[1, 2, 3].map((item, index) => {
                  return (
                    <div
                      className="card mt-3 inline_card"
                      key={item + "__" + index}
                    >
                      <div className="card-body">
                        <div className="row text-center">
                          <div className="col-sm-12 col-md-8 help_card_content">
                            <img src="https://via.placeholder.com/100" alt="" />
                            <span>
                              <h2 className="mx-4">Business Room</h2>
                              <br />
                              <h3 className="mx-1">abc@gmail.com</h3>
                            </span>
                          </div>
                          <div className="col-sm-12 col-md-4 text-center mt-5">
                            <button
                              className="btn btn-primary mx-3 px-5 py-2"
                              onClick={() => {
                                props.setPages("contact");
                              }}
                            >
                              Edit
                            </button>
                            <button className="btn btn-danger px-5 py-2">
                              Delete
                            </button>
                          </div>
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
