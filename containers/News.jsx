import style from '../styles/news.module.css'
import UnderlineTitle from '../components/UnderlineTitle'
import Button from '../components/Button'
import NewsPost from '../components/NewsPost'
import {useState} from 'react'

export default function News() {
  const [news,setNews] = useState([
    {title:'Состоялось открытие нового It направления',imgSrc:'post/post.jpg',view:'2454',date:'14/05/2021'},
    {title:'Состоялось открытие нового It направления-1',imgSrc:'post/post.jpg',view:'2454',date:'16/04/2021'},
    {title:'Состоялось открытие нового It направления-2',imgSrc:'post/post.jpg',view:'2454',date:'19/04/2021'}
  ])
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
            {news.map((post)=>{
              return <NewsPost 
                  title={post.title}
                  imgSrc={post.imgSrc}
                  view={post.view}
                  date={post.date}
                  key={post.date}
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
