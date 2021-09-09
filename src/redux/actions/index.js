import { createActions, createAction } from 'redux-actions';
export const getTypeAction = (reduxAction) => {
    return reduxAction().type;
  };
  
  
export const getImages = createActions({
    getImagesRequest: undefined,
    getImagesSuccess:(payload)=>payload,
    getImagesFailure:(error)=>error
})

export const createImage = createActions({
  createImageRequest: (payload)=>payload,
  createImageSuccess:(payload)=>payload,
  createImageFailure:(error)=>error
})