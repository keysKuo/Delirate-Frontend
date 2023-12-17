import "../../assets/mdb/css/bootstrap.min.css";
import "../../assets/mdb/css/mdb.min.css";
import { Link } from "react-router-dom";
import { Image, Input } from "react-ui";
import logo2 from "../../static/delirate_new.png";
import { useState } from "react";

const navLinks = [
	{
		title: "Dashboard",
		link: "/admin",
        icon: "fa fa-clipboard",
        arrow: false,
		children: [],
        onClick: () => {
          
        }
	},
	{
		title: "Store",
		link: "#",
        icon: "fa fa-cubes",
        arrow: true,
		children: [
			{
				title: "All Items",
				link: "#",
			},
			{
				title: "New Item",
				link: "/admin/store/create_item",
			},
		],
        onClick: () => {
           
        }
	},
	{
		title: "Orders",
		link: "#",
        icon: "fa fa-inbox",
        arrow: true,
		children: [
			{
				title: "Create Order",
				link: "/admin/orders/create_order",
			},
			{
				title: "All Orders",
				link: "/admin/orders/list",
			},
		],
        onClick: () => {
        
        }
	},
	{
		title: "Customers",
		link: "#",
        icon: "fa fa-address-card",
        arrow: true,
		children: [
			{
				title: "Add new customer",
				link: "#",
			},
			{
				title: "All Customer",
				link: "#",
			},
		],
        onClick: () => {
          
        }
	},
	{
		title: "Services",
		link: "#",
        icon: "fa fa-star",
        arrow: true,
		children: [
			
		],
        onClick: () => {
          
        }
	},
	{
		title: "Policies",
		link: "#",
        icon: "fa fa-bookmark",
        arrow: true,
		children: [
			{
				title: "All Customer",
				link: "#",
			},
		],
        onClick: () => {
  
        }
	},
	{
		title: "Log out",
		link: "#",
        icon: "fa fa-sign-out",
        arrow: false,
		children: [
			
		],
        onClick: async () => {
            window.location.href = '/';
            localStorage.clear();
        }
	},
];

export default function Navigation() {
	const [activeLinkIndex, setActiveLinkIndex] = useState(null);
	const [navPosition, setNavPosition] = useState("0");
    const [pageName, setPageName] = useState('');
	const handleLinkClick = (index) => {
        setPageName(navLinks[index].title)

		if (index === activeLinkIndex) {
			setActiveLinkIndex(null);
		} else {
			setActiveLinkIndex(index);
		}
		// Set the active link index when a link is clicked
	};

	const toogleSideNav = () => {
		setNavPosition((prev) => {
			if (prev === "-100%") {
				return "0";
			} else {
				return "-100%";
			}
		});
	};

	return (
		<div className="fixed-sn white-skin">
			<header>
				<div
					style={{
						transition: "0.5s ease",
						transform: `translateX(${navPosition})`,
					}}
					id="slide-out"
					className="side-nav sn-bg-4 fixed"
				>
					<ul className="custom-scrollbar">
						<li className="logo-sn waves-effect py-3">
							<div className="text-center center-box">
								<Link to="/" className="pl-0">
									<Image
										style={{ width: "70%" }}
										src={logo2}
									/>
								</Link>
							</div>
						</li>
						<li>
							<form className="search-form" role="search">
								<div className="md-form mt-0 waves-light">
									<Input
										type="text"
										className="form-control py-2"
										placeholder="Search"
									/>
								</div>
							</form>
						</li>

						<li>
							<ul className="collapsible collapsible-accordion">
								{navLinks.map((nav, index) => {
									return (
										<>
											<li
												className={`${
													index === activeLinkIndex
														? "active"
														: ""
												}`}
												key={index}
											>
                                                
												<Link
													to={nav.link}
													onClick={() => {
                                                        handleLinkClick(index);
                                                        nav.onClick();
                                                    }}
													style={{
														display: "flex",
														flexDirection: "row",
													}}
													className={`collapsible-header waves-effect arrow-r ${
														index ===
														activeLinkIndex
															? "active"
															: ""
													}`}
												>
                                                    <span style={{ display: 'inline-block', width: '35px'}}><i  className={nav.icon} aria-hidden="true"></i></span>
													{nav.title}
													{nav.arrow ? <i className="fas fa-angle-down rotate-icon"></i> : <></>}
												</Link>
												<div
													className={`collapsible-body ${
														index ===
														activeLinkIndex
															? "d-block"
															: ""
													}`}
												>
													<ul>
														{nav.children.map(
															(n, childIndex) => {
																return (
																	<>
																		<li
																			key={
																				childIndex
																			}
																		>
																			<Link
																				to={
																					n.link
																				}
																				className="waves-effect px-5 text-left"
																			>
																				{
																					n.title
																				}
																			</Link>
																		</li>
																	</>
																);
															}
														)}
													</ul>
												</div>
											</li>
										</>
									);
								})}
							</ul>
						</li>
					</ul>
					<div className="sidenav-bg mask-strong"></div>
				</div>

				<nav className="navbar fixed-top navbar-expand-lg scrolling-navbar double-nav">
                    <div style={{ position: 'absolute', left: '270px', color: 'black', textTransform: 'uppercase'}}>{pageName}</div>
					<div className="float-left">
						<Link
							onClick={toogleSideNav}
							href="#"
							data-activates="slide-out"
							className="ml-3"
						>
							{/* <i className="fas fa-bars"></i> */}
						</Link>
					</div>

					<ul className="nav navbar-nav nav-flex-icons ml-auto">
						<li className="nav-item dropdown notifications-nav">
							<div
								className="nav-link dropdown-toggle waves-effect"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<span className="badge red">3</span>{" "}
								<i className="fas fa-bell"></i>
								<span className="d-none d-md-inline-block">
									Notifications
								</span>
							</div>
							<div
								className="dropdown-menu dropdown-primary"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<div className="dropdown-item" href="#">
									<i
										className="far fa-money-bill-alt mr-2"
										aria-hidden="true"
									></i>
									<span>New order received</span>
									<span className="float-right">
										<i
											className="far fa-clock"
											aria-hidden="true"
										></i>{" "}
										13 min
									</span>
								</div>
								<div className="dropdown-item" href="#">
									<i
										className="far fa-money-bill-alt mr-2"
										aria-hidden="true"
									></i>
									<span>New order received</span>
									<span className="float-right">
										<i
											className="far fa-clock"
											aria-hidden="true"
										></i>{" "}
										33 min
									</span>
								</div>
								<div className="dropdown-item" href="#">
									<i
										className="fas fa-chart-line mr-2"
										aria-hidden="true"
									></i>
									<span>Your campaign is about to end</span>
									<span className="float-right">
										<i
											className="far fa-clock"
											aria-hidden="true"
										></i>{" "}
										53 min
									</span>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<div className="nav-link waves-effect">
								<i className="fas fa-envelope"></i>{" "}
								<span className="clearfix d-none d-sm-inline-block">
									Contact
								</span>
							</div>
						</li>
						<li className="nav-item">
							<div className="nav-link waves-effect">
								<i className="far fa-comments"></i>{" "}
								<span className="clearfix d-none d-sm-inline-block">
									Support
								</span>
							</div>
						</li>
						<li className="nav-item dropdown">
							<div
								className="nav-link dropdown-toggle waves-effect"
								href="#"
								id="userDropdown"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fas fa-user"></i>{" "}
								<span className="clearfix d-none d-sm-inline-block">
									Profile
								</span>
							</div>
							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="userDropdown"
							>
								<div className="dropdown-item">Log Out</div>
								<div className="dropdown-item">My account</div>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
