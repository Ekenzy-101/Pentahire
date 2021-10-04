export { userResolver } from "./user";

export const isObject = (value: any) =>
  value && typeof value === "object" && !Array.isArray(value);

export const parseValueIfJSONString = (value: any) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};
