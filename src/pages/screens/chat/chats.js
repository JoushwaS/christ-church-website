import { FaTrash, FaUsers } from 'react-icons/fa'

export default function Chats(props) {
  return (
    <>
      <div className="container-fluid chat">
        <div className="d-flex bd-highlight">
          <div className="flex-grow-1 bd-highlight">
            <h1>Chat Rooms</h1>
          </div>
          <div className="bd-highlight">
            <button className="btn pink_button">
              <FaUsers /> Create New Chat Room
            </button>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="card p-3 room_wrapper">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  className="card mt-3 inline_card"
                  key={item + '__' + index}
                  onClick={() => {
                    props.setPage('/room')
                  }}
                >
                  <div className="card-body">
                    <div className="row text-center">
                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                        <img src="https://via.placeholder.com/150" alt="" />
                        <h2 className="mx-4">Business Room</h2>
                      </div>
                      <div className="col-sm-12 col-md-2 d-flex flex-column justify-content-center">
                        <h5>1 HOUR AGO</h5>
                        <h5>20k Members</h5>
                      </div>
                      <div className="col-sm-12 col-md-2 text-center mt-md-4">
                        <button className="btn btn-outline-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="d-flex justify-content-center mt-5">
              <button className="btn pink_button">See More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
