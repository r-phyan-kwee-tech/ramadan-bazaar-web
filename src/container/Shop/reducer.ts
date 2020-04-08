import ShopActionType from './constants';
type ShopState = {
  shop: any;
  loading: boolean;
  error: string;
};
type ShopAction = {
  type: ShopActionType;
  payload: any;
};
export const initialState = {
  shop: {},
  loading: true,
  error: '',
};

const ShopReducer = (state: ShopState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionType.GET_SHOP_DETAIL:
      return {
        loading: true,
        shop: {},
        error: '',
      };

    case ShopActionType.GET_SHOP_DETAIL_SUCCESS:
      return {
        loading: false,
        shop: action.payload,
        error: '',
      };
    case ShopActionType.GET_SHOP_DETAIL_FAILED:
      return {
        loading: false,
        shop: {},
        error: 'Something went wrong',
      };

    default:
      return state;
  }
};

export default ShopReducer;
