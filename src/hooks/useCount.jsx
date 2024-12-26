import { useState } from "react";

export default function useCount( initialValue, min, max ) {
  const [number, setNumber] = useState(initialValue);
  const plus = () => setNumber(number + 1 <= max ? number + 1 : number);
  const minus = () => setNumber(number - 1 >= min ? number - 1 : number);
  return [number, { plus, minus }];
}
