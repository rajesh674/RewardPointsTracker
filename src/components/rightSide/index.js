import React from "react";
import Card from "../card";
import { Resizable } from "re-resizable";

const style = {
    border: "solid 1px #ddd",
    marginRight: "15px",
    marginBottom: "15px"
};
const style2 = {
    display: "flex",
    flexWrap: "wrap",
    height: "calc(100vh - 60px)",
    overflowY: "auto",
    width: "calc(100% - 200px)",
    paddingTop: "15px"

};
const style3 = {
    borderBottom: "solid 1px #ddd",
    padding: "10px",
};
let rightSide = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15", "item16", "item17", "item18", "item19", "item20"]
const RightSide = () => {
    return (
        <div style={style2}>
            {rightSide.map((item) => <Resizable
                style={style}
                defaultSize={{
                    width: 240,
                    height: 200
                }}
            > <div style={{height:'100%'}}>
                    <div style={style3}>Header</div>
                    <Card name={item} />
                </div>
            </Resizable>)}

        </div>
    )
}

export default RightSide;