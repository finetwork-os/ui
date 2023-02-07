import '../styles/globals.css'

import { ColorModeSwitch, DokzProvider, GithubLink } from 'dokz'
import { H2, H3, H4 } from '@finetwork/ui'

import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function App(props) {
  const { Component, pageProps } = props
  return (
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

        <link rel="icon" type="ico" href="/favicon.ico" />
      </Head>
      <DokzProvider
        headerLogo={
          <Link href="/" passHref>
            <a>
              <H4 font="secondary">Finetwork UI</H4>
            </a>
          </Link>
        }
        headerItems={[
          <GithubLink key="0" url="https://github.com/finetwork-os/ui" />,
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
            'dropdown-menu.mdx': true,
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
            'textarea.mdx': true,
            'toast.mdx': true,
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
  )
}
