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
      // let column1 = []
      // let column2 = []
      // let column3 = []
      // action.payload.forEach((item,index)=>{
      //     if(index % 3 == 0) {
      //       column1[0].push(item)
      //     }
      //     if(index % 3 == 1) {
      //       column2[1].push(item)
      //     }
      //     if(index % 3 == 2) {
      //       column3[2].push(item)
      //     }
        
      //   })

      //   let array = [column1 ,column2 ,column3] 
   
        
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
