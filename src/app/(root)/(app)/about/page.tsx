import setup from '@/assets/setup.jpg'
import { RESUME_URL } from '@/constants/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About - Marwa Al Shahal',
  openGraph: {
    title: 'About - Marwa Al Shahal',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

const CORE_TECHNOLOGIES = [
  'Node.js', 'Express', 'JavaScript', 'TypeScript', 'Python',
  'Angular', 'React', 'Next.js',
  'MySQL', 'MongoDB', 'Firebase',
  'Tailwind CSS', 'Bootstrap', 'Material UI',
  'Git', 'Gitlab', 'Jira', 'Agile/Scrum'
];

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={setup} alt="Foto dede ariansya" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Marwa Al Shahal</h2>
          <div className="mb-6">
            <p className="mb-1">
              A passionate Full Stack Web Developer from Tripoli, Lebanon who loves building purposeful digital experiences that make people’s lives easier. I enjoy crafting clean interfaces, designing scalable backend systems, and bringing clarity to every stage of a product’s lifecycle.
            </p>
            <p className="mb-1">
              My background in teaching and coding education shaped the way I think and work. I communicate clearly, stay organized, and understand how to guide people through complex ideas. These strengths naturally inspire my growing path toward Project Management, where technology, problem-solving, and people all come together.
            </p>
            <p className="mb-1">
              Today, I’m focused on becoming a developer who not only writes solid code but also contributes to planning, coordination, and delivering products that truly matter. I thrive in environments where collaboration, empathy, and strong processes lead to meaningful results.
            </p>
          </div>
          {/* <h2 className="mb-2 text-xl font-bold">Tech i love</h2>
          <div className="mb-6">
            <p className="mb-1">TypeScript, Node.js, Express.js, Tailwind, Bootstrap, Angular and React.</p>
          </div> */}
          <h2 className="mb-4 text-xl font-bold">Key Technologies & Skills</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {CORE_TECHNOLOGIES.map((tech) => (

              <span
                key={tech}
                className="inline-block px-3 py-1 text-sm font-semibold border-solid border-black border-2
                           dark:border-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
