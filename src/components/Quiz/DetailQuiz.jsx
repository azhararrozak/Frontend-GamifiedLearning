import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import QuizService from '../../services/quiz.service'

const DetailQuiz = () => {
    // const { id } = useParams()
    // const [quiz, setQuiz] = useState(null)

    // useEffect(() => {
    //     const getQuizById = async () => {
    //         try {
    //             const res = await QuizService.getQuizById(id)
    //             setQuiz(res.data)
    //         }catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getQuizById()
    // }, [id])

  return (
    <div>
        <h1>Detail Quiz</h1>

    </div>
  )
}

export default DetailQuiz