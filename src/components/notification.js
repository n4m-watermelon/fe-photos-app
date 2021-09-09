import {  notification } from 'antd';

 const openNotificationError = (title='Lỗi',message) => {
    notification.open({
      message: <span className="text-red-600">{title}!</span>,
      description:`${message}.`,
      className: 'custom-class',
      style: {
        background: '#FFF1F0',
        border: '1px solid #FFBAB6',
        borderRadius: '8px'
      },
    });
  };

 const openNotificationSuccess = (title='Thành công',message) => {
    notification.open({
      message: <span className="text-green-600">{title}!</span>,
      description:`${message}.`,
      style: {
      
        background: '#F6FFED',
        border: '1px solid #D6F5BE',
        borderRadius: '8px'
      },
    });
  };

  const openNotificationWarning = (title='Cảnh báo',message) => {
    notification.open({
      message: <span className="text-yellow-600">{title}!</span>,
      description:`${message}.`,
      style: {
        background: '#FFFBE6',
        border: '1px solid #FFEFBA',
        borderRadius: '8px'
      },
    });
  };


  const openNotificationPrimary = (title='Thông tin', message) => {
    notification.open({
      message: <span className="text-blue-600">{title}!</span>,
      description:`${message}.`,
      style: {
        background: '#E6F7FF',
        border: '1px solid #BAE5FF',
        borderRadius: '8px'
      },
    });
  };

  export {openNotificationError , openNotificationSuccess, openNotificationWarning , openNotificationPrimary}