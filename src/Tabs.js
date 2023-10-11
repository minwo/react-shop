import { useEffect , useState } from "react";

const Tabs = (props) => {
	const [isActive, setIsActive] = useState(props.defualt);
	// 랜더링 됐을 때
	useEffect(() => {
		console.log(props);
		let tabs = document.querySelectorAll('.tabs-tab');

		tabs.forEach(function(tab, index) {
			tab.addEventListener('click', function(e) {
				e.preventDefault();
				
				setIsActive(index);
			});
		});
	})

	return(
		<div className={`tab-ui ${props.className}`}>
			<div className="tabs">
				<div className="tabs-marker"></div>
				<a href="#" className={`tabs-tab ${isActive === 0 ? 'active' : ''}`}>Tab1</a>
				<a href="#" className={`tabs-tab ${isActive === 1 ? 'active' : ''}`}>Tab2</a>
				<a href="#" className={`tabs-tab ${isActive === 2 ? 'active' : ''}`}>Tab3</a>
			</div>
			<div className={`tabpanel ${isActive === 0 ? 'active' : ''}`}>
				Tab1
			</div>
			<div className={`tabpanel ${isActive === 1 ? 'active' : ''}`}>
				Tab2
			</div>
			<div className={`tabpanel ${isActive === 2 ? 'active' : ''}`}>
				Tab3
			</div>
		</div>
	)
}

export default Tabs;