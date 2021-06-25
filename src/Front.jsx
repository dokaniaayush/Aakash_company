import React from 'react'
import './index'

const Front = () => {
    return (
    <>Welcome To <br/> EVEREST  CONSULTANCY 
        <div className = "box1"  style = {{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div>Don't ever let your business get ahead of the financial side of your business. Accounting, accounting, accounting. Know your numbers.</div>
                <div style={{textAlign:"right"}}>Tilman J. Fertitta</div>
            </div>
            <div>
                <img src="src\Calculator.png"/>
            </div>
        </div>
    </>
    )
}

export default Front;