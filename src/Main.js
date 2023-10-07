import { useState } from 'react';
import productInfo from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Main(){
	let [shoes, setShoes] = useState(productInfo);
	let [dataPage, setDataPage] = useState(2);


	const moreBtn = async () => {
    	await axios.get("https://codingapple1.github.io/shop/data" + dataPage
		+ ".json")
		.then((result) => {
			setShoes([...shoes, ...result.data]);
			setDataPage(dataPage + 1);
			console.log(shoes);
		})
		.catch(() => {
			console.log('실패');
			console.log(shoes);
		})
		// setShoes([...shoes, ...result.data]);
		// setDataPage(dataPage + 1);
		// console.log(result, result.data);
	};

	return(
		<>
			<div className="prd-list">
				<Cardlist shoes={shoes}/>
			</div>
			<button onClick={moreBtn}>더 보기</button>
		</>
	)
}

function Cardlist(props){
	
	return props.shoes.map(function(obj, idx){
		return(
			<div className="item" key={obj.id}>
				<Link to={`/detail/${props.shoes[idx].id}`}>
					<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd0"+ (idx+1) +".webp"} alt="" /></div>
					<p className="title">{obj.title}</p>
					<p className="detail">{obj.content}</p>
					<p className="price">{obj.price}</p>
				</Link>
			</div>
		)
	})
}

export default Main;