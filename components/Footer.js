import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t-2 font-poppins">
      <div className="container  mx-auto px-4 py-4 flex justify-center items-center gap-x-20 selection:bg-transparent ">
        <p>&copy; 2024 EventCraft. All rights reserved.</p>
        {/* <div className="flex space-x-5 gap-3">
          <a href="https://github.com/Byte-Vortex/" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/bytevortex/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://x.com/Byte_Vortex" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </footer>
  )
}