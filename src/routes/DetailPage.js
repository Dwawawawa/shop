import {useParams} from "react-router-dom"

function DetailPage(props){
  
  let {id} = useParams();  
  //id로 숫자(우리가 원하는 항목의 id와 동일하자나?)
  let product = props.shoes.find((shoe)=> shoe.id === parseInt(id));

  if(!product){
    return <div>상품을 찾을 수 없음</div>
  }

  return(
      <div className="container">
        
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