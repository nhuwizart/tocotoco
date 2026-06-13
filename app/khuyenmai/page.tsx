import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from "next/image";
import PromotionCard from "@/components/PromotionCard";
export const promotions = [
  {
    id: 1,
    title: "HƯỚNG DẪN CHEESE CHARGE",
    image: "/promo-1.png",
    description:
      "Cheese Charge – Tích năng lượng, mở khóa quà xịn cùng ToCoToCo",
    linkpage: "/promo1",
  },
  {
    id: 2,
    title: "COMBO NHÓM",
    image: "/promo-2.png",
    description:
      "Rủ hội bạn “Cheese Lên” – Combo nhóm quà nhân đôi",
    linkpage: "/promo2",
  },
  {
    id: 3,
    title: "COMBO CHEESE BOOST",
    image: "/promo-3.png",
    description:
      "🧀 COMBO CHEESE BOOST: MACCHIATO + BÁNH SU KEM CHỈ TỪ 4K 🎉",
    linkpage: "/promo3",
  },
  
];

export default function KhuyenMai() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
       {/* Background */}
       <Image
               src="/banner-web.png"
               width={960}
               height={540}
               alt=""
               className="w-full h-auto mx-auto"
       />
        <div className="text-black max-w-5xl mx-auto py-10 flex flex-col px-6  gap-4">
          <h1 className="font-extrabold text-3xl">
          ToCoToCo ra mắt “Trạm Sạc Phô Mai – Say Bye Uể Oải”: Nạp năng lượng giờ xế, nhận quà liền tay
          </h1>
          <h2 className="font-bold text-xl">
          Nội dung:
          </h2>
          <p>Bạn có từng rơi vào trạng thái “tụt pin” sau nhiều giờ học tập và làm việc?</p>
          <p>Một ly trà thơm mát cùng lớp kem cheese béo nhẹ có thể là khoảng nghỉ nhỏ giúp bạn lấy lại tinh thần.</p>
          <p>Tháng 4 này, ToCoToCo chính thức khởi động chương trình:</p>
          <p className="font-bold text-xl">“Trạm Sạc Phô Mai – Say Bye Uể Oải”</p>
          <p>với sự xuất hiện của ba dòng Macchiato được yêu thích:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li  >Ô Long Kem Phô Mai</li>
            <li>Dâu Tằm Kem Phô Mai</li>
            <li>Hồng Trà Kem Phô Mai</li>
          </ul>
          <p>Không chỉ thưởng thức hương vị trà kết hợp cùng lớp kem cheese đặc trưng, khách hàng còn có cơ hội nhận bánh su kem, tích tem đổi quà và sở hữu những phần quà phiên bản giới hạn.</p>

        </div>


         <div
      className="
      bg-[#f5f5f5]
      min-h-screen
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        py-20
        "
      >

          {/* Content */}

          <section>
            <h1
              className="
              text-5xl
              font-bold
              text-black
              mb-12
              uppercase
              "
            >
              Chi Tiết Chương Trình
            </h1>

            <div
              className="
              grid
              md:grid-cols-2
              gap-8
              "
            >
              {promotions.map((item) => (
                <PromotionCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  linkpage={item.linkpage}
                />
              ))}
            </div>
          </section>
        
      </div>
    </div>
      </main>

      <Footer />
    </div>
  );
}