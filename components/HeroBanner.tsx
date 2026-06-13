import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section
      className="
      relative
      h-auto
      overflow-hidden
      "
    >
      {/* Background */}

      <Image
                     src="/banner-web.png"
                     width={960}
                     height={540}
                     alt=""
                     className="w-full h-auto mx-auto"
             />

      {/* Overlay */}

      
      {/* Content */}

      <div
        className="
          absolute
          inset-0
          z-10
          h-auto

          flex
          flex-col
          lg:flex-row

          items-center
          justify-center

         

          max-w-7xl
          mx-auto
          px-6
          "
      >

        <Link
              href="/khuyenmai"
              className="
              
              transition
              uppercase
              border-none
              hover:bg-[rgba(211,182,115,0.5)]
              hover:border-none
              hover:text-white
              bg-[rgb(211,182,115)]
              text-xl
              text-white
              font-bold
              px-10
              py-2
              "
            >
                    Chi tiết 
            </Link>
        {/* Text */}

        {/* <div>
          <h1
            className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            "
          >
            Mê
            <br />
            Mơ
            <br />
            Mận
          </h1>
        </div> */}

        {/* Drinks */}

        {/* <div
          className="
          flex
          items-end
          gap-4
          "
        >
          <Image
            src="/images/drink-1.png"
            width={280}
            height={500}
            alt=""
          />

          <Image
            src="/images/drink-2.png"
            width={240}
            height={450}
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
}