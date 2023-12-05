import "../../assets/intro.css";

export default function HeroText() {
	return (
		<div className="body">
			<div className="center-box-intro">
				<div className="padding-section-header">
					<div className="header-row">
						<div className="d-inline-block header-logo">
							<img
								alt="z"
								src="data:image/png;base64,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kWCLwVYDLZL3Zio/PobPpU4C9/FVA6300ldiYquAXivkX5cEo+Zr/iKR4LNNbG/QInlWn8juE3p/ASKNSIbtBVokP3fI7hO6N9i1QQP56aOG6sfQxw5eRBplnti1QIvkIzOR5Q45DgEXaVw07NKgRfKQhSx3yNE67FKggXzsNf3//y93yNEq7NyggWyD3MyEbuXkMRdoIC+D3Cxo1TdoUj44uns3LeUx0hj82rr2O3u51t08aDXY2/WcLmzQfPdZzdts/1hm65C7AS0Ge6Fnv816gdwdaGDbnhS9Qe4WNLCfh90r5O5BA3vv+mzl2zhtrxf5qpu5Dp26yyqXw1L3w7p97xN5P4/VgF7bxF4b5NUcchyaaL1O7LVCXj3o3ib22iEDem90tzqxgbx38ms9yei9vhXYQH5a4upOCmOfkKqwgXzkOntsg9dapwIbyHECmdBxOQUv2ECObNC2DNC2vKrBBrKxMYBeFljpy31ATusLEzotv2wTG8iJjWBC5wkwdWIDOW8fmNB584ye2EDOHDwTukygT0zsl9uPV23+gOgwhS81v42z7F7qPToTWq8nrCghAUAnhMemegkAWq8nrCghAUAnhMemegkAWq8nrCghAUAnhMemegkAWq8nrCghAUAnhMemegkAWq8nrCghAUAnhMemegkAWq8nrCghAUAnhMemegkAWq8nrCghAUAnhMemegkAWq8nrCghgf8ACUdWWlyOvdMAAAAASUVORK5CYII="
							/>
						</div>
						<div className="d-inline-block header-text ml-4">
							<h1 className="hero-text">
								<span className="text-green px-1">S</span>hadow
							</h1>
							<h1 className="hero-text">
								<span className="text-green">U</span>nderated
							</h1>
							<h1 className="hero-text">
								<span className="text-green px-0">D</span>
								ecentralized
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
