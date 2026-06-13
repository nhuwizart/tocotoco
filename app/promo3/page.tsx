import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from "next/image";


export default function Promo1() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
       
        <div className="text-black max-w-5xl mx-auto py-10 px-6 flex flex-col gap-10">
          <h1 className="font-extrabold text-5xl">
            🧀 COMBO CHEESE BOOST: MACCHIATO + BÁNH SU KEM CHỈ TỪ 4K 🎉
          </h1>
          <div className="flex flex-col gap-10 "> 
            {/* Background */}
            <Image
               src="/promo-3.png"
               width={700}
               height={200}
               alt=""
               className="w-[70%] h-auto mx-auto"
       />
       
       <div className=' flex flex-col gap-4 '>

          
          <p className="font-bold text-xl">
         Nạp lại năng lượng giờ xế, vui tới giờ về cùng ToCoToCo 💛
          </p>
          <p>Bạn đang “tụt pin” giữa ngày? 😵‍💫<br></br>
Một buổi chiều dài với deadline, bài tập và công việc khiến năng lượng dần cạn? Đừng để cơn uể oải kéo dài, hãy ghé ngay <span className='font-bold'>Trạm Sạc Phô Mai</span> của ToCoToCo để nạp lại mood cùng dòng Macchiato thơm béo đặc trưng ✨</p>
<p>Trong khuôn khổ chương trình <span className='font-bold'>“Trạm Sạc Phô Mai - Say Bye Uể Oải”,</span> ToCoToCo mang đến ưu đãi dành riêng cho những tín đồ yêu thích vị trà hòa quyện cùng lớp kem cheese béo mịn:</p>
           <p className="font-bold text-xl">🥤 Mua 01 ly Macchiato bất kỳ</p>
           <p className="font-bold text-xl">➕ Thêm ngay 01 bánh su kem mềm mịn chỉ với 4.000đ 🍰</p>
           <p className="">Áp dụng cho các dòng Macchiato:</p>
            <p>💛 Ô Long Kem Phô Mai<br></br>
❤️ Dâu Tằm Kem Phô Mai<br></br>
🤎 Hồng Trà Kem Phô Mai<br></br><br></br>
Không chỉ là một ly nước giải khát, Macchiato cùng bánh su kem là “combo sạc pin” hoàn hảo cho những giờ nghỉ giữa ngày. Vị trà thanh mát kết hợp lớp kem cheese đặc trưng cùng món bánh nhỏ xinh giúp bạn có thêm năng lượng để tiếp tục học tập, làm việc và tận hưởng những khoảnh khắc vui vẻ hơn 💫


</p>
<p>📱 Cách tham gia cực đơn giản:<br></br>
1️⃣ Mở ứng dụng GrabFood / ShopeeFood / beFood<br></br>
2️⃣ Chọn món Macchiato yêu thích<br></br>
3️⃣ Thêm bánh su kem vào đơn với giá ưu đãi chỉ 4.000đ<br></br>
4️⃣ Nhận ngay combo “Cheese Boost” và bắt đầu nạp năng lượng 🧀⚡<br></br><br></br>
⏰ Thời gian áp dụng: 01/04/2026 - 15/05/2026<br></br>
📍 Áp dụng trên các nền tảng giao đồ ăn trực tuyến<br></br><br></br>
Đừng để giờ xế “hết pin” nhé! 🔋<br></br>
Ghé ToCoToCo ngay hôm nay và để Macchiato tiếp thêm năng lượng cho bạn 💛<br></br><br></br>
#TramSacPhoMai #SayByeUeOai #CheeseCharge #TocoTocoMacchiato
</p>
          
       </div>

          </div>
          
         

        </div>
      </main>

      <Footer />
    </div>
  );
}