import './App.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

// The Avatar component displays the profile picture and name of the user.
function Avatar() {
  return (
    <img className='avatar' src='profile_picture.jpeg' alt='Steven Sousa' />
  )
}

// The Intro component displays the introduction text of the user.
function Intro() {
  return (
    <div className='intro'>
      <h1 className='name'>Steven Sousa</h1>
      <p>Full-stack web developer and student at Bridgewater State University. When not coding or studying, I like to play video games, to workout, and to spend time with my wife and daughter.</p>
    </div>
  )
}

// The Skill component displays a single skill of the user.
function Skill(props){
  return (
    <div className='skill' style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span> 
    </div>
  )
}

// The SkillList component displays the list of skills of the user.
function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='HTML & CSS' emoji='👷🏻' color='red'/>
      <Skill skill='JavaScript' emoji='🪄' color='yellow'/>
      <Skill skill='Next.js' emoji='🚀' color='silver'/>
      <Skill skill='React' emoji='💪🏻' color='lightblue'/>
      <Skill skill='Tailwind CSS' emoji='💄' color='green'/>
    </div>
  )
}

export default App;
