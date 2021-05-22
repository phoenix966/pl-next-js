
export default function SpoilerVacancyItem({text}) {
  return (
      <li className="inner__item">
        {text}
        <style jsx>
          {`
            .inner__item{
              font-family: var(--font-vacancy-medium);
              font-size: 1rem;
              line-height: 24px;
              color: #1A1A1A;
              margin-bottom: 8px;
            }
          `}
        </style>
      </li>
  )
}
