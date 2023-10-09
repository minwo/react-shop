import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Nav from 'react-bootstrap/Nav';

function Detail(props) {
	const { id } = useParams();
	let 찾은상품 = props.shoes.find((x) => x.id == id );
	console.log(props.shoes);

	// 랜더링 됐을 때
	useEffect(() => {
		
	})

	// mount 됐을 때 
	useEffect(() => {
		var tabs = document.querySelectorAll('.tabs-tab');

		// 각 탭에 클릭 이벤트 리스너를 추가합니다.
		tabs.forEach(function(tab, index) {
			tab.addEventListener('click', function(e) {
				e.preventDefault();

				
			});
		});
	  }, []);

	// unmount 됐을 때
	useEffect(() => {
		return () => {

		}
	})

	const validateInput = (e) => {
		let inputValue = e.target.value;
		if (!inputValue) {
			console.log("Input is required");
		} else if (isNaN(inputValue)) {
			console.log("Input is not a number");
		} else {
			console.log("Input is valid");
		}
	}

	return(
		<>
			<div className="datail">
				<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd_dt" + id + ".webp"} alt="" /></div>
				<div className="prdt-info">
					<p className="title">{ 찾은상품.title }</p>
					<p className="desc">{ 찾은상품.content }</p>
					<p className="price">{ 찾은상품.price }</p>
				</div>
				<div className="ip-txt">
					<input type="text" onChange={(e) => {
						validateInput(e);
					}}/>
				</div>
			</div>

			<div className="tab-ui">
				<div className="tabs">
					<div className="tabs-marker"></div>
					<a href="#" className="tabs-tab">Tab1</a>
					<a href="#" className="tabs-tab">Tab2</a>
					<a href="#" className="tabs-tab">Tab3</a>
				</div>
				<div className="tabpanel">
					Tab1
				</div>
				<div className="tabpanel">
					Tab2
				</div>
				<div className="tabpanel">
					Tab3
				</div>
			</div>
		</>
	)
}

export default Detail;