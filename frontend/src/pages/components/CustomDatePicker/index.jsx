import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { uk } from "date-fns/locale/uk";
import { useFormikContext } from "formik";
registerLocale("uk", uk);

const CustomDatePicker = ({
	className = "",
	isTimeIntervals = false,
	placeholderText = "",
	disabledDaysAndTimes = [],
	name = "",
	value = null,
}) => {
	const datePickerProps = {
		dateFormat: isTimeIntervals ? "d MMMM, yyyy h:mm" : "d MMMM, yyyy",
		placeholderText: placeholderText,
	};
	const { setFieldValue } = useFormikContext();
	if (isTimeIntervals) {
		datePickerProps.showTimeSelect = true;
		datePickerProps.timeIntervals = 30;
		datePickerProps.timeFormat = "HH:mm";
	}

	const filterTime = (time) => {
		const day = value;
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
	const setDate = (value) => {
		setFieldValue(name, value);
	};
	return (
		<DatePicker
			selected={value}
			locale='uk'
			placeholderText={placeholderText}
			onChange={setDate}
			className={`bg-white w-full text-red-700 h-10 border-[#F08080] border-[1px] rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0] ${className}`}
			showTimeSelect
			filterTime={filterTime}
			minDate={new Date("1950-01-01")}
			maxDate={new Date("2100-12-31")}
			// showYearPicker
			showYearDropdown
			yearDropdownItemNumber={150}
			scrollableYearDropdown
			popperClassName='z-[50]'
			{...datePickerProps}
		/>
	);
};

export default CustomDatePicker;
