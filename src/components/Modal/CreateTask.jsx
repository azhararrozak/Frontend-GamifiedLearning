/* eslint-disable react/prop-types */
import {useState} from 'react'
import { IoClose } from "react-icons/io5";
import TaskService from "../../services/task.service";
import {toast} from "react-hot-toast";

const CreateTask = ({isOpen, onClose}) => {
    const [taskData, setTaskData] = useState({
        title: "",
        content: "",
        urlTask: "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setTaskData({...taskData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {title, content, urlTask} = taskData
            const response = await TaskService.createTask(title, content, urlTask)
            console.log(response)
            toast.success(response.data.message)
            setTaskData({
                title: "",
                content: "",
                urlTask: ""
            })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    isOpen && ((
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white p-6 rounded-lg w-1/2 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">Create Lesson</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoClose className="text-2xl" /> {/* Ikon cross */}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={taskData.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="urlTask" className="block text-gray-700">
              urlTask
              </label>
              <input
                type="text"
                id="urlTask"
                name="urlTask"
                value={taskData.urlTask}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700">
                Content
              </label>
                <textarea
                    id="content"
                    name="content"
                    value={taskData.content}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        </div>

    )
  )
)}

export default CreateTask