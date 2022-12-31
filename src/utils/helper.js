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

export const renderPage = (componentList, page) => {
  // console.log({ page });
  componentList.map((item) => {
    if (page === item?.name) {
      return <>{item?.component}</>;
    }
  });
};

export const ObjectToFormData = (object) => {
  let bodyFormData = new FormData();

  for (var key in object) {
    bodyFormData.append(key, object[key]);
  }

  return bodyFormData;
};
export function formatDate(date) {
  const formatD = moment.utc(date).local().format("L LT");
  return formatD;
}
