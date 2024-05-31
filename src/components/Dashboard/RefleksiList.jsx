import {useState, useEffect} from 'react'
import RefleksiService from '../../services/refleksi.service'

const RefleksiList = () => {
    const [refleksi, setRefleksi] = useState([])

    useEffect(() => {
        RefleksiService.getRefleksi().then((response) => {
            setRefleksi(response.data)
        })
    }
    , [])

  return (
    <div>
        <h1 className="text-center text-2xl font-bold my-4">Daftar Refleksi</h1>
        <div className="p-3">
            {refleksi.map((refleksi, index) => (
                <div key={index} className="border border-secondary p-4 my-4">
                    <h1 className="text-xl font-bold">{refleksi.pertemuan}</h1>
                    <p>{refleksi.description}</p>

                    {refleksi.refleksi.map((item, index) => (
                        <div key={index} className="border border-secondary p-4 my-4">
                            <p className="text-lg font-bold">{item.userId.username}</p>
                            {item.questions.map((question, index) => (
                                <div key={index} className=" p-4 my-4">
                                    <div>
                                    <h1 className='font-bold'>Pertanyaan 1</h1>
                                    <p>{question.pertanyaan1}</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Pertanyaan 2</h1>
                                        <p>{question.pertanyaan2}</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Pertanyaan 3</h1>
                                        <p>{question.pertanyaan3}</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Pertanyaan 4</h1>
                                        <p>{question.pertanyaan4}</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Pertanyaan 5</h1>
                                        <p>{question.pertanyaan5}</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Pertanyaan 6</h1>
                                        <p>{question.pertanyaan6}</p>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    ))    
                    }
                </div>
            ))    
            }
        </div>
    </div>
  )
}

export default RefleksiList