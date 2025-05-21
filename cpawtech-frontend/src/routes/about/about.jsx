import { useNavigate } from 'react-router'

export default function About() {
    let navigate = useNavigate()

    return (
        <div className="flex flex-row justify-around items-center">
            <div className="w-[50vw]">
                <h1 className="text-4xl font-bold pb-1">About cpaw.tech</h1>
                <p>
                    With cpaw.tech, we want to bridge the gap between talented
                    college students with tech skills and nonprofits in need of
                    technical voulenteers. By helping to match students with
                    meaningful volunteer projects, we can empower the next
                    generation of tech leaders while helping nonprofits achieve
                    their missions.
                </p>

                <br className="p-3" />

                <h2 className="text-3xl font-bold pb-1">Our Mission</h2>
                <p>
                    cpaw.tech is dedicated to creating win-win opportunities.
                    For students, we offer the ability to gain hands-on
                    experience, build standout resumes, and network with
                    organizations making a difference. For nonprofits, we
                    provide access to skilled volunteers ready to tackle
                    technical challenges. These challenges range from building
                    website to creating data tools and visualiations. We work to
                    make volunteering rewarding, educational, and impactful.
                </p>

                <br className="p-3" />

                <h2 className="text-3xl font-bold pb-1">Why cpaw.tech?</h2>
                <p>
                    Learning while volunteering and finding positions that align
                    with your interests can be tough. Our platform curates
                    tech-focused projects that can align with students' skills
                    and career goals. This curation ensures that contributions
                    are a step towards personal and professional growth.
                    Nonprofits benefit from fresh perspectives and new
                    solutions, all while advancing their causes. Together, we're
                    building on the intersection of talent and purpose.
                </p>

                <br className="p-3" />

                <h2 className="text-3xl font-bold pb-1">Join Today</h2>
                <p>
                    Whether you're a student eager to code for a cause or a
                    nonprofit seeking technical talent, cpaw.tech is your
                    platform for impact. Join us today to connect, create, and
                    change the world.
                </p>

                <br className="p-3" />

                <button
                    className="border border-solid border-black p-4 w-auto"
                    onClick={() => navigate('/signup')}
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}
