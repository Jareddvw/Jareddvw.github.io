

// type SectionProps = {
//     title: string;
//     link: string;
//     description: string;
// }

// const Section = (props: SectionProps) => {
//     return (
//         <div>
//             <a href={props.link}>{props.title}</a>
//             <p>{props.description}</p>
//         </div>
//     )
// }


export const ProjectList = () => {
  return (
    <div style={{ marginTop: '1rem' }}>
        Some projects and more links (in order of recency):
        {/* <Section title="WebGL Fluid Simulation" link="https://redj.dev/webgl-fluid/" description="In-browser fluid simulation written in TypeScript with WebGL2." />
        <Section title="Where2eat" link="https://github.com/Jareddvw/where2eat" description="React Native mobile app to help groups of users decide where to eat." />
        <Section title="NSF Reactions Database" link="https://db.gem-net.net/" description="Database for ribosomal reactions. Internship project for the NSF Center for Genetically Encoded Materials." />
        <Section title="Minesweeper" link="https://redj.dev/minesweeper/" description="Minesweeper with a different design, using React." /> */}
        <div>
            <a href="https://redj.dev/webgl-fluid/">WebGL Fluid Simulation</a>
        </div>
        <div>
            <a href="https://github.com/Jareddvw/where2eat">Where2eat</a>
        </div>
        <div>
            <a href="https://db.gem-net.net/">NSF Reactions Database</a>
        </div>
        <div>
            <a href="https://redj.dev/minesweeper/">Minesweeper</a>
        </div>
    </div>
  )
}



