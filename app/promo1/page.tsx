import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from "next/image";


export default function Promo1() {
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />

      <main className="flex-grow">
       
        <div className="text-black max-w-5xl mx-auto py-10  px-6 flex flex-col gap-10">
          <h1 className="font-extrabold text-5xl">
            Cheese Charge – Tích năng lượng, mở khóa quà xịn cùng ToCoToCo

          </h1>
          <div className="flex flex-col gap-10 lg:flex-row"> 
            {/* Background */}
       
       <div className=' flex flex-col gap-4'>

          <p>Mỗi ly Macchiato không chỉ là một thức uống, mà còn là một lần “sạc pin” cho ngày dài.</p>
          <p>Tham gia Cheese Charge cực đơn giản:</p>
          <p className="font-bold text-xl">
          Bước 1:
          </p>
          <p>Mua 01 ly Macchiato bất kỳ trong thời gian chương trình.</p>
           <p className="font-bold text-xl">
          Bước 2:
          </p>
          <p>Nhận cup holder có mã QR và quét để tham gia Zalo Mini App ToCoToCo.</p>
           <p className="font-bold text-xl">
          Bước 3:
          </p>
          <p>Tích Cheese Stamp và đổi ngay những phần quà hấp dẫn.</p>
          <p>Mốc đổi quà:</p>
          <p>⭐ 03 Cheese Stamp<br></br>
 → Tặng 01 topping bất kỳ<br></br><br></br>
⭐ 05 Cheese Stamp<br></br>
 → Miễn phí nâng size + topping tự chọn<br></br><br></br>
⭐ 10 Cheese Stamp<br></br>
 → Combo Ô Long Kem Phô Mai + bánh su kem<br></br><br></br>
⭐ 15 Cheese Stamp<br></br>
 → Nhận quà phiên bản giới hạn Cheese Squad

</p>
          
       </div>
<Image
               src="/promo-1.png"
               width={500}
               height={200}
               alt=""
               className="w-[50%] h-auto mx-auto"
       />
          </div>
          
         

        </div>
      </main>

      <Footer />
    </div>
  );
}