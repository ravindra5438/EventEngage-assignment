import { Button, Typography } from "antd";
import heroStyle from "./hero.module.scss"
import Scroller from "./scroller";
import Image from "next/image";

const Hero = () => {
    const { Title } = Typography;
    return (
        <section id="hero">
            <div className={heroStyle.header}>
                <Title style={{ color: '#04433B',fontWeight:800,marginTop:10 }}>WeWork + Salesforce</Title>
                <Button type="primary" className={heroStyle.headerButton}>Publish/Share</Button>
            </div>
            <div className={heroStyle.relativeContainer}>
                <div className={heroStyle.image}>
                    <div className={heroStyle.logoShowcase}>
                        <img src="/images/wework.png" alt="wework.png"/>
                        +
                        <img src="/images/salesforce.png" alt="salesforce.png"/>
                    </div>
                    <div className={heroStyle.slash}><Title className={heroStyle.skewedText}>Workspace<br />Proposal</Title></div>
                </div>
            </div>
            <div className={heroStyle.endSection}>
                <Title level={5}>Project Scope Recap</Title>
                <Scroller />
            </div>
        </section>
    )
}

export default Hero;