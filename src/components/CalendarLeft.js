import React from 'react'
import CalendarMonth from './CalendarMonth'
import CalendarDay from './CalendarDay'
const CalendarLeft = (props) => (
  <div style={{float:'left', width:'30%'}}>
    <CalendarMonth 
      month={props.month}
      OnClickChangeMonth={props.OnClickChangeMonth} 
      OnClickChangeMonthBefore={props.OnClickChangeMonthBefore}/>
    <CalendarDay 
      month={props.month}
      changeDay={props.changeDay}
    />
  </div>
)

export default CalendarLeft