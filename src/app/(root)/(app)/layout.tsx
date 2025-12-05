import type { Metadata } from 'next'
import RootBackground from './components/RootBackground'

export const metadata: Metadata = {
  title: 'Marwa Al Shahal',
  description: 'I’m Marwa Al Shahal, Full Stack Web Developer based in Tripoli, Lebanon.',
  openGraph: {
    images: '/media/poster.jpg',
    title: 'Marwa Al Shahal',
    description: 'I’m Marwa Al Shahal, Full Stack Web Developer based in Tripoli, Lebanon.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootBackground />
      <main className="relative z-10 flex-1 bg-white/60 p-3 dark:bg-black/75 md:px-5 md:pb-10 lg:px-10">{children}</main>
    </>
  )
}
