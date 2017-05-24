import React from 'react'
const showDate = (props) => (
  <div className="show">
    <div>
    <table className="showDateText">
      <tr>
        {props.dateText}
      </tr>
    </table>
    </div>
  </div>
)

export default showDate