import { SearchOutlined, InboxOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Avatar, Badge, Divider } from "antd";
import Logo from "./logo";
import navStyles from "./nav.module.scss";
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import DrawerIcon from "./drawerIcon";


const Nav = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <nav id={navStyles.nav}>
            <Logo />
            <Button type="text" className={navStyles.ham} onClick={showDrawer}>
                <MenuFoldOutlined />
            </Button>
            <Drawer mask={false} width="100%" open={visible} onClose={onClose}>
                <div className={navStyles.drawerContentContainer}>
                    <div className={navStyles.profile}>
                        <Avatar size={40} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <div className={navStyles.profileNameContainer}>
                            <span>Jane Smith</span>
                            <span style={{fontSize:12,color:'grey'}}>Sales Executive</span>
                        </div>
                    </div>
                    <Divider/>
                    <DrawerIcon name="Search">
                        <SearchOutlined className={navStyles.icon} />
                    </DrawerIcon>
                    <Divider/>
                    <DrawerIcon name="Inbox">
                        <InboxOutlined className={navStyles.icon} />
                    </DrawerIcon>
                    <Divider/>
                    <DrawerIcon name="Notifications">
                        <Badge count={25}>
                            <BellOutlined className={navStyles.icon} />
                        </Badge>
                    </DrawerIcon>
                    <Divider/>
                    <DrawerIcon name="Help">
                        <QuestionCircleOutlined className={navStyles.icon} />
                    </DrawerIcon>
                    <Divider/>

                </div>
            </Drawer>
            <div className={navStyles.navRight}>
                <SearchOutlined className={navStyles.icon} />
                <InboxOutlined className={navStyles.icon} />
                <Badge count={25}>
                    <BellOutlined className={navStyles.icon} />
                </Badge>
                <QuestionCircleOutlined className={navStyles.icon} />
                <Avatar size={40} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </div>
        </nav>
    )
}

export default Nav;