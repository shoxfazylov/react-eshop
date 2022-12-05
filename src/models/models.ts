export interface ServerResponse<T> {
  method: string;
  success: boolean;
  totalCount: number;
  currentCount: number;
  data: T[];
}
export interface ServerResponseDetail<T> {
  success: boolean;
  data: T;
}

export interface ISlider {
  id: string;
  name: string;
  text: string;
  picture: string;
  sectionUrl?: any;
  elementUrl?: any;
}
export interface ICategories {
  id: string;
  name: string;
  code: string;
  parent_id?: any;
  picture: string;
  icon?: any;
  background?: any;
}
export interface IProducts {
  id: string;
  name: string;
  picture?: any;
  price: string;
  section_code: string;
  quantity: string;
  sale?: any;
  rating: number;
  properties?: any;
}
export interface IProduct {
  id: string;
  name: string;
  photos?: [];
  detail_text: string;
  category_id: string;
  rating: number;
  rating_count: number;
  reviews_id?: any;
  price: string;
  available: boolean;
  available_quantity: string;
  measure: string;
  measure_name: string;
  sale?: any;
  characteristics?: any;
  properties?: any;
}
export interface IBanner {
  id: string;
  name: string;
  text: string;
  picture: string;
  url: string;
}



