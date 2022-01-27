import React from 'react'
import twopawbanner from '../../../assets/twopawbanner.png'


function Fundraiser() {
  return (
    <>
      <div className="background-image-container">
        <h1 className="image-text kessel-font mb-5" id="title">Fundraiser</h1>
        <p className="image-text text-lg mt-10" id="fundraiser-tagline">
          Thanks to your generosity we can help save these wonderful animals.
        </p>
        <img src={twopawbanner} className="background-image" />
      </div>
      <div className="bg-pawhub-purple mt-2">
        <p className="text-white text-base py-4 pl-10"><a href="/" className="hover:underline">Home</a> &gt; <a href="/aboutus" className="hover:underline">About Us</a> {'>'} Fundraiser</p>
      </div>
      <div className="fundraiser-background h-full w-full bg-center bg-cover p-56">
        <div className="bg-white/50 h-1/6 w-full flex flex-col justify-center items-center p-12 mt-56 -ml-48 -mb-16 rounded z-2">
          <h3 className="text-5xl kessel-font text-center">New Rescue Centre</h3>
          <p className="mt-5 text-center">
            Here at PawHub HQ we are really seeing the effects of the corona-puppy-purchase surge,
            more and more of these lovely dogs are arriving at our doorstep and we are fast running out of space.
            With that in mind, PawHub are running the following fundraising events so we can build a new Rescue Centre for these pups:
          </p>
          <ul className="mt-5">
            <li className="list-disc">PawHub Cake Sale</li>
            <li className="list-disc">PawHub Pub Quiz</li>
            <li className="list-disc">Sponsored Dog Walk (lots)</li>
          </ul>
          <p className="mt-10 text-align-middle">
            If you want to help raise money in collaboration PawHub please email the team at directly at <a className="underline" href="#">fundraiser@pawhub.dog</a> and we will be ready to assist.
          </p>
        </div>
      </div>
    </>
  )
}

export default Fundraiser