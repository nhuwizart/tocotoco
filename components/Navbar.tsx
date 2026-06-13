import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const menu = [
    "Giới thiệu",
    "Sản phẩm",
    "Tin tức",
    "Cửa hàng",
    "Tuyển dụng",
    "Thành viên",
    "Nhượng quyền",
  ];

  return (
    <header
      className="
      sticky
      top-0
      left-0
      w-full
      z-50
      "
    >
      <div
        className="
        bg-[#282828]
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-5
        "
      >
        {/* Logo */}
        <Link
              href="/"
              
            >
              <Image
                    src="/Logo-toco.png"
                    width={200}
                    height={53}
                    alt=""
                  />
            </Link>        

   

        {/* Desktop Menu */}

        <nav className="hidden lg:flex gap-8 text-white font-bold uppercase">
          {menu.map((item) => (
            <Link
              key={item}
              href="/khuyenmai"
              className="
              
              hover:text-yellow-300
              transition
              "
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Search */}

        <button
          className="
          w-10
          h-10
          rounded-full
          bg-[rgb(211,182,115)]
          text-white
          flex
          items-center
          justify-center
          "
        >
         <Image
                    src="/search.png"
                    width={17}
                    height={17}
                    alt=""
                  />
          {/* 🔍 */}
        </button>
      </div>
    </header>
  );
}