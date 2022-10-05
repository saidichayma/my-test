import { timestampToDays } from "../../../utils";

export const isNameValid = (value) => {
  console.log("values===> ", value);
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

export const isValidForm = (data) => {
  console.log('data["name"])', data["name"]);
  if (!isNameValid(data["name"])) return { name: true };
  else if (!isCategoriesValid(data["categories"]))
    return {
      categories: true,
    };
  else return {};
};
