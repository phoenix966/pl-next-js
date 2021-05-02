
export default function Button({text,fontSize,color,background,paddingVertical,paddingHorizont,borderColor,borderRadius}) {
  return (
    <>
      <a href="#bt" className="button">{text}</a>
      <style jsx>
        {`
          .button{
            text-decoration: none;
            font-family: var(--font-regular);
            cursor: pointer;
            box-sizing: border-box;
            font-size: ${fontSize}px;
            color: ${color};
            background: ${background};
            padding: ${paddingVertical}px ${paddingHorizont}px;
            border: 1px solid ${borderColor};
            border-radius: ${borderRadius}px;
          }
        `}
      </style>
    </>
  )
}
