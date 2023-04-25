export interface ProducProps {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  children: React.ReactNode;
  product: ProducProps;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: ProducProps;
}
