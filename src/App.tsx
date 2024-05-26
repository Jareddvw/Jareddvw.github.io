import './App.css'

function App() {
  return (
    <>
      <div>
        Hi, you've reached my personal website.
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
        <div style={{ marginTop: '1rem' }}>
          Some projects with more links:
          <div>
            <a href="https://redj.dev/webgl-fluid/">WebGL Fluid Simulation</a>
          </div>
          <div>
            <a href="https://db.gem-net.net/">NSF Reactions Database</a>
          </div>
          <div>
            <a href="https://redj.dev/minesweeper/">Minesweeper</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
