import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";

import * as actions from "../redux/actions";

export default function IndexPost() {
  const images = useSelector((state) => state.images.data);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    let arrCustomWithColumn = [[], [], [], []];
    images.forEach((item, index) => {
      if (index % 4 == 0) {
        arrCustomWithColumn[0].push(item);
      }
      if (index % 4 == 1) {
        arrCustomWithColumn[1].push(item);
      }
      if (index % 4 == 2) {
        arrCustomWithColumn[2].push(item);
      }
      if (index % 4 == 3) {
        arrCustomWithColumn[3].push(item);
      }
    });
    setColumns(arrCustomWithColumn);
  }, [images]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getImages.getImagesRequest());
  }, [dispatch]);

  return (
    <div>
      <div className="w-3/4 mx-auto pl-1  mt-1">
        <div className="photos">
          {columns?.map((item, index) => (
            <div key={index} className="photos__column">
              {columns[index]?.map((citem) => (
                <img  key={citem._id}  src={citem.img_url} class="photo-item__img rounded" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
