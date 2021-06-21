import './App.css';
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Front from './Front'
import { Parallax, Background } from 'react-parallax'
import Head from './Head'

const image1 = "https://images.techhive.com/images/article/2016/08/business-buildings-clouds-100678064-large.jpg"
const image = "https://i.gifer.com/origin/45/454ba38b4ce5b3fdc8796ed710769e69.gif"

function App() {
  return (
    <>
    <Head/>
    {/* <Front/> */}
    <About/> 

    <Parallax bgImage={ image }  strength={-200} > 
      <div style={{height: 500}}> </div> 
    </Parallax>

    <Service/>
    <Contact/> 
    <div className="foot" style={{height: 200, margin: "10px 250px", }}> <a href="#top" > back to top </a> </div>
    </>
  );
} 

export default App;


// import React from 'react';
// import { Parallax } from 'react-parallax';

// const image1 =
//   "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
// const image2 =
//   "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
// const image3 =
//   "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
// const image4 =
//   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

// const inlineStyle = {
//   background: '#fff',
//   left: '50%',
//   top: '50%',
//   position: 'absolute',
//   padding: '20px',
//   transform: 'translate(-50%, -50%)',
// }


// function App() {
//   return (
//     <div style={{ textAlign: 'center' }}>

// <div className = "para"> Everest Consultancy is a group of highly qualified and professionally trained accountants. We are providing consistent quality of services, solutions & professionally sound advice to our clients in diverse industries and service providers. We take pride in partnering us with our clients. Our reputation is a result of its highly professional approach & disciplined work culture with various departments. We are a team of young, motivated, talented and professionally trained accountants who are always ready to take opportunities and comes up with interesting and feasible solutions for our clients. We act as a guide, a navigator and a key resource for our clients' firm. A consultant can recommend approaches to complex problems, or advice on the intricate procedures that need to be taken to navigate through complicated business decision.
//             </div>

//       <Parallax bgImage={ image3 } strength={-200} >
//         <div style={{ height: 500 }}>
//           {/* <div style={inlineStyle}>Reverse direction</div> */}
//         </div>
//       </Parallax>

//     <div className = "para"> Everest Consultancy is a group of highly qualified and professionally trained accountants. We are providing consistent quality of services, solutions & professionally sound advice to our clients in diverse industries and service providers. We take pride in partnering us with our clients. Our reputation is a result of its highly professional approach & disciplined work culture with various departments. We are a team of young, motivated, talented and professionally trained accountants who are always ready to take opportunities and comes up with interesting and feasible solutions for our clients. We act as a guide, a navigator and a key resource for our clients' firm. A consultant can recommend approaches to complex problems, or advice on the intricate procedures that need to be taken to navigate through complicated business decision.
//             </div>
//     </div>
//   );
// }

// export default App;