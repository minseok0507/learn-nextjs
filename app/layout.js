import Navigetion from "../component/Navigation"
import "../style/global.css"

export const metadata = {
  title: {
      template : "%s | Next Movies",
      default : "Loading...",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <Navigetion/>
        {children}
      </body>
    </html>
  )
}
