import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar.js';
import Day2 from './day2/day2'
import Day3 from './day3/day3'
import Day4 from './day4/day4'
import Day5 from './day5/day5'
import Day6 from './day6/day6'
import Day7 from './day7/day7'
import Day8 from './day8/day8'
import Day9 from './day9/day9.js'
import './index.css';

/**
 * Our data
 * ------------------------
 */
const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <>
      <ScotchInfoBar />
      <div className="App">

        <div className="user-deets">

          <img src={user.avatar} alt="chris avatar"/>

          <h3><a href={`http://twitter.com/${user.twitterUsername}`}>{user.name}</a></h3>

          <strong>Location</strong>
          {user.location}

          <strong>Eats</strong>
          {user.foodType}

          <strong>Age</strong>
          {user.age}

          <strong>Likes</strong>
          {user.likes}

          <strong>Twitter</strong>
          <a href={`http://twitter.com/${user.twitterUsername}`}>@{user.name}</a>

        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Day9 />, rootElement);
