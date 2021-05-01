import Svg from '../../assets/images/Logo.svg'

export default function Logo() {
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
          }
          .logo__wrapper{
            margin-right: 10px;
          }
          .logo__column{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
          }
          .logo__title{
            font-family: var(--font-medium);
            font-size: 1.375rem;
            color: var(--color-logo);
            margin-bottom: 0.3125rem;
          }
          .logo__text{
            font-family: var(--font-light);
            font-size: 0.75rem;
            color: var(--color-logo);
          }
          
        `}
      </style>
    </div>
    
  )
}
