import Image from "next/image";

const Home =()=>{
  return (
  <main className="flex flex-col items-center bg-white min-h-screen">
    <div className="mt-10 mb-10">    
      <Image
        src="/Foto.jpg"
        alt="Foto Athar"
        width="150"
        height="200"
      />
    </div>
    <div className="text-black text-center ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 lg:ml-32 lg:mr-32 xl:ml-48 xl:mr-48 2xl:ml-64 2xl:mr-64">
      <p className="text-4xl"> 
        Atharizza Muhammad Athaya - 19623143
      </p>
      <p className="text-2xl mt-10"> 
        About Me
      </p>
      <p className="text-xl mb-10"> 
        Memiliki kemampuan pemrograman yang baik disertai oleh proyek-proyek yang telah dibuat.
        Aktif dalam team-based-project, dan selalu bertanggungjawab terhadap waktunya.
      </p>
      <p className="text-2xl"> 
        Minat dan Bakat
      </p>
      <p className="text-xl mb-10"> 
        Memiliki minat dalam membuat proyek-proyek pemrograman dan explore di bidang software engineering, terlebih lagi cyber security. <br/>
        Bakat dalam belajar bahasa pemrograman baru dengan cenderung cepat. 
      </p>
      <p className="text-2xl"> 
        Proyek-Proyek Sebelumnya
      </p>
      <p className="text-xl mb-10">
        Membuat aplikasi Google Maps sederhana dimana dapat mencari jalan tercepat untuk para user menggunakan algoritma Dijkstra. <br/>
        Membuat aplikasi Game Pokemon sederhana dimana komponennya terdiri dari nyawa monster, powerup, arena dan battle, shop, load dan save. 
      </p>
      <p className="text-2xl"> 
        Pencapaian Sebelumnya
      </p>
      <p className="text-xl mb-10">
        Sedang mencari pencapaian baru di bangku perkuliahan :)
      </p>
      <p className="text-2xl"> 
        Kontak
      </p>
      <p className="text-xl">
        Atharizza MA (LinkedIn) <br/> atharizza.muhammad.a (IG) <br/> 081230747073 (WA/Telpon)
      </p>
    </div>
  </main>);
}
  
export default Home;