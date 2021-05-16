import { FaRegFolder } from 'react-icons/fa';
import Link from 'next/link';

export default function Crumb({ text }) {
  return (
    <div className="crumb">
      <FaRegFolder />
      <Link href="#folder">
        <a><p className="crumb__text">{text}</p></a>
      </Link>
      <style jsx>
        {`
          .crumb{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            margin-right: 16px;
          }
          .crumb a{
            text-decoration: none;
          }
          .crumb__text{
            margin-left: 12px;
            font-family: var(--font-crumbs);
            color: var(--color-crumbs);
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  )
}
