let sales: number = 123_42_213;
let course: string = "Typescript";
let isPublished: boolean = false;
let level;
let user: [number, string] = [0, "Sahad"];
user.push("hello");
enum size {
  small = "sm",
  medium = "",
  large = "",
}
function calculateTax(income: number): number {
  if (income < 400_999) return income * 1.3;
  return income * 0.5;
}
