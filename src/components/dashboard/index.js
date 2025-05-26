import React,{useState} from "react";
import LeftMenu from "../leftMenu";
import RightSide from "../rightSide";
import Header from "../../header";

const style = {
    background: "#f0f0f0",
    display: "flex",
};
const Dashboard = () => {
    const [rightSide, setRightSide] = useState(false);
    return (<>
        <Header rightSide={rightSide} setRightSide={setRightSide} />
        <div style={style}>

            <LeftMenu rightSide={rightSide} />
            <RightSide rightSide={rightSide} />
        </div>
    </>)
}

export default Dashboard;