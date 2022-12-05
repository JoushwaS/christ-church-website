import { BsFillPlayFill, BsTrashFill } from 'react-icons/bs'
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa'

export default function Room() {
  return (
    <>
      <div className="container-fluid chat">
        <div className="d-flex bd-highlight">
          <div className="flex-grow-1 bd-highlight">
            <h1>Chat Rooms: Business Room</h1>
          </div>
          <div className="bd-highlight">
            <button className="btn btn-light text-danger">
              <BsTrashFill style={{ fontSize: '1.3rem' }} />
            </button>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="card p-3 room_wrapper">
            <div className="card chat_room">
              <div className="card-body">
                {/* CHAT BODY  */}
                <div className="msger-chat">
                  <div className="msg left-msg">
                    <div
                      className="msg-img"
                      style={{
                        backgroundImage: `url(https://image.flaticon.com/icons/svg/327/327779.svg)`,
                      }}
                    ></div>

                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">BOT</div>
                        <div className="msg-info-time">12:45</div>
                      </div>

                      <div className="msg-text">
                        Hi, welcome to SimpleChat! Go ahead and send me a
                        message. 😄
                        <BsTrashFill className="mx-2" />
                      </div>
                      
                    </div>
                  </div>

                  <div className="msg left-msg">
                    <div
                      className="msg-img"
                      style={{
                        backgroundImage: `url(https://image.flaticon.com/icons/svg/327/327779.svg)`,
                      }}
                    ></div>

                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">BOT</div>
                        <div className="msg-info-time">12:45</div>
                      </div>

                      <div className="msg-text d-flex justify-content-between">
                        <BsFillPlayFill
                          className="mx-2"
                          style={{ fontSize: '1.5rem' }}
                        />
                        <input type="range" className="slider" />
                        <BsTrashFill className="mx-2" />
                      </div>
                    </div>
                  </div>
                  <div className="day d-flex justify-content-center">
                    <h4>------------TODAY------------</h4>
                  </div>
                  <div className="msg right-msg">
                    <div
                      className="msg-img"
                      sstyle={{
                        backgroundImage: `url(https://image.flaticon.com/icons/svg/327/327779.svg)`,
                      }}
                    ></div>

                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">Sajad</div>
                        <div className="msg-info-time">12:46</div>
                      </div>

                      <div className="msg-text">
                        You can change your name in JS section!
                      </div>
                    </div>
                  </div>
                </div>

                {/* CHAT BODY END */}
                <form className="msger-inputarea">
                  <input
                    type="text"
                    className="msger-input"
                    placeholder="Type Here..."
                  />
                  <button type="submit" className="msger-send-btn">
                    <FaPaperPlane />
                  </button>
                  <button type="submit" className="msger-send-btn">
                    <FaMicrophone />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
