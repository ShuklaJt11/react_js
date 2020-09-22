import React from 'react'

function Main() {
    const date = new Date()
    const hours = date.getHours()
    const styles = {
        fontSize: 48,
        fontWeight: 'bold'
    }

    let timeOfDay

    if (hours < 12) {
        timeOfDay = 'morning'
        styles.color = '#04756F'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
        styles.color = '#8914A3'
    } else {
        timeOfDay = 'night'
        styles.color = '#D90000'
    }

    
    return (
        <div className="main-content">
            <p style={styles}>Good {timeOfDay}!</p>
        </div>
    )
}

export default Main