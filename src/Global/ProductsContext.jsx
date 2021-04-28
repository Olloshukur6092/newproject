import React, { createContext, useState } from "react";
import Antifriz from "../assets/antifriz.jpg";
import Akkamulyator from "../assets/akkumlyator.jpg";
import Kalotka from "../assets/kalotka.jpg";
import MatorMoyi from "../assets/matormoyi.jpg";
import OldFara from "../assets/oldfara.jpg";
import OrqaFara from "../assets/orqafara.jpg";
import Shina from "../assets/shina.jpg";
import Tormoz from "../assets/tormozkalotka.jpg";

export const ProductsContext = createContext();


const ProductsContextProvider = (props) => {

	const [products] = useState([

		{ id: 1, name: "Antifriz", price: 25, img: Antifriz, status: "new" },
		{ id: 2, name: "Akkamulyator", price: 45, img: Akkamulyator, status: "hot" },
		{ id: 3, name: "Kalotka", price: 30, img: Kalotka, status: "new" },
		{ id: 4, name: "Mator Moyi", price: 15, img: MatorMoyi, status: "hot" },
		{ id: 5, name: "Old Fara", price: 20, img: OldFara, status: "new" },
		{ id: 6, name: "Orqa Fara", price: 25, img: OrqaFara, status: "hot" },
		{ id: 7, name: "Shina", price: 30, img: Shina, status: "new" },
		{ id: 8, name: "Tormoz Kalotka", price: 450, img: Tormoz, status: "hot" }	

		])

	return (
		<ProductsContext.Provider value={{products: [...products]}} >
			{ props.children }
		</ProductsContext.Provider>
		)
}

export default ProductsContextProvider;