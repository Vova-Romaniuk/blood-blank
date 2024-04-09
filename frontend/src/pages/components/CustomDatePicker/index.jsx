import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { uk } from "date-fns/locale/uk";
registerLocale("uk", uk);

const CustomDatePicker = ({
	className = "",
	isTimeIntervals = false,
	placeholderText = "",
	disabledDaysAndTimes = [],
}) => {
	const [startDate, setStartDate] = useState(null);

	const datePickerProps = {
		dateFormat: "MMMM d, yyyy h:mm aa",
		placeholderText: placeholderText,
	};

	// Додавання властивостей в разі необхідності
	if (isTimeIntervals) {
		datePickerProps.showTimeSelect = true;
		datePickerProps.timeIntervals = 30;
		datePickerProps.timeFormat = "HH:mm";
	}

	const filterTime = (time) => {
		const day = startDate;
		if (!day) return true;

		const disabledTimes = disabledDaysAndTimes.find(
			(item) => item.day.toDateString() === day.toDateString()
		);
		if (!disabledTimes) return true;

		const { times } = disabledTimes;

		const formattedTime = `${time.getHours()}:${
			time.getMinutes() < 10 ? "0" : ""
		}${time.getMinutes()}`;

		return !times.includes(formattedTime);
	};

	return (
		<DatePicker
			selected={startDate}
			locale='uk'
			onChange={(date) => setStartDate(date)}
			placeholderText={placeholderText}
			className={`bg-white w-full text-red-700 h-10 border-[#F08080] border-[1px] rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0] ${className}`}
			showTimeSelect
			filterTime={filterTime}
			{...datePickerProps}
		/>
	);
};

export default CustomDatePicker;
