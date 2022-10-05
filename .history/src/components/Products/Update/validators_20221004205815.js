import moment from "moment";
import { timestampToDays } from "../../../utils";

export const isNameValid = (value) => {
  console.log("values===> ", value);
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

export const isValidForm = ({
  receiptDate,
  expirationDate,
  name,
  categories,
}) => {
  let reci = moment(receiptDate);
  let exp = moment(receiptDate);

  if (!isNameValid(name)) return { name: true };
  else if (!isCategoriesValid(categories))
    return {
      categories: true,
    };
  else if (moment(receiptDate).diff(moment(expirationDate)) >= 0) {
    return "zz";
  } else return {};
};
