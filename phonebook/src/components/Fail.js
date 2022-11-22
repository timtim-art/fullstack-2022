import React from "react";

const Notification = ({ message }) => {
    
    const fail = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16,
        
      }

  
    return (
      <div style = {fail}>
        {message}
      </div>
    )
  }

  export default Notification
