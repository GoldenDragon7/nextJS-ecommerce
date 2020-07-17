import Link from 'next/link';

export default function EmptySection() {
  return (
    <>
      <Link href="/">
        <p className="empty-cart">You do not have any product in your cart</p>
      </Link>
      <style jsx>{`
        .empty-cart {
          box-sizing: border-box;
          margin-top: 80px;
          margin-bottom: 80px;
          text-align: center;
          font-weight: 500;
          font-size: 32px;
          color: #666666;
          text-decoration: none;
          line-height: 42px;
        }
        .empty-cart:hover {
          text-decoration: underline;
        }
        @media (max-width: 1000px) {
          .empty-cart {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
