import { useState } from 'react';
import productInfo from './data.js';

function Main(){
	let [shoes, setShoes] = useState(productInfo);

	return(
		<>
			<div className="visual"></div>
			
			<div className="prd-list">
				<Cardlist shoes={shoes}/>
			</div>
		</>
	)
}

function Cardlist(props){
	
	return props.shoes.map(function(obj, idx){
		return(
			<div className="item" key={idx}>
				<a href={"./detail0" + obj.id }>
					<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd0"+ (idx+1) +".jpg"} alt="" /></div>
					<p className="title">{obj.title}</p>
					<p className="detail">{obj.content}</p>
					<p className="price">{obj.price}</p>
				</a>
			</div>
		)
	})
}

export default Main;