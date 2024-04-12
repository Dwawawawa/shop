import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styled from "styled-components";

let Box = styled.div`
  background : yellow;
  padding : 20px;
  color : grey;
`;

function DetailPage(props){
  
  useEffect(()=>{
    console.log('안녕')
  })

  setTimeout(() => {
    
  }, 2000);

  let [count, setCount] = useState(0)

  let {id} = useParams();  
  //id로 숫자(우리가 원하는 항목의 id와 동일하자나?)
  let product = props.shoes.find((shoe)=> shoe.id === parseInt(id));

  if(!product){
    return <div>상품을 찾을 수 없음</div>
  }

  return(
      <div className="container">
{/* 디테일 페이지 방문 후 2초지나면 <div/> 숨기기 */}
        <div className = "alret alret-warning">2초이내 구매시 할인</div>
        {count}
        <button onClick={()=>{setCount(count + 1)}}>버튼</button>        
        <div className="row">
          <div className="col-md-6">
            <img src={product.src} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

  export default DetailPage;