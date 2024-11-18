'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-5 left-0 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-50">
          <h3 className="text-lg font-semibold mb-2">Chat with Us</h3>
          <p className="text-gray-600 mb-4">How can we help you today?</p>
          <textarea
            className="w-full border rounded-md p-2 mb-2"
            rows="3"
            placeholder="Type your message here..."
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Send
          </button>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}