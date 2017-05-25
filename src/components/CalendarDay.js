import React from 'react'

const calendar = (month,changeDate) => {
  const dayOnMonth = [31,29,31,30,31,30,31,31,30,31,30,31]
  let calendarDOM = []
  for (let i = 0; i < dayOnMonth[month]; i++) {
    calendarDOM.push(<input key={i+1} type="button" value={i+1} onClick={() => changeDate(i+1)} />)
  }
  return calendarDOM
}

const CalendarDay = (props) => (
  <div style={{display:'inline'}}>
    {calendar(props.month,props.changeDay)}
  </div>
)

export default CalendarDay