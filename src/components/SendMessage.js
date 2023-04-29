import React from 'react';

function SendMessage() {
  return (
    <div>
      <form>
        <div className="sendMsg"></div>
        <input placeholder='メッセージを入力してください。'/>
      </form>
    </div>
  )
}

export default SendMessage;
