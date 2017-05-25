import React,{ Component } from 'react'
import CalendarText from './CalendarText'
import CalendarMonth from './CalendarMonth'
import CalendarDay from './CalendarDay'
import CalendarLeft from './CalendarLeft'

class CalendarApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: 1,
      month: 0
    }
    this.changeDate = this.changeDate.bind(this)
    this.changeMonth = this.changeMonth.bind(this)
    this.changeMonthBefore = this.changeMonthBefore.bind(this)
  }

  changeDate(dateAdd){
    this.setState({
      date: dateAdd
    })
  }

  changeMonth(){
    if(this.state.month < 11){
      this.setState({
        month: this.state.month + 1,
        date: 1
      })
    }
  }

  changeMonthBefore(){
    if(this.state.month > 0){
      this.setState({
        month: this.state.month - 1
      })
    }
  }

  render(){
    return(
      <div>
        <h1>{this.props.lebel}</h1>
        <CalendarLeft 
          month={this.state.month}
          OnClickChangeMonth={this.changeMonth} 
          OnClickChangeMonthBefore={this.changeMonthBefore}
          changeDay={this.changeDate}
        />
        {/*<CalendarMonth 
          month={this.state.month}
          OnClickChangeMonth={this.changeMonth} 
          OnClickChangeMonthBefore={this.changeMonthBefore} 
        />*/}
        <CalendarText dateText={this.state.date} dateMonth={this.state.month} />
        {/*<CalendarDay month={this.state.month} changeDay={this.changeDate} />*/}
      </div>
    )
  }
}

export default CalendarApp