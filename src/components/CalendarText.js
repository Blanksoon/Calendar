import React from 'react'

const month = [
  'january',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augast',
  'September',
  'October',
  'November',
  'December'
]
                
const showDate = (props) => (
  <div className="show">
    <table className="showDateText">
      <tr>{props.dateText} &nbsp; {month[props.dateMonth]}</tr>
    </table>
  </div>
)

export default showDate