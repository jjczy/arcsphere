import { useState } from "react"
import ChatbotWindow from "./ChatbotWindow"

export default function SlideOutButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="arcbot_container">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="arcbot_button"
          aria-label={isOpen ? "Close panel" : "Open panel"}
        >
          Arc'BOT
        </button>
      </div>

      <ChatbotWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

