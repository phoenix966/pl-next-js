import UnderlineTitle from "../../components/UnderlineTitle";


export default function TeachersContainer() {
  return (
    <div className="teachers-container">
      <UnderlineTitle
            text="Наши преподаватели"
            color="var(--color-crumbs)"
            fontSize="24"
            underWidthProcent="60"
            underHeightPx="8"
            position="20"
            mediaSize="42"
          />
          <style jsx>
            {`
              .teachers-container{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                max-width: 1640px;
                margin-bottom: 4.5rem;
                padding: 0 0.3125rem;
              }
              @media screen and (min-width: 1140px){
                .teachers-container{
                  padding: 0 1.25rem;
                }
              }
              @media screen and (min-width: 1490px){
                .teachers-container{
                  padding: 0;
                }
              }
            `}
          </style>
    </div>
  )
}

