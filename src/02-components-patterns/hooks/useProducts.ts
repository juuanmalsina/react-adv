import { useEffect, useState, useRef } from "react";
import { OnChangeArgs, ProductProps } from "../interfaces/interfaces";

interface UseProductProps {
  product: ProductProps;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductProps) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    value,
  };
};
