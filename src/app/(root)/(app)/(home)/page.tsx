import { SOCIALS } from '@/constants/common'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center">
      <div className="relative flex items-center justify-center py-3">
        <h1 className="relative flex-1">
          <span className="grid grid-cols-2">
            <span className="block text-sm opacity-90">I AM</span>
          </span>{' '}
          <span className=" z-10 block text-[calc(1.825rem+4.9vw)] font-bold leading-none">Marwa Al Shahal</span>{' '}
          <span className="grid grid-cols-2 justify-items-end">
            <span className="block"></span>
            <span className="block text-sm opacity-90">
              A FULL STACK
              <br /> WEB DEVELOPER
            </span>
          </span>
        </h1>
        <div className="absolute -bottom-1/4 mx-auto flex">
          <a
            href={`mailto:${SOCIALS.MA}`}
            aria-label="Email"
            target="_blank"
            rel="noopener"
            className="mx-2 block p-2 opacity-80 hover:opacity-95"
          >
            <MdOutlineMail size={20} />
          </a>
          <a href={SOCIALS.GH} aria-label="GitHub" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaGithub size={20} />
          </a>
          <a href={SOCIALS.IN} aria-label="Linkedin" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
