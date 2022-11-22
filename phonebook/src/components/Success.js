import React from "react";

const Notification = ({ message }) => {

    const success = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16,
    }

    if (message === null) {
      return null
    }
  
    return (
      <div style = {success}>
        {message}
      </div>
    )
  }

  export default Notification
