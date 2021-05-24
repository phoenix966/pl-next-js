import UnderlineTitle from '../components/UnderlineTitle'
import Button from '../components/Button'
import style from '../styles/post-section.module.css'
import Post from '../components/Post'
import {useState} from 'react';

export default function PostSection() {
  const [post,setPost] = useState([
    {imgSrc:'post/post.jpg',title:'Веб программирование',user:'2454',clock:'12ч. 28м',rating:'3',key:1},
    {imgSrc:'post/post2.jpg',title:'Специалист интернет технологий',user:'2454',clock:'12ч. 28м',rating:'3',key:2},
    {imgSrc:'post/post3.jpg',title:'Веб программирование',user:'2454',clock:'12ч. 28м',rating:'3',key:3},
    {imgSrc:'post/post4.jpg',title:'Веб программирование',user:'2454',clock:'12ч. 28м',rating:'3',key:4},
    {imgSrc:'post/post5.jpg',title:'Веб программирование',user:'2454',clock:'12ч. 28м',rating:'3',key:5},
    {imgSrc:'post/post6.jpg',title:'Веб программирование',user:'2454',clock:'12ч. 28м',rating:'3',key:6},
  ])
  return (
    <section className={style.postSection}>
      <div className={style.postSection__container}>
        <div className={style.PostSection__wrapper}>
          <UnderlineTitle
            text="Профессии"
            color="#000"
            fontSize="36"
            underWidthProcent="80"
            underHeightPx="5"
            mediaSize="42"
            position="0"
          />
          <div className={style.postSection__btn}>
            <Button 
              text="Все курсы"
              fontSize="16"
              color="var(--color-main)"
              paddingVertical="15"
              paddingHorizont="38"
              borderColor="var(--color-main)"
              borderRadius="12"
            />
          </div>
        </div>
        <ul className={style.post__columns}>
          {post.map((item)=>{
            return <Post 
                      imgSrc={item.imgSrc}
                      title={item.title}
                      user={item.user}
                      clock={item.clock}
                      rating={item.rating}
                      key={item.key}
                    />
            })}
        </ul>
      </div>
      
    </section>
  )
}
