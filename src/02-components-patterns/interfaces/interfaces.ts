export interface ProductCardProps {
  children: React.ReactNode;
  product: ProductProps;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}
export interface ProductProps {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: ProductProps;
}

export interface OnChangeArgs {
  product: ProductProps;
  count: number;
}

export interface ProductInCardProps extends ProductProps {
  count: number;
}
