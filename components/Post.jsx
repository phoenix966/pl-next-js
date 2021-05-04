import RatingStar from '../components/RatingStar'

export default function Post() {
  return (
    <li className='post'>
      <div className="post__picture">
        <img src="/post-back.jpeg" alt="img" className="post__img"/>
      </div>
      <h2 className="post__title">Веб программирование</h2>
      <RatingStar/>
      <div className="post__wrap">
        <span className="icon-user post__icon">
          <span>2454</span>
        </span>
        <span className="icon-clock post__icon">
          <span>12ч. 28м</span>
        </span>
      </div>
      <style jsx>
        {`
          .post{
            width: 350px;
            height: 505px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            margin: 15px;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.1);
          }
          .post__picture{
            height: 55%;
            width: 100%;
          }
          .post__img{
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .post__title{
            padding: 0 15px;
            font-family: var(--font-bold);
            font-size: 20px;
            color: var(--color-second);
          }
          .post__wrap{
            padding: 0 15px;
            margin-bottom: 13%;
          }
          .post__icon{
            margin-right: 40px;
            font-size: 18px;
            color: var(--color-main);
          }
          .post__icon span{
            margin-left: 7px;
            font-family: var(--font-light);
            font-size: 16px;
            color: #D6D8E5;
          }
        `}
      </style>
    </li>
  )
}
