
export default function TeacherLabel({text}) {
  return (
    <>
      <p className="teacherLabel">
        {text}
      </p>
      <style jsx>
        {`
          .teacherLabel{
            font-size: 0.75rem;
            line-height: 1.125rem;
            color: #F0F0F0;
            font-family: var(--font-crumbs);
            padding: 0.3125rem 0.625rem;
            background: var(--color-crumbs);
            border-radius: 0.25rem;
          }
        `}
      </style>
    </>
  )
}
