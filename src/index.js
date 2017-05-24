import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Calendar from './components/CalendarApp'

const render = (Calendar) => {
  ReactDOM.render(
    <AppContainer>
      <Calendar label="I'm a counter" />
    </AppContainer>,
    document.getElementById('react-root'))
}

render(Calendar)
if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    render(Calendar)
  })
}