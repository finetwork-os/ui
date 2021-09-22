import '../styles/globals.css'

import { ColorModeSwitch, DokzProvider, GithubLink } from 'dokz'
import { H2, IdProvider, getCss } from '@finetwork/ui'
import { darkTheme, lightTheme } from '../themes'
import { useEffect, useState } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { createStitches } from '@stitches/react'

const { createTheme } = createStitches()
const darkThemeStitches = createTheme('fi-ui-dark-theme', darkTheme)

export default function App(props) {
  const isServer = typeof window === 'undefined'
  const [modeTheme, setModeTheme] = useState(() =>
    !isServer ? localStorage.getItem('fi-ui-theme') || 'light' : 'light'
  )
  const { Component, pageProps } = props
  useEffect(() => {
    const htmlTag = document.querySelector('html')
    if (modeTheme === 'dark') {
      htmlTag.classList.add(darkThemeStitches)
    } else {
      htmlTag.classList.remove(darkThemeStitches.toString())
    }
    localStorage.setItem('fi-ui-theme', modeTheme === 'dark' ? 'dark' : 'light')
  }, [modeTheme])
  return (
    <IdProvider>
      <ChakraProvider resetCSS>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Code"
            rel="stylesheet"
            key="google-font-Fira"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
            rel="stylesheet"
            key="nunito"
          />
          <style
            id="fi-ui"
            dangerouslySetInnerHTML={{
              __html: getCss(lightTheme).toString(),
            }}
          />
        </Head>
        <DokzProvider
          headerLogo={
            <Link href="/" passHref>
              <a>
                <H2 font="secondary">Fi UI</H2>
              </a>
            </Link>
          }
          headerItems={[
            <GithubLink key="0" url="https://github.com/finetwork-os/fi-ui" />,
            <div
              onClick={() =>
                setModeTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
              }
            >
              <ColorModeSwitch />
            </div>,
          ]}
          sidebarOrdering={{
            'index.mdx': true,
            'getting-started.mdx': true,
            components: {
              'accordion.mdx': true,
              'button.mdx': true,
              'card.mdx': true,
              'checkbox.mdx': true,
              'dialog.mdx': true,
              'input.mdx': true,
              'link.mdx': true,
              'loading.mdx': true,
              'radio.mdx': true,
              'select.mdx': true,
              'separator.mdx': true,
              'skeleton.mdx': true,
              'switch.mdx': true,
              'tabs.mdx': true,
              'tag.mdx': true,
              'tooltip.mdx': true,
              'typography.mdx': true,
            },
            sections: {
              'price-card.mdx': true,
            },
          }}
        >
          <Component {...pageProps} />
        </DokzProvider>
      </ChakraProvider>
    </IdProvider>
  )
}
