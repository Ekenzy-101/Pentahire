export function isObject(value: any) {
  return value && typeof value === "object" && !Array.isArray(value);
}

export function parseValueIfJSONString(value: any) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}
