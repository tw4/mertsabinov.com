import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="text-end space-x-5 p-5">
      <Link className="hover:text-textHighlight" href="/">
        TR
      </Link>
      <Link className="hover:text-textHighlight" href="/en">
        EN
      </Link>
    </div>
  );
};
