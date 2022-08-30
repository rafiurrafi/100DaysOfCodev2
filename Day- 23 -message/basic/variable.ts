type BioInfo = {
  firstName: string;
  lastName: string;
  parent: { father: string; mother: string };
};
function formateBioInfo(person: {}): {
  firstname: string;
  lastName: string;
  parent: { father: string; mother: string };
} {
  return {
    firstname: "string",
    lastName: "string",
    parent: { father: "string", mother: "string" },
  };
}
