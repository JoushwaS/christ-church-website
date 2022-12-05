import { useDispatch } from "react-redux";
import moment from "moment";

export function checkDescriptionLength(str, num) {
  return str?.length >= num;
}

export function truncateString(str, num) {
  const condition = checkDescriptionLength(str, num);

  // const result = func();
  if (!condition) {
    return str;
  }
  return str.slice(0, num) + "...";
}

export function formatDate(date) {
  const formatD = moment.utc(date).local().format("L LT");
  return formatD;
}
