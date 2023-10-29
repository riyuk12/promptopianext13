//1:15:39
import React, { Children } from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title:"Promptopia",
    description:"Promptopia is a site for sharing genrative ai prompts.",
}

const layout = ({children}) => {
  return (
    <html land="en">
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient"/>
                </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default layout