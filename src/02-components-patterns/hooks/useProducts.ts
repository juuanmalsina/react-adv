import { useEffect, useRef, useState } from "react";
import {
  InitialValues,
  OnChangeArgs,
  ProductProps,
} from "../interfaces/interfaces";

interface UseProductProps {
  product: ProductProps;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMmounted = useRef(false);

  // console.log(initialValues?.count);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMmounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMmounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,

    increaseBy,
    reset,
  };
};
