import { timestampToDays } from "../../../utils";

export const isNameValid = (value) => {
  console.log("values===> ", value.trim());
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

export const isValidForm = (data) => {
  if (!isNameValid(data["name"])) return { name: true };
  else if (!isNameValid(data["categories"]))
    return {
      categories: true,
    };
  else return {};
};
