import React from "react";
import { FaRedo } from "react-icons/fa";



const ReloadButton = ({reloadFunction}) => {


    return(
        <FaRedo onClick={reloadFunction} className="socialIcons" size="1.5em" />
        )

}

export default ReloadButton;