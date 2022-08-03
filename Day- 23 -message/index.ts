interface Result<T> {
  data: T | null;
  error: string | null;
}
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}
interface User {
  data: string;
}
interface Product {
  title: string;
}
fetch<User>("url");
