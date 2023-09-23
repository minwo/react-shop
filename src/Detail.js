import { useParams } from "react-router-dom";

function Detail(props) {
	const { id } = useParams();
	let 찾은상품 = props.shoes.find((x) => x.id == id )

	console.log(찾은상품);

	return(
		<div className="datail">
			<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd_dt" + id + ".jpg"} alt="" /></div>
			<div className="prdt-info">
				<p className="title">{ 찾은상품.title }</p>
				<p className="desc">{ 찾은상품.content }</p>
				<p className="price">{ 찾은상품.price }</p>
			</div>
		</div>
	)
}

export default Detail;