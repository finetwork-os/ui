import { getCssText } from '../styles/stitches.config'
import { getCssText as getCssTextFiUi } from '@finetwork/ui'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          id="finetwork-ui"
          dangerouslySetInnerHTML={{ __html: getCssTextFiUi() }}
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
