import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import ImagesRepository from "../../repository/imagesRepository";

function* fetchAllImages(action) {
  try {
    const images = yield call(ImagesRepository.getAllImages);
    yield put(actions.getImages.getImagesSuccess(images.data));
  } catch (error) {
    put(actions.getImages.getImagesFailure(error));
  }
}
function* createImage(action) {
    try {
      const image = yield call(ImagesRepository.createImage , action.payload);
      console.log(image)
      yield put(actions.createImage.createImageSuccess(image.data));
    } catch (error) {
      put(actions.createImage.createImageFailure(error));
    }
  }

function* mySaga() {
  yield takeLatest(actions.getImages.getImagesRequest, fetchAllImages);
  yield takeLatest(actions.createImage.createImageRequest, createImage);
    
}

export default mySaga;
