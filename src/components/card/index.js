import React from "react";

const style = {
    padding: "10px",
    width: "100%",
    height: "calc(100% - 62px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const Card = ({ name }) => {
    return (
        <div style={style}>{name}</div>
    )
}

export default Card;    