import react from 'react'
import './index'

const Contact = () => {
    return (
        <>
            <div className = "about" style = {{margin: "10px 250px"}} id="contact">contact us </div>
            <div style={{margin: "10px 250px", display: "flex", flexDirection: "row"}} >
                <div className="contact" >
                    CONTACT<br/><br/>
                    Mr. Harekrishna Poddar<br/>
                    Partner<br/><br/>
                    Email: info.evecons@gmail.com<br/>  
                    Mob: +91 81006 47519<br/>
                    Phn: 033 46036868<br/>


                </div>
                <div className="contact" style={{borderLeft: "0px"}}>
                    LOCATION<br/><br/>
                    Registered Address:<br/>
                    Ashram Nagar, Jagatpur,<br/>
                    Banka- 813 102, Bihar<br/><br/>
                    Branch Address:<br/>
                    CL-38, Salt Lake Sector- II, Kolkata- 700 091, West Bengal<br/>
                </div>
                <div className="contact" style={{borderLeft: "0px"}}>
                    OPENING HOURS<br/><br/>
                    Mon - Fri: 10:00am - 6:00pm<br/>
                    ​​Saturday: 11:00am - 5:00pm<br/>
                    ​Sunday: Closed<br/>
                </div>
            </div>
        </>
    );
}

export default Contact;