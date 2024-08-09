import Image from "next/image";

const Home =()=>{
  return (
  <main className="flex flex-col items-center bg-white min-h-screen">
    <div className="mt-10 mb-10">    
      <Image
        src="/Foto.jpg"
        alt="Picture of the author"
        width="150"
        height="200"
      />
      </div>
    <p className="text-black text-4xl"> 
      Atharizza Muhammad Athaya - STI </p>
    <p className="text-black text-2xl mt-10"> 
      About Me </p>
    <p className="text-black text-xl text-center ml-96 mr-96 mb-10"> 
      Memiliki kemampuan pemrograman yang baik disertai oleh proyek-proyek yang telah dibuat.
      Aktif dalam team-based-project, dan selalu bertanggungjawab terhadap waktunya.</p>
    <p className="text-black text-2xl text-center"> 
      Minat dan Bakat </p>
    <p className="text-black text-xl text-center ml-96 mr-96 mb-10"> 
      Memiliki minat dalam membuat proyek-proyek pemrograman dan explore di bidang software engineering, terlebih lagi cyber security.
      <br/> Bakat dalam belajar bahasa pemrograman baru dengan cenderung cepat. </p>
    <p className="text-black text-2xl text-center"> 
      Proyek-Proyek Sebelumnya </p>
    <p className="text-black text-xl text-center ml-96 mr-96 mb-10">
      Membuat aplikasi Google Maps sederhana dimana dapat mencari jalan tercepat untuk para user menggunakan algoritma Dijkstra.
      <br/> Membuat aplikasi Game Pokemon sederhana dimana komponennya terdiri dari 
      nyawa monster, powerup, arena dan battle, shop, load dan save. </p>
    <p className="text-black text-2xl text-center"> 
      Pencapaian Sebelumnya </p>
    // Ini sepertinya ada caranya biar tidak ditulis ulang, cuma saya tidak tahu hehe
    <p className="text-black text-xl text-center ml-96 mr-96 mb-10">
      Sedang mencari pencapaian baru di bangku perkuliahan :) </p>
    <p className="text-black text-2xl text-center"> 
      Kontak </p>
    <div className="text-black text-xl justify-center ml-96 mr-96 mb-10 space-y-2"> 
      <div className="flex">
        <p className="min-w-[100px]">IG</p>
        <p>: atharizza.muhammad.a</p>
      </div>
      <div className="flex">
        <p className="min-w-[100px]">LinkedIn</p>
        <p>: Atharizza MA</p>
      </div>
      <div className="flex">
        <p className="min-w-[100px]">WA</p>
        <p>: 081230747073</p>
      </div>
    </div>
  </main>);
}

export default Home;