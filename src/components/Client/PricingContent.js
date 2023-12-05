export default function PricingContent({ list }) {
	return (
		<>
			{list.map((item, index) => {
				return (
					<div key={index}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill="var(--pds-color-white, #FFF)"
							class="src-mainapp-features-___FeatureListing__icon___7M88R mr-2"
						>
							<path d="M9 15.5858L19.2934 5.29245L20.7067 6.70758L9 18.4142L3.29332 12.7076L4.70661 11.2924L9 15.5858Z"></path>
						</svg>
						<span style={{ fontSize: '15px'}}>{item}</span>
					</div>
				);
			})}

			<div className="d-flex justify-content-center">
				<button
					style={{
						position: "absolute",
						bottom: "20px",
					}}
					className="btn btn-success bg-x"
				>
					Get Started
				</button>
			</div>
		</>
	);
}
