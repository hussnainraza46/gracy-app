import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverLeft from "./overviewleft/OverLeft";
import ActionToolbar from "./DriverPerformance/RightActionTool";
import Toolbar from "./DriverPerformance/RightActionTool";




export default function DriverPerformance() {
  

  return (
    <div className="flex gap-4 ">
        <OverLeft/>
        <div className="div w-full">
          <Toolbar/>
        </div>
        
    </div>
  );
}
