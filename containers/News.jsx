import style from '../styles/news.module.css';
import UnderlineTitle from '../components/UnderlineTitle';
import Button from '../components/Button';
import NewsPost from '../components/NewsPost';

export default function News({dataProps}) {
  return (
    <div className={style.news}> 
      <div className={style.news__container}>
          <div className={style.news__wrapper}>
            <UnderlineTitle
              text="Новостной блог"
              color="#000"
              fontSize="36"
              underWidthProcent="38"
              underHeightPx="8"
              mediaSize="48"
              position="0"
            />
          </div>
          <ul className={style.news__columns}>
            {dataProps.map((post)=>{
              return <NewsPost 
                  title={post.title}
                  imgSrc={post.picture}
                  view={post.view}
                  date={post.date}
                  key={post.id}
              />
            })}
          </ul>
          <div className={style.news__wrap}>
            <Button 
              text="Все новости"
              fontSize="16"
              color="#fff"
              paddingVertical="15"
              paddingHorizont="35"
              borderColor="var(--color-main)"
              borderRadius="12"
              background="var(--color-main)"
            />
          </div>
      </div>
    </div>
  )
}
