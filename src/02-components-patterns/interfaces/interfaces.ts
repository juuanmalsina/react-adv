export interface ProductCardProps {
  //children: React.ReactNode;
  children: (args: ProductCardHandlers) => JSX.Element;
  product: ProductProps;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues: InitialValues;
}
export interface ProductProps {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  product: ProductProps;
  maxCount?: number;

  increaseBy: (value: number) => void;
}

export interface OnChangeArgs {
  product: ProductProps;
  count: number;
}

export interface ProductInCardProps extends ProductProps {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: ProductProps;

  increaseBy: (value: number) => void;
  reset: () => void;
}
