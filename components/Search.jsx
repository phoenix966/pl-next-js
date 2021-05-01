import React from 'react'

export default function Search() {
  return (
    <div className="search">
      <form>
       <div className="search__wrap">
          <div className="search__wrapper">
            <input type="text" className="search__input" placeholder="Поиск по сайту"/>
          </div>
          <div className="search__btn">
            <span className="icon-search"></span>
          </div>
       </div>
      </form>
      <style jsx>
      {`
        .search__wrap{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search__wrapper{
          width: 14.5rem;
          height: 2.5rem
        }
        .search__input{
          padding-left: 10px;
          width: 100%;
          height: 2.37rem;
          font-family: var(--font-light);
          font-size: 1rem;
          color: #8E90A6;
          border: none;
          border-radius: 0.5rem 0 0 0.5rem;
          background: var(--color-backgr);
        }
        .search__btn{
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          margin-left: 0.75rem;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0 0.5rem 0.5rem 0;
          background: var(--color-backgr);
          border: none;
        }
      `}
      </style>
    </div>
  )
}
