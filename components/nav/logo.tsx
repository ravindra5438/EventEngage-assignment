import navStyle from "./nav.module.scss";
import { RightOutlined } from "@ant-design/icons";


const Logo = () => {
    return(
        <div className={navStyle.logoContainer}>
            <div className={navStyle.outerCircle}>
                <div className={navStyle.innerCircle}/>
            </div>
            <RightOutlined className={navStyle.icon}/>
        </div>
    )
}

export default Logo;