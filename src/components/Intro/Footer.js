import "../../assets/intro.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="body">
			<footer>
				<div className="padding-global">
					<div className="container-medium">
						<div className="padding-footer">
							<div className="w-layout-grid footer-grid">
								<div className="footer-top-content">
									<div className="navbar-intro">
										<div className="padding-global">
											<div
												style={{flexDirection: 'column', justifyContent: 'center'}}
												className="container-large navbar-flex"
											>
												<a
													style={{marginRight: '100px'}}
													href="/intro"
													className="logo-container"
												>
													<div className="logo-face logo-front">
														SUD
														<span className="text-green">
															Tech
														</span>
													</div>
													<div className="logo-face logo-back">
														<span className="text-green">
															SUD
														</span>
														Tech
													</div>
												</a>

												<ul
													style={{ marginRight: '50px', paddingLeft: '0'}}
													className="navbar-group margin-top-2"
												>
													<li className="navbar-link">
														<div className="nav-face logo-front">
															Home
														</div>
														<Link to="/" className="nav-face logo-back text-green">
															Home
														</Link>
													</li>
													<li className="navbar-link">
														<div className="nav-face logo-front">
															About
														</div>
														<Link to="/about" className="nav-face logo-back text-green">
															About
														</Link>
													</li>
													<li className="navbar-link">
														<div className="nav-face logo-front">
															Shops
														</div>
														<Link to="/shops" className="nav-face logo-back text-green">
															Shops
														</Link>
													</li>
													<li className="navbar-link">
														<div  className="nav-face logo-front">
															Projects
														</div>
														<Link to="/examples" className="nav-face logo-back text-green">
															Projects
														</Link>
													</li>
													<li className="navbar-link">
														<div className="nav-face logo-front">
															Contact
														</div>
														<div className="nav-face logo-back text-green">
															Contact
														</div>
													</li>
													<li className="navbar-link">
														<div className="nav-face logo-front">
															Delirate
														</div>
														<div className="nav-face logo-back text-green">
															Delirate
														</div>
													</li>
												</ul>

												<div className="margin-top-2">
													<div className="social-grid">
														<div className="social-link-item">
															<img alt="y" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAASJJREFUWEftl2EOgjAMhd84id4Ej6HExJ5EPUlNDHoMuYl4ETQ1ksBUugohxKwJv9Z13167rThMzNzEeBCBtIwMqhDzMQWSGQD5xEqgKonWhQZSjw8C9ALhBkhrfaIseJ1gx287ZM53ALZdCowGxHyeAdVVS8eIQLo6AjsmkNTNpq2QKwBHRMtSU+7TeK8aYj5dgHvaDlwtLKfKh+oJlEv91Ef8FTuZ/6qOBIhAWl2ZFGLOpYib5hX0c+jg+dyIMrmrgswKdA+K2nJyBdFqETpvBCDsJ6bQ9ICIKPPr6msGjSmT9qJpyacXnqTlqL2sl6QJyN8Wc7wYuw9rVEi7zKJCUaHYD2k18I8KvTVellZj8L+OgAyYXXo9rubVAiZEIE2kB6MwkCXml/rlAAAAAElFTkSuQmCC" />
														</div>
														<div className="social-link-item">
															<img alt="y" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAd5JREFUWEftV9FNwzAQfY4YJJ2EdAyIUHuTQCdxEaoYgzAJWYQEXepQNz3H57RFRcpJ+UnOzvPz87uzwY2FuTE8mAHFdmRm6M8ZsvY9B5pnAAWAHDAV0H4C2ZboofYBce7w3cmWuQnXROVLbDXD79bueAyDkaIGGgIyBrkC2gLIFgpAb5z4AWCTAsra33HadRBRuR0mCwwdrVIFyrH6pUUCwAExOdHj0h8nAbIA1ock1oChIbXHWthxPo9LiZqoXGgYCk3O+19JwCLaEfUkgeFEgaGYFpix7w1wV/fgrN0NWI0SFZSCaIz6FTO4PvjUqEMPyFrWQ1Y5L/G0pP6ZIrFZEj15i/EUK3hJTz+bWK6YfUJKGqApJyYJFFEZrKEhDbGnXIkdUw29Z9SH+ONeR10JuAaoUbMNUudKAevpkqBEM4wytGep8yOvECbJJJQcLUUxhrjIXizGxNz/ZLRj1BukCnOUHbF0CL7EPc7qPC2NnyyVhvwkp6cCMPf7xiopokJOBuRZQWKLoWdGqaGuP2ZGJnhSOpgTDTlDZN85RzNd7xwqnrHNDpWOCU7d3S5epT45BkKtoYOYOzJZ0MwePzVgaqDljoCvOGInmQJEpaEpE547Zr5KxxicGfp3DP0A3b66JX4QwnMAAAAASUVORK5CYII=" />
														</div>

														<div className="social-link-item">
															<img alt="y" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAqxJREFUWEftV91qE0EU/s7GPIUICeKFXngheN+8gVoEmzVkZ+krCCLFNoiI+AiFzKZtrFQq+ASN1+KleqWuF+JLNDMy2SQs+zNz2t1Ahc5lcubMt993fgkX7NAFw4NLQC5F2AxJedgCTluAt+Zymvo/BlQsRG/CveMEJOU4ACC5Di12MYCREP6OzVcpoIQRLQF9FkY4uGPA6wixYQDmjgXQ25MVgJkDoIkQ3Q4bUI0y2RgTQvhR1qCQISnHvwC0OPwzbAaAmgCeicO0z1gIv80FpBkPcUwiIXxhDKXcXwO8k/QlIfwcIbkfzijXAID50ihJAmUSwLCwPX94yUKxX9XJloTzArJmSiZDY4DikgTJxVERIFMnFl9YlJjLDImid9e1nt4FcIuItFLqG0Cfw9D/ySwbg2xdOgeghObd3dHtRqOxQ0T3M6iPiWg7CLpf5zKaBCk7lQHNgnRv76it1OkbrfV6yUvvp1M82dz0f0s5Ntllqn3RqQxoprmU44cAjhxpti6E/6Eou1L3qgLy2qbkD4cHz4nIZFjp0VpvheHjlw7ZqgJK4ieKxlta44UNEBE9C4LuqxUzlACScvwAwLGdIdwLQ/+jo65VZQizoB4OD68B09dEtFHYIEkfEE2f9vv9P6sOajNwiTlLN+b1ys+A2idqDILg0Q+HXOZaZYaMk2U7GI1GV5Vq3tFa3STytNbqe7Opv/R6vb9J/3KOMCxAnAmR0TqUaaSuiYHTOvJduSR4zcRnZuVPZm4Grhg5FwXQ0nrS3ljNdda1beWeM3YwbZK6ljYuGdCc2jMftJux5qEkGGvbNCyI8nIZ4/9jyE9YmsWSCVJmgHJVLN84rAwt3CfyUb+Glajaopj93tQqbWqLq76krqtJras0V4i67Jy7fV0Pcf1cAnIx9Q+21GE06Fuv2AAAAABJRU5ErkJggg==" />
														</div>
														<div className="social-link-item">
															<img alt="y" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAoxJREFUWEftWFtu1EAQrHG4B7snyeYYYBDpT7jEbg6BxF9nBYZjxDlHPuLcA9moveNkPO55mSAFxEiREskzU66u6i7H4IUt88Lw4N8AxPxjA/SXgDkHhg0A+elObJsOGDqgPxK9b0srUMQQc3MAsC+4REAeiWrZl7WyADF/3QHVTdaJ+kPZwJKAVrASw32VYisKiPn7DTDsfoMZbes1UU2hM4OAnpkZ//4gUyqgdZoxLWAI+LkBKnHduTgNeCWuY4VpIqqvfaQBQM29tXJJtaQMAuQDALH77XQhc3MJgL3DOqJ6mwS0vlTVFujFiQJKljjrCqjaAEPyzKJ0C4aYV7EDotowN0MJpQLaZ2kGKEBtxh2in+GolCVjb3/hdnQfkNRZ6p27OjsqjkDfAWf7FW1iVjYPULDv2Dn1OLOi4+Bp1uWMGdMSvb2YGPAZUtz1tEHaQcnAtMB24rbT76r9ZzryASmirLZEbyaGckupPmcByku7qxTQXHRyEvO3z4D5BAxfiN59dE+3xpBEoJZVc6I4tKBkWMwe5qaX4COHPDzcnR0OB/l7XM6FC0sHZmOMoZCo5ywlGJoy08w94XEUF3UogCVjQ0pckR43q4An6mAQU+dOCsRcW3nsa6Mj1P69EowDc5zo0gpODpIlWRuv3cwTSw+uoGW3BkibzNPLeqDGsL8HjAUz3AJ96/aqRJRZRBAF0HiJO7X9ysgXBaUapO05Yv/QKMqLH9a6MZYmgNIsx9xjS9UB1RR3JRNNMSQgtWV/U0vm9JPST54SjZdF2D8Lat53/Lf4uz6DHKZEUyLQhC6CVcsyQlRD/tFlGedxd/YXqzpcc1WZ8c+GRT/KPTupodyDnuu5/4BSTP4ChK9cNFYcD+cAAAAASUVORK5CYII=" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
