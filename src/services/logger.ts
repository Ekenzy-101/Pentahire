export function logger(prefix: string) {
  return process.env.NODE_ENV === "production"
    ? Function.prototype
    : console.log.bind(console, `${prefix}:`);
}
