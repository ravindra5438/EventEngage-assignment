import { Badge, Button, Divider, Typography } from "antd";
import contentStyle from "./content.module.scss";
import { ArrowDownOutlined, DeleteOutlined, EyeInvisibleOutlined, MessageOutlined, ShareAltOutlined,ZoomOutOutlined,ZoomInOutlined,FilePdfOutlined,FolderOpenFilled } from "@ant-design/icons";
import navIconStyle from "../nav/nav.module.scss"
import Image from "next/image";

const Content = () => {

    const {Title} = Typography;


    return(
        
        <div>
            <div className={contentStyle.buttonContainer}>
                <div className={contentStyle.leftButtonListContainer}>
                    <Button className={contentStyle.drawerButton}>Basic Info</Button>
                    <Button className={contentStyle.drawerButton}>Files</Button>
                    <Button className={contentStyle.drawerButton}>Mutual Action Plan</Button>
                    <Button className={contentStyle.drawerButton}>Contact</Button>
                </div>
                    <Button className={contentStyle.drawerButton}>Internal Actions</Button>
            </div>
            <Divider style={{marginTop:0}}/>
            <div className={contentStyle.contentContainer}>
                <div className={contentStyle.overviewContainer}>
                    <div className={contentStyle.overview}>
                        <h3>Overview</h3>
                        <Divider style={{margin:0}}/>
                        <p>Welcome</p>
                        <Divider style={{margin:0}}/>
                        <p>Product Capabilities</p>
                        <Divider style={{margin:0}}/>

                        <p>Customer Success Stories</p>
                        <Divider style={{margin:0}}/>

                        <p>File Sharing</p>
                        <Divider style={{margin:0}}/>
                        <p>Our Deck</p>
                    </div>
                </div>
                <div className={contentStyle.imageContainer}>
                    <div className={contentStyle.contentHeader}>
                        <h2>Company Profile</h2>
                        <div className={contentStyle.actionContainer}>
                            <ArrowDownOutlined className={navIconStyle.icon}  style={{cursor:"pointer",marginRight:3}}/>|
                            <EyeInvisibleOutlined className={navIconStyle.icon} style={{cursor:"pointer",marginRight:3,marginLeft:3}}/>|
                            <DeleteOutlined className={navIconStyle.icon} style={{cursor:"pointer",marginLeft:3}}/>
                        </div>
                    </div>
                    <div style={{width:"100%",position:"relative",display:"flex",justifyContent:"center"}}>
                        <div className={contentStyle.middleIconContainer}>
                            <FilePdfOutlined className={contentStyle.icon} /> 1/15 |
                            <ArrowDownOutlined className={contentStyle.icon}/>|
                            <ZoomOutOutlined className={contentStyle.icon}/>|
                            <ZoomInOutlined className={contentStyle.icon}/>|
                            <FolderOpenFilled className={contentStyle.icon}/>
                        </div>
                    </div>
                    <div className={contentStyle.showcaseContainer}>
                        <div className={contentStyle.showcaseContainerText}>
                            <Image src="/images/weworkLogo.png" alt="wework.png" width={160} height={40} />
                            <h6>For all the ways you work, we&apos;re here</h6>
                        </div>
                    </div>
                    <div className={contentStyle.iconContainer}>
                        <Badge style={{ backgroundColor: '#52c41a' }} count={5}>
                            <MessageOutlined className={navIconStyle.icon}/>
                        </Badge>|
                        <ShareAltOutlined className={navIconStyle.icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;