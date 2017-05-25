import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import CalendarApp from './components/CalendarApp'
//import Counter from './components/Counter'

const render = (CalendarApp) => (
  ReactDOM.render(
    <AppContainer>
      <CalendarApp label="Calendar" />
    </AppContainer>,
    document.getElementById('react-root')
  )
)

render(CalendarApp)

if (module.hot) {
  module.hot.accept('./components/CalendarApp', () => {
    render(CalendarApp)
  })
}
