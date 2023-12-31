import { Lato } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { i18n, Locale } from '../../i18n/i18n-config'
import { getDictionary } from '../../i18n/get-dirctionary'
import { gql } from '../../data-access/graphq-client'
import { LocaleSwitcher } from '../components/menu/locale-switcher'

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  const t = await getDictionary(params.lang)
  const { users } = await gql.GetUsers()

  return (
    <html lang={params.lang} className={lato.className}>
      <body className="flex flex-col items-center">
        <div className="w-full max-w-screen-2xl pl-6 pr-6 md:pl-14 md:pr-14">
          <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
            <Link href={`/${params.lang}`}>
              <Image
                src={'/logo.svg'}
                width={85}
                height={15}
                alt={'logo'}
                className="md:h-5 md:w-28"
              />
            </Link>

            <div className="flex items-center gap-10">
              <Link
                className="okkino-text-hover text-xs uppercase text-black"
                href={`/${params.lang}/about`}
              >
                {t.navigation.about}
              </Link>

              <LocaleSwitcher locale={params.lang} />
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}