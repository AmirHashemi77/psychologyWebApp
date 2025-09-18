export function toPersianNumber(input: number | string) {
  return input.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
