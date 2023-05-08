import { Typography } from "antd"

const Scroller = () => {

    const {Text} = Typography;
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];


    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Text type="secondary">Mutual Action Plan</Text>
            <Text type="success">3%</Text>
            </div>
            <div>
            {arr.map((num,index) =><button key={index} style={{borderRadius:4,border:'none',height:6,width:2,marginInline:1,backgroundColor:num === 1?'green':''}}></button>)}
            </div>
        </div>
    )
}

export default Scroller;