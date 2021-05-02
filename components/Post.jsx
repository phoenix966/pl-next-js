import Image from 'next/image'

export default function Post() {
  return (
    <div className="post">
      <div className="post__wrap">
        <div className="post__picture">
          <Image
          src="../assets/images/post-back.jpg"
          layout="fill"
          />
        </div>
        
      </div>
    </div>
  )
}
