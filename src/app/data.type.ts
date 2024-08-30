export interface signUp {
  name: string;
  email: string;
  passWord: string;
}
export interface login {
  email: string;
  passWord: string;
}
export interface product {
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
  id: number;
  quantity: undefined | number;
  productId: undefined | number;
}
