import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="static">
      {/* Background */}
<div className="relative inset-0">
      <div className="absolute inset-0">
        <Image
          src="/ft_bg_img.png"
          alt="footer bg"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(51,51,51,0.86)]" />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >
          {/* Logo */}

          <div>
            <Image
              src="/ft_logo.png"
              alt="logo"
              width={220}
              height={220}
            />
          </div>

          {/* Company */}

          <div>
            <h3 className="text-[#d4a64d] font-bold text-lg mb-6 uppercase">
              Công ty CP TM & DV Taco Việt Nam
            </h3>

            <ul className="space-y-4 text-white text-sm leading-relaxed">
              <li>
                Trụ sở chính: Tầng 5 tòa Tower 1,
                KĐT Times City, Hà Nội
              </li>

              <li>
                Chi nhánh miền nam:
                Bình Thạnh, TP.HCM
              </li>

              <li>
                info@tocotocotea.com
              </li>

              <li>
                Số ĐKKD: 0106341306
              </li>
            </ul>
          </div>

          {/* About */}

          <div>
            <h3 className="text-[#d4a64d] font-bold text-lg mb-6 uppercase">
              Về chúng tôi
            </h3>

            <ul className="space-y-3 text-white text-sm">
              <li>
                <Link href="#">
                  Giới thiệu Tocotoco
                </Link>
              </li>

              <li>
                <Link href="#">
                  Nhượng quyền
                </Link>
              </li>

              <li>
                <Link href="#">
                  Tin tức khuyến mại
                </Link>
              </li>

              <li>
                <Link href="#">
                  Quy định chung
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy */}

          <div>
            <h3 className="text-[#d4a64d] font-bold text-lg mb-6 uppercase">
              Chính sách
            </h3>

            <ul className="space-y-3 text-white text-sm">
              <li>Chính sách thành viên</li>
              <li>Hình thức thanh toán</li>
              <li>Vận chuyển giao nhận</li>
              <li>Đổi trả hoàn tiền</li>
              <li>Bảo vệ thông tin cá nhân</li>
            </ul>

            {/* App */}

            <div className="flex gap-3 mt-8">
              <Image
                src="/Googleplay.png"
                alt=""
                width={120}
                height={40}
              />

              <Image
                src="/Appstore.png"
                alt=""
                width={120}
                height={40}
              />
            </div>

            <div className="mt-4">
              <Image
                src="/bo_cong_thuong_grande.png"
                alt=""
                width={140}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="h-px bg-white/30 my-10" />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-white
          text-sm
          "
        >
          <p>
            ToCoToCo - Thương hiệu trà sữa tiên phong
            sử dụng nguồn nông sản Việt Nam
          </p>

          <p>
            Copyrights © 2019 by ToCoToCoTea.
            All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}