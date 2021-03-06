import SpoilerVacancyItem from "./SpoilerVacancyItem";

export default function SpoilerVacancyList({name,markedList}) {
  return (
    <ul className="inner__list">
      <li className="inner__name">{name}</li>
      {markedList.map((item)=>{
          return <SpoilerVacancyItem text={item} key={item}/>
        })}
      <style jsx>
        {`
        .inner__list{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 1 40%;
        }
        .inner__name{
            font-family: var(--font-vacancy-bold);
            font-size: 1rem;
            color: #1A1A1A;
            line-height: 1.5rem;
            list-style-type: none;
            margin: 1rem 0;
            margin-left: -1.25rem;
        `}
      </style>
    </ul>
  )
}
