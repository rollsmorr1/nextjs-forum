import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { GitHubIcon } from '../components/icons/github'
import { LogoIcon } from '../components/icons/next'
import { DiscordIcon } from '../components/icons/discord'
import { Metadata } from 'next'
import { getBaseUrl } from '../utils/urls'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'Fleek Discord Forum',
    template: '%s | Fleek Discord Forum',
  },
  description: 'The web version of the Fleek Discord server',
  alternates: {
    canonical: getBaseUrl(),
  },
  openGraph: {
    title: {
      default: 'Fleek Discord Forum',
      template: '%s | Fleek Discord Forum',
    },
    description: 'The web version of the Fleek Discord server',
    type: 'website',
    url: getBaseUrl(),
    siteName: 'Fleek Discord Forum',
  },
  twitter: {
    card: 'summary',
    title: 'Fleek Discord Forum',
    description: 'The web version of the Fleek Discord server',
  },
}

type RootLayoutProps = { children: ReactNode }

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body className="bg-neutral-50 dark:bg-neutral-900 text-slate-900 dark:text-white">
        <header className="border-b border-neutral-700">
          <div className="container max-w-7xl flex mx-auto px-4 py-6 justify-between items-center">
            <h1 aria-hidden="true" className="sr-only">
              Fleek Discord
            </h1>

            <a
              href="/"
              className="hover:opacity-75 text-white hover:no-underline transition-all duration-200"
            >
              <span className="flex flex-col xs:flex-row xs:space-x-2  xs:items-center">
                <LogoIcon className="w-[90px]" />
              </span>
            </a>

            <div className="flex space-x-5">
              <a
                href="https://discord.gg/fleek"
                target="_blank"
                rel="noopener"
                aria-label="Discord Server Invite"
                className="hover:opacity-75 text-white transition-all duration-200"
              >
                <DiscordIcon size={7} />
              </a>

              <a
                href="https://github.com/rafaelalmeidatk/nextjs-forum"
                target="_blank"
                rel="noopener"
                aria-label="Github Repository"
                className="hover:opacity-75 text-white transition-all duration-200"
              >
                <GitHubIcon size={7} />
              </a>
            </div>
          </div>
        </header>

        {children}

        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
