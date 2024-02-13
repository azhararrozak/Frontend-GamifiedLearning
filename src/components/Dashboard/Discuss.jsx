import React from 'react'
import ChatComponent from '../Chat/ChatComponent'

const Discuss = () => {
  return (
    <div className='h-full p-6'>
      <div className='p-4'>
        <h1 className='text-xl font-bold text-red-500'>Harap Baca Peraturan Diskusi Berikut</h1>
        <ol className='list-decimal px-4'>
          <li>Sopan dan Menghormati Satu Sama Lain</li>
          <li>Tidak Ada Tindakan Bullying</li>
          <li>Menggunakan Bahasa yang Tepat</li>
        </ol>
      </div>
      <ChatComponent />
    </div>
  )
}

export default Discuss