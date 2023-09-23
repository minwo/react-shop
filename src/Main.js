import { useState } from 'react';
import productInfo from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

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
			<div className="item" key={obj.id}>
				<Link to={`/detail/${props.shoes[idx].id}`}>
					<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd0"+ (idx+1) +".jpg"} alt="" /></div>
					<p className="title">{obj.title}</p>
					<p className="detail">{obj.content}</p>
					<p className="price">{obj.price}</p>
				</Link>
			</div>
		)
	})
}

export default Main;