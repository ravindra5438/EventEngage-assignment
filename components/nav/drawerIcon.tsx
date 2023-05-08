import React from "react";
import navStyles from "./nav.module.scss";

const DrawerIcon = ({children,name}:{children:React.ReactNode,name:string}) => {
    return(
        <div className={navStyles.drawerContent}>
            {children}
            <span>{name}</span>
        </div>
    )
}

export default DrawerIcon;