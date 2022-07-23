function kgToLbs(weight: string | number): number {
  if (typeof weight === "string") return parseInt(weight) * 2.2;
  return weight * 2.2;
}
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
const UIWidget: Draggable & Resizable = {
  drag: () => console.log("Drag"),
  resize: () => console.log("Resize"),
};

type Value = 50 | 100;
let value: Value = 100;
type Metric = "cm" | "inch";

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}

type Customer = {
  birthday: Date;
};
function getCustomerBirthday(id: number): null | Customer {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomerBirthday(0);
if (customer !== null) console.log(customer?.birthday);
