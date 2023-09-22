function Detail(props) {
	return(
		<div className="datail">
			<div className="img"><img src={process.env.PUBLIC_URL + "/product/img_prd_dt01.jpg"} alt="" /></div>
			<div className="prdt-info">
				<p className="title">{ props.shoes[0].title }</p>
				<p className="desc">{ props.shoes[0].content }</p>
				<p className="price">{ props.shoes[0].price }</p>
			</div>
		</div>
	)
}

export default Detail;