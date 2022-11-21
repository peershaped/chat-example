import ChatClient from "./ChatClient";
import { Link } from 'react-router-dom';

const Detail = () => {
  // TODO: Provideworking access token
  const chatAccessToken = JSON.parse(
    '{"token":""}'
  );
  const displayName = process.env.REACT_APP_DISPLAYNAME;
  const thread1 = process.env.REACT_APP_THREAD_ID_1;
  const thread2 = process.env.REACT_APP_THREAD_ID_2;
  const userId = process.env.REACT_APP_USER_ID;
  
  const mainThread = thread2;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Page with details of a group</h1>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <p>Some info</p>
        </div>
        <div className="col-md-4">
          <p>
            <Link to="/fullscreen">Open fullscreen</Link>
          </p>
          {
            chatAccessToken &&
            displayName && 
            userId &&
            mainThread &&
            thread1 &&
            thread2  && (
            <ChatClient
              userId={userId}
              chatThreadId={thread1}
              displayName={displayName}
              accessToken={chatAccessToken}
            />
          )}
        </div>
      </div>
    </div>
      
 
        
 
  )
}
export default Detail;