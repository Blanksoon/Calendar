import React from 'react'

const month = ['january','February','March','April','May','June','July','Augast','September','October'
                ,'November','December']

const showmonth = (props) => (
  <div>
    <input
      type = "button"
      value = "before"
      onClick = {props.OnClickChangeMonthBefore}
    />
    {month[props.month]}
    <input
      type = "button"
      value = "next"
      onClick = {props.OnClickChangeMonth}
    />
  </div>
)

export default showmonth
