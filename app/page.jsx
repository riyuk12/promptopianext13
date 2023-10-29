import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
      <br className="max-md:hidden" />
      <span className='orange_gradient text-center'>AI Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is a site for sharing genrative ai prompts. with a focus on the <span className='orange_gradient font-bold'>GPT-3</span> model.
        Find a prompt you like? <span className='orange_gradient font-bold'>Copy</span> it to your clipboard and paste it into your favorite <span className='orange_gradient font-bold '>GPT-3</span> powered app.
      </p>
      <Feed />
    </section>
  )
}

export default Home