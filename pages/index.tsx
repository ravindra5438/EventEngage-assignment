import Nav from "@/components/nav";
import { Divider, ConfigProvider } from "antd";
import Hero from "@/components/hero";
import Content from "@/components/content"


const Home = () => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <Nav />
            <Divider style={{ margin: 0 }} />
            <Hero />
            <Content />
        </ConfigProvider>
    )
}

export default Home;