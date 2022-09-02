// import React, { useState } from "react";


// export default function TabBar({ tabs }) {
//   const [activeTab, setActiveTab] = useState(0);

//   const TabContainer = {
//   display: "flex",
//   flexDirection: "row",
//   width: "100%",
//   height: "60px",
//   marginBottom: "100px",
//   }

//   const TabButton ={
//   width: "100%",
//   height: "100%",
//   padding: "10px",
//   border: "none",
//   display:" flex",
//   flexDirection: "column",
//   alignItems: "center",
//   position: "relative",
//   transition: "0.6s",

// }
// const Title = {
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "inherit",
//   textTransform: "uppercase",
//   fontSize: "20px",
// }

// const Indicator = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   transition: "0.6s",
// }

//   return (
//     <div style={TabContainer}>
//       {tabs.map((title, index) => (
//         <div style={TabButton} key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
//           <div style={Title} active={activeTab === index}>{title}</div>
//           <div style = {Indicator} active={activeTab === index} />
//         </div>
//       ))}
//     </div>
//   );
// }

