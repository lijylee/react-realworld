import dayjs from "dayjs";

export const dateFormat = (str) => dayjs(str).format("MMMM D,YYYY");
