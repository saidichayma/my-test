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
  if (!isNameValid(name)) return { name: true };
  else if (!isCategoriesValid(categories))
    return {
      categories: true,
    };
  else {
    let dataErrors = {};
    if (!receiptDate.length > 0) {
      Object.assign(dataErrors, { receiptDate: true });
    }
    if (!expirationDate.length > 0) {
      Object.assign(dataErrors, {
        expirationDate: "This item is required ...",
      });
    }

    return dataErrors;
  }
};
