import React from "react";
import {
    MenuOutlined
} from '@ant-design/icons';
const style = {
    background: "#000",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Header = ({ rightSide, setRightSide }) => {
    return (
        <div style={style}>
            <button onClick={() => setRightSide(!rightSide)}><MenuOutlined /></button>

            <div>Header</div>
        </div>
    )
}

export default Header;  