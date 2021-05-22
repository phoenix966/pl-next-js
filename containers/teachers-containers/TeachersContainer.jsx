import UnderlineTitle from "../../components/UnderlineTitle";


export default function TeachersContainer() {
  return (
    <div className="teachers-container">
      <UnderlineTitle
            text="Наши преподаватели"
            color="var(--color-crumbs)"
            fontSize="42"
            underWidthProcent="60"
            underHeightPx="8"
            position="20"
          />
          <style jsx>
            {`
              .teachers-container{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                max-width: 1600px;
                margin-bottom: 72px;
              }
            `}
          </style>
    </div>
  )
}

