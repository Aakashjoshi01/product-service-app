import React, { useState } from "react";


export default function TabBarWithRender({ props , tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const [state, setState] = useState("active");
  const TabContainer = {
  display: "flex",
  flexDirection: "row",
 
  }
const TabButton = {
  width: "100%",
  height: "100%",
  padding: "10px ",
  marginLeft:"5px",
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  transition: "0.6s",
  backgroundColor: props =>  (props.active ? "#d1e0e0" : "#f2f2f2")

}
const styles = {
   on : {backgroundColor:"blue"},
}

const styless = {
  off : { backgroundColor:"red" }
}

const Title = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "inherit",
  textTransform: "uppercase",
  fontSize: "14px",
  transition: "0.6s",
}


  return (
    <>
      <div style={TabContainer}>
        {tabs.map((tab, index) => (
          <div  style={TabButton } key={index} active={activeTab === index   } onClick={() => setActiveTab(index)}>
            <div style={Title} active={activeTab === index }>{tab.title}</div>
           
          </div>
        ))}
      </div>
      {tabs[activeTab ].render()}
    </>
  );
}

