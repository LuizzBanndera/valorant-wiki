// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }
  render() {
    return (
      <Html>
        <Head>
        {this.props.styleTags}          
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>        
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}