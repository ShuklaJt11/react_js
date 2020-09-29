import React from 'react'

export default function RefreshButton({ refreshCallback }) {
  return <button className="button-refresh-colors" onClick={refreshCallback}>&#8634;</button>
}