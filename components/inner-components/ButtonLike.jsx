import {FaThumbsUp} from 'react-icons/fa';

export default function ButtonLike() {
  return (
    <button className='like__btn'>
        <div className="like__wrap">
          <span className="like__icon"><FaThumbsUp/></span>
          <p className="like__text">100</p>
        </div>
        <style jsx>
          {`
            .like__btn{
              width: 6.25rem;
              height: 6.25rem;
              border-radius: 0.3125rem;
              background: var(--color-main);
              border: none;
              float: right;
            }
            .like__btn:hover{
                background: rgb(71, 201, 110);
                cursor: pointer;
            }
            .like__wrap{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .like__icon{
              color: #fff;
              font-size: 20px;
            }
            .like__text{
              color: rgba(255, 255, 255, 0.8);
              font-family: var(--font-regular);
              font-size: 12px;
            }
          `}
        </style>
    </button>
  )
}
