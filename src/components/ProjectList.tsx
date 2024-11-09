

// type SectionProps = {
//     title: string;
//     link: string;
//     description: string;
// }

import { FluidSim } from "./FluidSim"

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
        Some stuff I've built:
        {/* <Section title="WebGL Fluid Simulation" link="https://redj.dev/webgl-fluid/" description="In-browser fluid simulation written in TypeScript with WebGL2." />
        <Section title="Where2eat" link="https://github.com/Jareddvw/where2eat" description="React Native mobile app to help groups of users decide where to eat." />
        <Section title="NSF Reactions Database" link="https://db.gem-net.net/" description="Database for ribosomal reactions. Internship project for the NSF Center for Genetically Encoded Materials." />
        <Section title="Minesweeper" link="https://redj.dev/minesweeper/" description="Minesweeper with a different design, using React." /> */}
        <div>
            <a href="https://redj.dev/webgl-fluid/">WebGL Fluid Simulation</a>
        </div>
        <FluidSim width={300} height={200} />
        <div>
            <a href="https://github.com/Jareddvw/where2eat">Where2eat</a>
        </div>
    </div>
  )
}



