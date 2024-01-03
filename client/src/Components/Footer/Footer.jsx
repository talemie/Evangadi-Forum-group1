import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Footer() {
	return (
		<footer style={{ backgroundColor: "#3B455A" }}>
			<div className=" px-20">
				
						<div className="pt-16 pb-20  flex flex-wrap md:flex-nowrap justify-between  ">
							<div className=" w-full md:w-1/3  ">
								<div className="logo">
									<img
										src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
										alt=""
									/>
								</div>
								<div className="flex flex-row space-x-8 text-4xl pt-6">
									<div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border border-white hover:bg-white ">
										<FaFacebookF className="text-white text-2xl hover:text-blue-600" />
									</div>
									<div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border border-white hover:bg-white">
										<FaInstagram className="text-white text-2xl hover:text-blue-600" />
									</div>
									<div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border border-white hover:bg-white ">
										<GrYoutube className="text-white text-2xl hover:text-red-600" />
									</div>
								</div>
							</div>
							<div className=" w-full md:w-1/3 ">
								<h5 className="text-white text-2xl">Useful Link</h5>
								<ul>
									<li className="pt-3 text-custom-color hover:text-white hover:underline">
										<a href="/">how it works</a>
									</li>
									<li className="text-custom-color hover:text-white hover:underline">
										<a href="/">Terms of Service</a>
									</li>
									<li className="text-custom-color hover:text-white hover:underline">
										<a href="/">Privacy policy</a>
									</li>
								</ul>
							</div>
							<div className=" w-full md:w-1/3">
								<h5 className="text-white text-2xl">Contact Info</h5>
								<ul>
									<li className="pt-3 text-custom-color">Evangadi Networks</li>
									<li className="text-custom-color">Support@evangadi.com</li>
									<li className="text-custom-color">+1-202-386-2702</li>
								</ul>
							</div>
						</div>
					</div>
				
		</footer>
	);
}

export default Footer;
