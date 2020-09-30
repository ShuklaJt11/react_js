import React from 'react'

const RefreshButton = React.memo(({ refreshCallback }) => {
  return <button className="button-refresh-colors" onClick={refreshCallback}>&#8634;</button>
})

export default RefreshButton