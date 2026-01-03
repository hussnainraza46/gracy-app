import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverLeft from "./overviewleft/OverLeft";
import OverRight from "./overviewleft/OverRight";



export default function Overview() {
  

  return (
    <div className="flex gap-4 h-full">
        <OverLeft/>
        <OverRight/>
    </div>
  );
}
