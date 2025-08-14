import Slider from '@site/src/components/slideShow';
import { projects } from '@site/src/data/projects'


export default function Projects() {
    const showProjects = projects.filter(i => i.preview)
    return (
    <>
        <section className="group/section py-2 max-lg:mx-4">
            <h2>Projects</h2>
            <Slider items={showProjects} />
        </section>
    </>    
    );
}
