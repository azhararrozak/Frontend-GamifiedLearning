import React from 'react'
import { Link } from 'react-router-dom'

const HasilNilai = () => {
  return (
    <div>
        <div>
            <div>
            <h1>Pretes Nilai</h1>
            <Link className='border bg-secondary text-primary' to={"pretest"}>Klik Disini</Link>
            </div>
            <div>
            <h1>Postes Nilai</h1>
            <Link className='border bg-secondary text-primary' to={"postest"}>Klik Disini</Link>
            </div>
        </div>
    </div>
  )
}

export default HasilNilai