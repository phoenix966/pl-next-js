
export default function UnderlineTitle({text,color,fontSize,underWidthProcent,underHeightPx}) {

  return (
    <>
      <h2 className="underline__title">{text}</h2>
      <style jsx>
        {`
          .underline__title{
            position: relative;
            font-family: var(--font-medium);
            color: ${color};
            font-size: ${fontSize}px;
          }
          .underline__title::after{
            content: '';
            position: absolute;
            top: ${parseInt(fontSize) + 15}px;
            left: 0;
            background: var(--color-main);
            width: ${underWidthProcent}%;
            height: ${underHeightPx}px;
          }
        `}
      </style>
    </>
  )
}
