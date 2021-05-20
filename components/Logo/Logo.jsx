import Svg from '../../assets/images/Logo.svg'

export default function Logo({flex}) {
  return (
    <div className='logo'>
      <div className="logo__wrapper">
        <Svg 
        width="53"
        height="53"
        />
      </div>
      <div className="logo__column">
        <h1 className="logo__title">Профессиональный лицей</h1>
        <p className="logo__text">Коммуникационный и информационных технологий №98</p>
      </div>
      <style jsx>
        {`
          .logo{
            display: flex;
            flex: 1 1 ${flex};
          }
          .logo__wrapper{
            margin-right: 1.0625rem;
          }
          .logo__column{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .logo__title{
            display: none;
            font-family: var(--font-medium);
            font-size: 1.375rem;
            line-height: 2.3169rem;
            color: var(--color-logo);
            margin-bottom: 0.0156rem;
          }
          .logo__text{
            display: none;
            font-family: var(--font-light);
            font-size: 0.75rem;
            color: var(--color-logo);
          }
          @media screen and (min-width: 728px){
            .logo__title{
                display: unset;
            }
            .logo__text{
                display: unset;
            }
          }
          
        `}
      </style>
    </div>
    
  )
}
