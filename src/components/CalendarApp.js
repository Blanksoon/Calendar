import React,{ Component } from 'react'
import CalendarText from './CalendarText'
import CalendarMonth from './CalendarMonth'
class CalendarApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: '999',
      month: 1
    }
    this.changeDate = this.changeDate.bind(this)
  }
  changeDate(dateAdd){
    this.setState({
      date: dateAdd
    })
  }
  render(){
    return(
      <div>
        <h1>{this.props.lebel}</h1>
        <CalendarMonth month={this.state.month} />
        <CalendarText dateText={this.state.date} />
      </div>
    )
  }
}

export default CalendarApp