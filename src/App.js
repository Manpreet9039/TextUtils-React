// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const App = () => {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#042743";
//       showAlert("Dark mode has been enabled", "success");
//       document.title = "TextUtils - Dark Mode";
//       // setInterval(() => {
//       //   document.title = "TextUtil is Amazing!";
//       // }, 2000);
//       // setInterval(() => {
//       //   document.title = "Install TextUtils now!";
//       // }, 1500);
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//       document.title = "TextUtils - Light Mode";
//     }
//   };

//   return (
//     <>
//       <Router>
//         {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
//         <Navbar mode={mode} toggleMode={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           <Routes>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/">
//               <TextForm
//                 showAlert={showAlert}
//                 heading="Enter the text to analyze"
//                 mode={mode}
//               />
//             </Route>
//           </Routes>

//           {/* <About /> */}
//         </div>
//       </Router>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
        {/* }
             /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
