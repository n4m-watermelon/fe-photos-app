import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";

import * as actions from "../redux/actions";

export default function IndexPost() {
  const images = useSelector((state) => state.images.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getImages.getImagesRequest());
  }, [dispatch]);

  return (
    <div>
      <div className="w-1/2 mx-auto mt-4 mb-4">
        {images && images.map((image) => <Post key={image._id} imgLink={image.img_url} />)}
      </div>
    </div>
  );
}
