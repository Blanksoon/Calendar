import React from 'react'
const showmonth = (props) => {
  const month = ['january','February']
  console.log(props.month)
  return (
    <div>
        {month[props.month]}
        <input
          type = "button"
          value = "next"
        />
    </div>
  )
}

export default showmonth