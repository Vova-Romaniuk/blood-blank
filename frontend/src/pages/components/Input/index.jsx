import { useState } from "react";

function Input({
	className = "",
	placeholder = "",
	type = "text",
	id = "",
	name = "",
	value,
}) {
	return (
		<input
			type={type}
			id={id}
			name={name}
			//value={value}
			placeholder={placeholder}
			className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] md:text-base md:placeholder:text-base rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0] ${className}`}
		/>
	);
}

export default Input;
