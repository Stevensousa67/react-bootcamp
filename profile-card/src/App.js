import './App.css';

const skills = [
  {
    skill: 'HTML & CSS',
    level: 'Advanced',
    color: '#2662EA'
  },
  {
    skill: 'JavaScript',
    level: 'Intermediate',
    color: '#EFD81D'
  },
  {
    skill: 'Web Design',
    level: 'Intermediate',
    color: 'C3DCAF'
  },
  {
    skill: 'Git and GitHub',
    level: 'Intermediate',
    color: '#E84F33'
  },
  {
    skill: 'React',
    level: 'Beginner',
    color: '#60DAFB'
  },
  {
    skill: 'Next.js',
    level: 'Beginner',
    color: '#E84F33'
  }
]

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
function Skill({skill}){
  return (
    <div className='skill' style={{backgroundColor: skill.color}}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "Beginner" && '👶🏻' }
        {skill.level === "Intermediate" && '👍🏻' }
        {skill.level === "Advanced" && '💪🏻' }
      </span> 
    </div>
  )
}

// The SkillList component displays the list of skills of the user.
function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  )
}

export default App;
