//import { timestampToDays } from "../../../utils";

const isNameValid = (value) => {
  console.log("values===> ", value);
  return value.trim().length > 0 && value.trim().length <= 200;
};

const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

export const isValidForm = ({ name, categories }) => {
  console.log('data["name"])', isNameValid(name));
  if (!isNameValid(data["name"])) console.log("name error");
  else if (!isNameValid(data["categories"])) console.log("cact error");

  return {};
};
