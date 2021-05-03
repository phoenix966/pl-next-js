import RatingStar from './RatingStar'

export default function Post() {
  return (
    <div className="post">
      <div className="post__wrap">
        <div className="post__picture">
          <img src="/post-back.jpeg" alt="image" className="post__img"/>
        </div>
       <div className="post__wrapper">
          <h2 className="post__title">
            Веб программирование
          </h2>
          <RatingStar/>
          <div className="post__row">
            <span className="icon-user post__icon">2454</span>
            <span className="icon-clock post__icon">12ч. 28м</span>
          </div>
       </div>
      </div>
      <style jsx>
        {`
          .post{
            width: 500px;
            height: 655px;
            background: #666;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-radius: 25px;
            overflow: hidden;
          }
          .post__picture{
            width: 100%;
            height: 300px;
          }
          .post__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .post__row{
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}
