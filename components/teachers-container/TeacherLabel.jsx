
export default function TeacherLabel({text}) {
  return (
    <>
      <p className="teacherLabel">
        {text}
      </p>
      <style jsx>
        {`
          .teacherLabel{
            font-size: 12px;
            line-height: 18px;
            color: #F0F0F0;
            font-family: var(--font-crumbs);
            padding: 5px 10px;
            background: var(--color-crumbs);
            border-radius: 4px;
          }
        `}
      </style>
    </>
  )
}
