import './App.css'
import { ProjectList } from './components/ProjectList'

function App() {
  return (
    <>
      <div>
        Hi! You've reached my personal website.
        There's not much here yet.
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}> 
        <div style={{ marginTop: '1rem' }}>
          Some links:
          <div>
            Github: <a href="https://github.com/Jareddvw">Jareddvw</a>
          </div>
          <div>
            LinkedIn: <a href="https://www.linkedin.com/in/jareddvw/">Jareddvw</a>
          </div>
          <div>
            Email: <a href="mailto:jared@redj.dev">jared@redj.dev</a>
          </div>
        </div>
        <ProjectList />
      </div>
    </>
  )
}

export default App
