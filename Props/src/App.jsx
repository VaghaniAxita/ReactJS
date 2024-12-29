import React from 'react'
import Greetings from './Greetings'
import UserProfileCard from './UserProfileCard'

const App = () => {
  return (
    <div>
       <Greetings name="ReactJS" />
       <Greetings />


       <UserProfileCard
        name="ReactJS"
        age={2024}
        bio="React is a free, open-source JavaScript library"
        location="Surat, Gujarat"
        profilePicture="https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18"
      />
    </div>
  )
}

export default App


