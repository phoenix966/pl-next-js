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
        .search{
          padding: 0 1.25rem;
        }
        .search__wrap{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search__wrapper{
          display: none;
        }
        .search__input{
          padding-left: 0.8125rem;
          width: 99.8%;
          height: 2.5rem;
          font-family: var(--font-light);
          font-size: 1rem;
          color: var(--color-search);
          border: none;
          box-sizing: border-box;
          border-radius: 0.5rem 0 0 0.5rem;
          background: var(--color-backgr);
        }
        .search__btn{
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          width: 2.5rem;
          height: 2.5rem;
          box-sizing: border-box;
          border-radius: 0.5rem;
          background: var(--color-backgr);
          border: none;
        }
        @media screen and (min-width: 798px){
          .search__wrapper{
            display: unset;
            width: 11.8125rem;
            height: 2.5rem
          }
          .search__btn{
            border-radius: 0 0.5rem 0.5rem 0;
          }
        }
      `}
      </style>
    </div>
  )
}
