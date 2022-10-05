import moment from "moment";
import { timestampToDays } from "../../../utils";

export const isNameValid = (value) => {
  console.log("values===> ", value);
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

// the validators of the all the form
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
    if (receiptDate.length > 0 && expirationDate.length > 0) {
      let days = moment(receiptDate).diff(moment(expirationDate), "days"); // Have “expiration date” to a minimum of 30 days in the future.
      if (+days < 30) {
        Object.assign(dataErrors, {
          expirationDate: `      If a product has an expiration date it must expire not less than 30
        days since now`,
        });
      }
    }
    return dataErrors;
  }
};
