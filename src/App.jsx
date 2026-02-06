import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center px-13 min-h-dvh gap-[40px]'>
      <div className='flex max-x-[1170px] w-full justify-between'> {/*section*/}
        <div className='w-full flex-1'>
          <h1 className='text-[32px] font-bold text-[#36454F] font-Noto-Sans-bold leading-[150%] '>პროექტის შესახებ</h1>
          <p className='font-Noto-Sans text-[16px] text-[#36454F] leading-[150%] text-justify mb-[28px] mt-[33px] max-w-[437px]'>სარკვევი განკუთვნილია საბაკალავრო საფეხურის სტუდენტებისათვის, რომლებსაც ეკითხებათ სასწავლო კურსი „ბოტანიკა“, ასევე ბოტანიკით დაინტერესებული მაგისტრანტების, დოქტორანტების, მკვლევარებისა და მოყვარული ბოტანიკოსებისათვის, რომლებსაც აქვთ სურვილი მცენარეთა ოჯახების რკვევის პრაქტიკულ უნარ-ჩვევებს დაეუფლონ.</p>
          <a href="#" className='text-[#12C295] bg-[#DAFFF6] px-[23px] py-[12px] rounded-[10px] border-[1px] border-[#12C295]'>სრულად</a>
        </div>
        <div className='flex-1'>
          <img className='w-[652px] ' src="src\assets\homework_pic.png" alt="some coputer img" />
        </div>
      </div>
    </div>
  )
}

export default App