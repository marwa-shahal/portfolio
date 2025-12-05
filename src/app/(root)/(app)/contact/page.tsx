import { FORMSPREE_KEY, SOCIALS } from '@/constants/common'
import type { Metadata } from 'next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact - Marwa Al Shahal',
  openGraph: {
    title: 'Contact - Marwa Al Shahal',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">ADDRESS</h2>
            <p className="text-sm leading-5">Tripoli, Lebanon.</p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:marwa.al.shahal@gmail.com" rel="noopener" className="hover:text-yellow-600">
                marwa.al.shahal@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <div className="flex">
              <a
                href={`mailto:${SOCIALS.MA}`}
                aria-label="Email"
                target="_blank"
                rel="noopener"
                className="mr-2 p-2 pl-0 block opacity-80 hover:opacity-95"
              >
                <MdOutlineMail size={20} />
              </a>
              <a
                href={SOCIALS.GH}
                aria-label="GitHub"
                target="_blank"
                rel="noopener"
                className="mx-2 block p-2 opacity-80 hover:opacity-95"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={SOCIALS.IN}
                aria-label="Linkedin"
                target="_blank"
                rel="noopener"
                className="mx-2 block p-2 opacity-80 hover:opacity-95"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
