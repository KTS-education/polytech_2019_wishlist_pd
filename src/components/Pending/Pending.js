import React from 'react'
import './Pending.css'

class Pending extends React.Component{
    render() {
        return(
            <div className="Pending">
                <div className="loader">Loading...</div>
            </div>
        )
    }
}

export default Pending