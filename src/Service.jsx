import React from 'react'
import './index'

const Service = () => {
    return (
        <div style={{backgroundColor:"whitesmoke"}} >
            <div className = "box" id="service">
                <div className = "about" > Our Service </div> 
                <hr />
                <div style = {{display:"flex"}}>
                    <div className = "para" style={{width:"33.33%"}}>Taxation and Other Allied Services
                        <ul style = {{fontWeight: "normal", marginLeft:"-5px", marginTop:"0px" }}>
                            <li>Filling of Income Tax Returns (Company, LLP, Individual, NRI, Non- Resident, Firm, etc.) </li>
                            <li>Preparation & Filing of GST Returns</li>
                            <li>Preparation & Filing of TDS Returns</li>
                            <li>PAN & TAN Registration</li>
                            <li>MSME Registration</li> 
                        </ul>
                    </div>
                    <div className = "para" style={{width:"33.33%"}}>ROC Compliance
                        <ul style = {{fontWeight: "normal", marginLeft:"-5px"}}>
                        <li>Company Incorporation (Pvt. Company. Section 8, LLP)</li>
                        <li>DIN Application</li>
                        <li>Other ROC Compliance</li>
                        <li>Procedures</li>
                        </ul>
                    </div>
                    <div className = "para" style={{width:"33.34%"}}>Financial Statements
                        <ul style = {{fontWeight: "normal", marginLeft:"-5px"}}>
                            <li>Accounting / Book keeping services</li>
                            <li>Preparation & Finalization of Financial Statements</li>
                            <li>Maintenance of Books of Accounts</li>
                            <li>Reports Preparation</li>
                            <li>Due Diligence</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;