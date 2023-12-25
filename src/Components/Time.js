import React from 'react'

const Time = () => {
     // let message = "Bye There!";
     // if (Math.random() > 0.5) {
     //      message = "Hello there"
     // }
     return (
          <div>{new Date().toLocaleTimeString()}</div>
     )
}

export default Time;