import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productInfo } from './store';

function Main(){
	let [dataPage, setDataPage] = useState(2);
	let state = useSelector((state) => {
		return state
	})

	let [shoes, setShoes] = useState(state.productInfo);
	let [prdCount, setCount ] = useState(3);
	console.log(prdCount);

	const moreBtn = () => {
		prdCount = setCount( prdCount + 3);
		console.log(prdCount)
	}

	let [recentItem, setRecentItem] = useState('');

	// 랜더링 됐을 때
	useEffect(() => {
		setRecentItem(localStorage.getItem('최근본상품'));
	})

	// const moreBtn = async () => {
	// 	await axios.get("https://codingapple1.github.io/shop/data" + dataPage + ".json")
	// 	.then((result) => {
	// 		setShoes([...shoes, ...result.data]);
	// 		setDataPage(dataPage + 1);
	// 		console.log(shoes);
	// 	})
	// 	.catch(() => {
	// 		console.log('실패');
	// 		console.log(shoes);
	// 	})
	// 	setShoes([...shoes, ...result.data]);
	// 	setDataPage(dataPage + 1);
	// 	console.log(result, result.data);
		
	// };

	return(
		<>
			<div className="prd-list">
				<Cardlist shoes={shoes} prdCount={prdCount}/>
			</div>
			<button onClick={moreBtn}>더 보기</button>

			<div>최근본상품</div>
			<img src={recentItem} alt="" />
		</>
	)
}

function Cardlist(props){
	
	return props.shoes.slice(0, props.prdCount).map(function(obj, idx){
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