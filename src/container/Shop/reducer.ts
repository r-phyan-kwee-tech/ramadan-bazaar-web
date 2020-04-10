import ShopActionType from './constants';

export interface MenuItem {
  shop_id: string;
  name_uni: string;
  address: string;
  phone_number_1: string;
  phone_number_2: string;
  phone_number_3: string;
  menu_item_name: string;
  description_uni: string;
  unit_price: string;
  menu_category_name: string;
}

type ShopState = {
  menu_items: MenuItem[];
  loading: boolean;
  error: string;
};
type ShopAction = {
  type: ShopActionType;
  payload: any;
};
export const initialState = {
  menu_items: [],
  loading: true,
  error: '',
};

const ShopReducer = (state: ShopState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionType.GET_SHOP_DETAIL:
      return {
        loading: true,
        menu_items: [],
        error: '',
      };

    case ShopActionType.GET_SHOP_DETAIL_SUCCESS:
      return {
        loading: false,
        menu_items: action.payload || [],
        error: '',
      };
    case ShopActionType.GET_SHOP_DETAIL_FAILED:
      return {
        loading: false,
        menu_items: [],
        error: 'Something went wrong',
      };

    default:
      return state;
  }
};

export default ShopReducer;
