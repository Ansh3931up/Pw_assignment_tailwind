import './App.css'
import steve2 from './assets/steve2.png'
import steve1 from './assets/steve1.png'

function App() {

  return (
   <>
   <div className='w-full m-auto flex flex-col gap-4'>
    <h1 className='text-5xl font-bold tracking-wider'>The Real Leadership Lessons of Steve Jobs</h1>
    <p className='text-gray-500'>Six months after Jobs's death, the author of his best-selling biography identifies the practices that every CEO can try to emulate. <span className='text-black font-bold'> by Walter Isaacson</span></p>


    <div className="flex flex-row justify-center items-center"><img src={steve1} alt="" className='w-[50vw]' /></div>







    <p className="text-sm font-mono  text-justify mb-4">
          <span className='font-extrabold text-lg'>His saga is the entrepreneurial creation myth </span>written large: Steve Jobs cofounded Apple in his parents' garage in 1976, was ousted in 1985, returned to rescue it from near bankruptcy in 1997, and by the time he died, in October 2011, had built it into the world's most valuable company. Along the way he helped to transform seven industries: personal computing, animated movies, music, phones, tablet computing, retail stores, and digital publishing. He thus belongs in the pantheon of America's great innovators, along with Thomas Edison, Henry Ford, and Walt Disney. None of these men was a saint, but long after their personalities are forgotten, history will remember how they applied imagination to technology and business.
        </p>


        <div className='ml-36'>       <blockquote className="border-l-2 ml-0 border-black  italic mb-6">
        "The people who are crazy enough to think they can change the world are the ones who do."
        <br />
        —Apple's "Think Different" commercial, 1997
      </blockquote></div>


    
      <div className="  grid grid-cols-2 gap-4
       ">
      {/* Left Section */}
      
      <div className= "text-black text-justify  ">
      <p className="">
        One of the last times I saw him, after I had finished writing most of the book, I asked him again about his tendency to be rough on people. "Look at the results," he replied. "These are all smart people I work with, and any of them could get a top job at another place if they were truly feeling brutalized. But they don't." Then he paused for a few moments and said, almost wistfully, "And we got some amazing things done." Indeed, he and Apple had had a string of hits over the past dozen years that was greater than that of any other innovative company in modern times: iMac, iPod, iPod nano, iTunes Store, Apple Stores, MacBook, iPhone, iPad, App Store, OS X Lion—not to mention every Pixar film. And as he battled his final illness, Jobs was surrounded by an intensely loyal cadre of colleagues who had been inspired by him for years and a very loving wife, sister, and four children.
      </p>
      </div>

      {/* Right Section */}
      <div className=" text-black">
        <img src={steve2} alt="" />
      </div>
    </div>
 
    <div className="flex items-center ">
        <avatar className="w-12 h-12 rounded-full bg-green-500">
          <span className="text-xl  font-semibold text-white">M</span>
        </avatar>
        <p className="text-sm font-mono">
          Walter Isaacson, the CEO of the Aspen Institute, is the author of Steve Jobs and of biographies of Henry Kissinger, Benjamin Franklin, and Albert Einstein.
        </p>
      </div>


      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-white text-xl mb-4">Subscribe To Our Newsletter</h2>
        <div className="flex flex-col gap-4 justify-center  space-x-2">
          <input 
            type="email" 
            placeholder="Enter Your Email ID" 
            className="flex-grow p-2 rounded border border-gray-300" 
          />
          <button className="bg-green-500 ml-auto hover:bg-green-600 text-white px-4 py-2 w-60 rounded  self-center">
            Subscribe Now
          </button>
        </div>
      </div>

   </div>
   </>
  )
}

export default App
