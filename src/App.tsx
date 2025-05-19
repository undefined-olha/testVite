import { useState } from 'react'
import { getGreetingMessage } from './utils'

const App: React.FC = () => {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmittedName(name)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-x">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md mx-auto space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
          <button 
            type="submit"
            className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-medium rounded-lg transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </form>
        <h1 className="text-2xl font-bold text-white text-center">
          Hello {getGreetingMessage(submittedName)}
        </h1>
      </div>
    </div>
  )
}

export default App
