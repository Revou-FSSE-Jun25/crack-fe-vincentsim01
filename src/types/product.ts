export interface Category {
  id: number;
  name: string;
}


export interface Product{
    id:number;
    title:string;
    // slug:string;
    price:number;
    description:string;
    // categoryId:number ;
    image:string;
    // totalItems?:number;
    stock:number;
}

export interface ProductMock{
    id:number;
    title:string;
    slug:string;
    price:number;
    description:string;
    category:Category;
    image:string;
    totalItems?:number;
}


export interface updateProduct{
    title?:string;
    price?:number;
    description?:string;
    image?:string;
    stock?:number ;

}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}


export interface ProductFormData {
    title:string;
    price:number;
    description:string;
    image:string;
    stock:number;
    // images:string[];
}