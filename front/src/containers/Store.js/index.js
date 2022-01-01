import { useSelector, useDispatch } from 'react-redux';
import { Image, Button, Space } from 'antd';

const Store = () => {
  const storeData = useSelector(state => state.store);

  return (
    <>
      <div>
        <h1>Store</h1>
        <div>
        <Space size={12}>
          <Image
            width={200}
            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
            placeholder={
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                width={200}
              />
            }
          />
          <div>
            <h3>Title:</h3>
            <h3>Price:</h3>
            <h3>Amount:</h3>
          </div>
          {/* <Button
            type="primary"
            onClick={() => {
              setRandom(Date.now());
            }}
          >
            Reload
          </Button> */}
    </Space>
        </div>
      </div>
    </>
  )
};
export default Store;