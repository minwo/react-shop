import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail(props) {
	const { id } = useParams();
	let 찾은상품 = props.shoes.find((x) => x.id == id )

	// 랜더링 됐을 때
	useEffect(() => {
		
	})

	// mount 됐을 때 
	useEffect(() => {
		
	},[])

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
				<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd_dt" + id + ".jpg"} alt="" /></div>
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
		</>
	)
}

export default Detail;