import UnderlineTitle from '../components/UnderlineTitle';
import Button from '../components/Button';
import style from '../styles/post-section.module.css';
import Post from '../components/Post';

export default function PostSection({dataProf}) {

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
          {dataProf.map((item)=>{
            return <Post 
                      imgSrc={item.picture}
                      title={item.title}
                      user={item.people}
                      clock={item.hours}
                      // // rating={item.rating}
                      key={item.id}
                    />
            })}
        </ul>
      </div>
      
    </section>
  )
}