import { useEffect, useRef } from 'react'
import initWeatherOption from './echarts/weatherOption'
import initSaleOption from './echarts/saleOption'

let myChart1 = null
let myChart2 = null

export default (props) => {
 
  // 使用ref进行DOM操作
  const main1 = useRef(null)
  const main2 = useRef(null)

  // 副作用： DOM操作、异步行为、长连接、定时器
  useEffect(() => {
    console.log('echarts', echarts);
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('KzkTest'));
    // 使用ref获取DOM节点
    // 实例化图标对象
    myChart1 = echarts.init(main1.current)
    myChart2 = echarts.init(main2.current)
    return undefined
  }, [])

  useEffect(()=>{
    let a = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    let b = [5, 20, 36, 10, 10, 20]
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(initSaleOption(a, b));
    myChart2.setOption(initWeatherOption());
    return undefined
  },[])
  
  return (
    <div className="KzkTest">
      <h1>KzkTest</h1>
      <hr />
      <div 
        ref={main1} 
        style={{width: '600px', height: '400px', marginTop: '30px'}}
      ></div>
      <hr />
      <div 
        ref={main2} 
        style={{width: '600px', height: '400px', marginTop: '30px'}}
      ></div>
    </div>
  );
};
