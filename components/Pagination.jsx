import Link from 'next/link';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ page, pageSize, totalItems }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  return (
    <section className='container mx-auto flex justify-center items-center my-8'>
      {page > 1 ? (
        <Link
          className='mr-2 px-2 py-1 border border-gray-300 rounded bg-[#573548] text-white'
          href={`/properties?page=${page - 1}`}
        >
         <MdArrowBackIos className='w-6 h-6' />
        </Link>
      ) : null}

      <span className='mx-2'>
        {' '}
        Page {page} of {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          className='ml-2 px-2 py-1 border border-gray-300 rounded bg-[#573548] text-white'
          href={`/properties?page=${page + 1}`}
        >
          <MdArrowForwardIos className='w-6 h-6' />
        </Link>
      ) : null}
    </section>
  );
};
export default Pagination;
