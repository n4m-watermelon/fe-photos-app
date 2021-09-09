import { INIT_STATE } from "../../constant";
import { getTypeAction, getImages , createImage } from "../actions";

export default function imagesReducers(state = INIT_STATE.images, action) {
  switch (action.type) {
    case getTypeAction(getImages.getImagesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getTypeAction(getImages.getImagesSuccess):
      return {
        ...state,
        isLoading: false,
        data:action.payload,
      };
    case getTypeAction(getImages.getImagesFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getTypeAction(createImage.createImageSuccess):
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload]
      };
 

    default:
      return state;
  }
}
