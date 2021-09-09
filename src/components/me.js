import React, { useState ,useCallback} from "react";
import axios from 'axios'
import { Drawer, Button, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import repositoryFactory from "../repository/repositoryFactory";
import { useDispatch } from "react-redux";

import * as actions from "../redux/actions";



var FormData = require("form-data");

export default function Me() {
 
  const dispatch = useDispatch();
  const [myData, setMyData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const props = {
    onChange(info) {
      if (info.file) {
        setMyData({ ...myData, image: info.file.originFileObj });
      }
    },
  };
  const [visible, setVisible] = useState(false);
  const { TextArea } = Input;
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleOkClick =  useCallback(()=>{
      var form = new FormData();
      form.append("title", myData.title);
      form.append("description", myData.description);
      form.append("image", myData.image);
      dispatch(actions.createImage.createImageRequest(form))
    
  },[dispatch,myData]) 

  return (
    <div className="me-container mx-auto mt-4 h-full flex itesm-start">
      <div>
        <Button type="primary" onClick={showDrawer}>
          {" "}
          Open
        </Button>
      </div>

      <Drawer
        width="40%"
        title="Thêm mới ảnh"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div>
          <div className="mb-2">
            <span className="text-black">Tiêu đề</span>
            <Input
              value={myData.title}
              onChange={(e) => setMyData({ ...myData, title: e.target.value })}
              placeholder="Tiêu đề"
            />
          </div>
          <div className="mb-2">
            <span className="text-black">Mô tả</span>
            <TextArea
              value={myData.description}
              onChange={(e) =>
                setMyData({ ...myData, description: e.target.value })
              }
              rows={4}
            />
          </div>
          <div className="flex flex-col items-start mb-8">
            <span className="text-black">Upload file</span>
            <Upload {...props}>
              <Button>Click to Upload</Button>
            </Upload>
          </div>

          <Button onClick={() => handleOkClick()} type="primary">
            Xác nhận
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
