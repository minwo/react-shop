import { useState } from 'react';
import productInfo from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';	

function Main(){
	let [shoes, setShoes] = useState(productInfo);

	return(
		<>
			<div className="visual"></div>
			
			<div className="prd-list">
				<Cardlist shoes={shoes}/>
			</div>
			<button onClick={ () => {
				axios.get('https://codingapple1.github.io/shop/data2.json')
				.then((data) => {
					setShoes(data.data)
					console.log(data.data);
				})
				.catch( () => {
					console.log('실패함');
				})
			}}>더 보기</button>
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