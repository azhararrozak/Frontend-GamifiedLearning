

// eslint-disable-next-line react/prop-types
const Button = ({finishedRead}) => {
  return (
    <div>
      <button  className="border px-4 py-2 bg-blue-400" onClick={finishedRead}>
        Selesai
      </button>
    </div>
  )
}

export default Button