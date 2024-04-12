import { useEffect, useState, useRef } from "react";
import {useParams} from "react-router-dom"
import styled from "styled-components";

let Box = styled.div`
  background : yellow;
  padding : 20px;
  color : grey;
`;

function DetailPage(props){

  let [showBox, setShowBox] = useState(true);
  let [count, setCount] = useState(0)
  let {id} = useParams();  
  //id로 숫자(우리가 원하는 항목의 id와 동일하자나?)
  let product = props.shoes.find((shoe)=> shoe.id === parseInt(id));
 //갑니다~
  let [입력값, 입력값변경] = useState('');
  const 최후의입력값 = useRef('');
  
  useEffect(()=>{
    let timer = setTimeout(() => {setShowBox(false); }, 2000); 
    return () => {
      clearTimeout(timer)
    }  
  })

  useEffect(()=>{   
//    입력값, 얘가 숫자가 아니면 "그러지마세요"를 출력하고 숫자였던 전으로 돌아가야지.
    if (isNaN(Number(입력값))){
      console.log("그러지 마세요");
      입력값변경(최후의입력값.current);
    }
    else{
      최후의입력값.current = 입력값;
    }
  }, [입력값])

  


  if(!product){
    return <div>상품을 찾을 수 없음</div>
  }

  return(
      <div className="container">
        {/* 디테일 페이지 방문 후 2초지나면 <div/> 숨기기 */}
        {showBox && <Box>2초 이내 구매시 할인</Box>}
        
        {count}
        <button onClick={()=>{setCount(count + 1)}}>버튼</button>        
        <div className="row">
          <div className="col-md-6">
            <img src={product.src} width="100%" />
          </div>

          <input 
            value={입력값}
            onChange={(e)=>{
              입력값변경(e.target.value)
              console.log(입력값) 
          }}></input>

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