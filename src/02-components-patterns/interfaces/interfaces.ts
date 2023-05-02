export interface ProductCardProps {
  //children: React.ReactNode;
  children: (msj: string) => JSX.Element;
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
