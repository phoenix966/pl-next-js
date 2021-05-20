import RatingStar from '../components/RatingStar'

export default function Post({imgSrc,title,user,clock,rating}) {
  return (
    <li className='post'>
      <div className="post__picture">
        <img src={imgSrc} alt="img" className="post__img"/>
      </div>
      <h2 className="post__title">{title}</h2>
      <RatingStar rate={rating}/>
      <div className="post__wrap">
        <span className="icon-user post__icon">
          <span>{user}</span>
        </span>
        <span className="icon-clock post__icon">
          <span>{clock}</span>
        </span>
      </div>
      <style jsx>
        {`
          .post{
            width: 21.875rem;
            height: 34.6875rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 3.125rem;
            border-radius: 1.5625rem;
            overflow: hidden;
            background: #fff;
            box-shadow: 0px 0px 1.875rem rgba(0, 0, 0, 0.1);
          }
          .post__picture{
            height: 50%;
            width: 100%;
          }
          .post__img{
            border-top-left-radius: 1.5625rem;
            border-top-right-radius: 1.5625rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .post__title{
            padding: 0 2.1875rem;
            font-family: var(--font-bold);
            font-size: 1.5rem;
            line-height: 1.25rem;
            letter-spacing: 0.0938rem;
            color: var(--color-second);
          }
          .post__wrap{
            padding: 0 2.1875rem;
            margin-bottom: 9%;
          }
          .post__icon{
            margin-right: 3.3125rem;
            font-size: 1.625rem;
            color: var(--color-main);
          }
          .post__icon span{
            margin-left: 0.4375rem;
            font-family: var(--font-light);
            font-size: 1rem;
            color: #D6D8E5;
          }
          @media screen and (min-width: 728px){
            .post{
              width: 31.25rem;
              height: 40.9375rem;
            }
            .post__title{
              line-height: 2.5rem;
            }
            .post__picture{
              height: 61%;
            }
          }
        `}
      </style>
    </li>
  )
}
