import UnderlineTitle from '../components/UnderlineTitle';
import Button from '../components/Button';
import style from '../styles/post-section.module.css';
import Post from '../components/Post';
import fetch from 'isomorphic-unfetch';

export default function PostSection(props) {
  console.log(props.prof);
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
        {/* <ul className={style.post__columns}>
          {data.map((item)=>{
            return <Post 
                      // imgSrc={item.imgSrc}
                      title={item.prof.title}
                      // user={item.people}
                      // clock={item.hours}
                      // // rating={item.rating}
                      // key={item.id}
                    />
            })}
        </ul> */}
      </div>
      
    </section>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:1337/professions');
  const data = await res.json();
  return{
    props: {
      prof:{data}
    },
  }
}