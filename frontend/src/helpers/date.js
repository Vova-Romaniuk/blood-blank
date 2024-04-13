import dayjs from "dayjs";
import "dayjs/locale/uk";

dayjs.locale("uk");

export const formatUkrainianDateBirthday = (dateString) =>
	dayjs(dateString).format("D MMMM, YYYY");

export const formatUkrainianDateTimeDonation = (dateString) =>
	dayjs(dateString).format("D MMMM, YYYY hh:mm");
