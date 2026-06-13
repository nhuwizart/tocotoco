import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from "next/image";


export default function Promo2() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
       
        <div className="text-black max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">
          <h1 className="font-extrabold text-5xl">
            Rủ hội bạn “Cheese Lên” – Combo nhóm quà nhân đôi

          </h1>
          <div className="flex flex-col gap-10 lg:flex-row "> 
            {/* Background */}
       
       <div className=' flex flex-col gap-4'>

          <p>Giờ nghỉ sẽ vui hơn khi có thêm bạn bè đồng hành.</p>
          <p>Với chương trình <span className='font-bold'>“Cheese Lên Hội – Quà Nhân Đôi”,</span> khách hàng khi đặt nhóm Macchiato trên GrabFood, ShopeeFood và beFood sẽ nhận thêm nhiều quyền lợi hấp dẫn:</p>
          
          <p>🥤 Combo 3 ly Macchiato:<br></br>
 Tặng topping miễn phí cho từng ly.<br></br><br></br>
🥤 Combo 5 ly Macchiato:<br></br>
  Nhận ngay túi Canvas Cheese Squad phiên bản giới hạn.<br></br><br></br>
Cùng bạn bè thưởng thức Macchiato, cùng nhau tích năng lượng cho ngày dài!
</p>
          
       </div>
<Image
               src="/promo-2.png"
               width={500}
               height={200}
               alt=""
               className="w-full lg:w-[50%] h-auto mx-auto"
       />
          </div>
          
         

        </div>
      </main>

      <Footer />
    </div>
  );
}