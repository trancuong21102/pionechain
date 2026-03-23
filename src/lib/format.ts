import dayjs from "dayjs";

export default function DateFormat(currentDate: any) {
  const provideDate = dayjs(currentDate);
  const formattedDate = provideDate.format("MMM DD, YYYY");
  return formattedDate;
}
