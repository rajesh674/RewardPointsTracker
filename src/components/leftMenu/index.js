import React from "react";

let leftMenu = ["item1", "item2", "item3", "item4", "item5"]
const style = {
    background: "#000",
    color: "#fff",
    marginRight: "20px",
    height: "calc(100vh - 42px)",
};

const itemStyle = {
    borderBottom: "solid 1px #ddd",
    padding: "10px",
};

const LeftMenu = ({ rightSide }) => {
    return (
        <div style={rightSide ? { ...style, width: "50px" } : { ...style, width: "200px" }}>{
                rightSide ? <div style={itemStyle}>Menu Icon</div> : leftMenu.map((item) => {
                    return <div style={itemStyle} key={item}>{item}</div>
                })
            }</div>
    )
}

export default LeftMenu;