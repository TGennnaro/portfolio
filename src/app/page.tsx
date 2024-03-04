import Button from '@/components/Button';
import EducationEntry from '@/components/EducationEntry';
import ExperienceEntry from '@/components/ExperienceEntry';
import GlowCircle from '@/components/GlowCircle';
import Header from '@/components/Header';
import Project from '@/components/Project';
import { Skill, SkillSection } from '@/components/skills';
import { Award, GraduationCap, MapPin, PenLine, Scroll } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Portfolio | Tyler Gennaro',
	description: 'My personal portfolio.',
};

export default function Home() {
	return (
		<main className='max-w-screen-xl mx-auto text-lg mb-32 px-8'>
			<section className='mt-32 w-fit mx-auto text-center relative'>
				<div className='relative'>
					<div className='absolute inset-0 w-full h-[110%] -z-[1] flex'>
						<div className='bg-gradient-to-br from-secondary from-40% to-background w-full blur-[106px]' />
						<div className='bg-gradient-to-br from-[#6F57FB] to-secondary/50 w-full blur-[106px]' />
					</div>
					<h1 className='fancy-text text-5xl md:text-7xl font-extrabold !leading-snug tracking-tight'>
						Hey, I&apos;m Tyler
					</h1>
					<Header className='text-4xl md:text-6xl'>
						I&apos;m a Software Developer
					</Header>
				</div>
			</section>
			<section className='mt-64 grid grid-cols-12 gap-x-4'>
				<div className='col-span-12 lg:col-span-6 my-auto relative'>
					<Header>About me</Header>
					<p className='mt-4 text-foreground-light text-lg leading-normal max-w-screen-md'>
						I&apos;m a 4th year Computer Science student at Monmouth University
						in West Long Branch, NJ. I have a passion for full-stack web
						development, particularly with Next.js. I&apos;m also interested in
						backend and embedded systems. When I&apos;m not coding, you can find
						me on the soccer field!
					</p>
					<p className='mt-4 text-foreground-light text-lg leading-normal max-w-screen-md'>
						I started coding in 2016 by learning Lua. I followed tutorials from
						YouTube and started building my own projects. I then moved to Java,
						which is when I started taking college courses. Now, I have worked
						with a variety of languages and frameworks, including TypeScript,
						C++, and Next.js.
					</p>
					<p className='mt-4 text-foreground-light text-lg leading-normal max-w-screen-md'>
						My goal is to continue improving my front-end design skills and to
						work as a full-stack web developer. I&apos;m currently looking for a
						full-time position starting May 2024. If you&apos;re interested in
						my work, feel free to reach out to me at{' '}
						<a href='mailto:tylergennaro10@gmail.com' className='underline'>
							tylergennaro10@gmail.com
						</a>
						.
					</p>
					<GlowCircle top={20} left={0} opacity={0.6} />
				</div>
				<div className='w-full max-w-xs col-span-12 lg:col-span-3 lg:col-start-10'>
					<Image
						src='/soccer.svg'
						alt='soccer image'
						width={344}
						height={344}
						className='w-full aspect-square'
					/>
				</div>
			</section>
			<section className='mt-64 relative scroll-m-28' id='experience'>
				<GlowCircle top={20} right={0} percent opacity={0.5} />
				<Header>Work Experience</Header>
				<ExperienceEntry
					title='Security Officer'
					company='Cardinal Point Homeland Security Group'
					location='Dresher, PA 19025'
					startDate='May 2023'
					endDate='Sep 2023'
					description={[
						'Provided daytime security and access control at a residential/commercial apartment complex.',
						'Managed the front desk area, including greeting visitors, receiving packages and mail, and ensuring a welcoming environment.',
					]}
					className='mt-8'
				/>
				<ExperienceEntry
					title='Computer Science Tutor'
					company='Monmouth University'
					location='West Long Branch, NJ 07764'
					startDate='Nov 2022'
					endDate='May 2023'
					description={[
						'Tutored student peers for Computer Science-related courses.',
						'Guided students through learning content such as Java, Python, C++, Kotlin, and SQL.',
					]}
				/>
				<ExperienceEntry
					title='Instructor'
					company='iCode of Shrewsbury'
					location='Shrewsbury, NJ 07702'
					startDate='Jan 2023'
					endDate='May 2023'
					description={[
						'Taught students aged 5 to 15 in a classroom-style environment about topics such as web development, robotics, circuitry, drone programming, Scratch, MCreator, and Roblox Studio.',
						'Traveled to various schools in the area to teach students in a camp-style environment.',
					]}
				/>
				<ExperienceEntry
					title='EMT Volunteer'
					company='Bucks County Rescue Squad'
					location='Bristol, PA 19007'
					startDate='May 2019'
					endDate='Jun 2020'
					description={[
						'Gained first-hand experience treating patients on 911 calls for services.',
						'Treated patients with conditions varying from minor medical issues to trauma patients.',
						'Pennsylvania Emergency Medical Technician (EMT) Certification (2019)',
					]}
				/>
				<ExperienceEntry
					title='Police Explorer Cadet Volunteer'
					company='Lower Makefield Township Police Department'
					location='Lower Makefield Township, PA 19067'
					startDate='Oct 2016'
					endDate='Jan 2023'
					description={[
						'Planned and supervised security at community events.',
						'Attended and coordinated bi-weekly meetings discussing law enforcement-related topics, such as S.W.A.T. tactics, Stop The Bleed, traffic stop procedures, and search and rescue.',
						'Promoted to Sergeant in 2018.',
					]}
					last
				/>
			</section>
			<section className='mt-64 relative scroll-m-28' id='education'>
				<GlowCircle top={50} left={100} opacity={0.5} />
				<Header>Education</Header>
				<EducationEntry
					lines={[
						{
							Icon: GraduationCap,
							text: <span className='font-bold'>Monmouth University</span>,
						},
						{
							Icon: MapPin,
							text: '400 Cedar Avenue, West Long Branch, NJ 07764',
						},
						{
							Icon: Scroll,
							text: (
								<span>
									Bachelor of Science in{' '}
									<span className='fancy-text text-lg font-bold'>
										Computer Science
									</span>
								</span>
							),
						},
						{
							Icon: PenLine,
							text: (
								<span>
									GPA 3.88{' '}
									<span className='text-xs text-foreground-light'>/4.00</span>
								</span>
							),
						},
						{
							Icon: Award,
							text: "Dean's List 5/6 semesters",
						},
					]}
					coursework={[
						'Java',
						'C++',
						'Python',
						'SQL',
						'Networking',
						'Perl',
						'Ruby',
						'Linux OS',
					]}
					startDate='Aug 2020'
					endDate='May 2024'
					className='mt-8'
				/>
				<EducationEntry
					lines={[
						{
							Icon: GraduationCap,
							text: (
								<span className='font-bold'>
									Bucks County Technical High School
								</span>
							),
						},
						{
							Icon: MapPin,
							text: '610 Wistar Road, Fairless Hills, PA 19030',
						},
						{
							Icon: Scroll,
							text: 'High School Diploma',
						},
						{
							Icon: PenLine,
							text: 'Studied Emergency Services',
						},
					]}
					coursework={[
						'Emergency Medical Services',
						'Policing',
						'Criminal Justice',
						'Firefighting',
					]}
					startDate='Aug 2016'
					endDate='Jun 2020'
					last
				/>
			</section>
			<section className='mt-64 relative scroll-m-28' id='skills'>
				<GlowCircle top={40} right={0} percent opacity={0.5} />
				<Header>Skills</Header>
				<SkillSection title='Languages'>
					<Skill name='TypeScript' level='advanced' />
					<Skill name='HTML' level='advanced' />
					<Skill name='CSS' level='advanced' />
					<Skill name='C++' level='intermediate' />
					<Skill name='Lua' level='intermediate' />
				</SkillSection>
				<SkillSection title='Frameworks'>
					<Skill name='Next.js' level='advanced' />
					<Skill name='React.js' level='advanced' />
					<Skill name='Node.js' level='advanced' />
				</SkillSection>
				<SkillSection title='Web Technologies'>
					<Skill name='TailwindCSS' level='advanced' />
					<Skill name='REST' level='advanced' />
					<Skill name='Sass' level='intermediate' />
				</SkillSection>
				<SkillSection title='Databases'>
					<Skill name='SQL' level='advanced' />
					<Skill name='Prisma ORM' level='advanced' />
					<Skill name='Drizzle ORM' level='advanced' />
				</SkillSection>
			</section>
			<section className='mt-64 relative scroll-m-28' id='projects'>
				<GlowCircle top={35} left={20} percent opacity={0.6} />
				<Header>Projects</Header>
				<Project
					title='DevsList'
					description='Employment platform for developers'
					image='/devslist.png'
					tools={[
						'TypeScript',
						'Next.js',
						'TailwindCSS',
						'NextUI',
						'Vercel Postgres',
						'Vercel Blob',
						'Drizzle ORM',
						'NextAuth',
						'React Query',
						'Zod',
					]}
					source='https://github.com/TGennnaro/devslist'
					demo='https://devslist.vercel.app'
					unfinished
				/>
				<Project
					title='Portfolio'
					description='Personal portfolio (this site)'
					image='/portfolio.png'
					tools={['TypeScript', 'Next.js', 'TailwindCSS']}
					source='https://github.com/TGennnaro/portfolio'
					demo='https://tgennaro.com'
				/>
				<Project
					title='Commonwealth Metal Company'
					description='Marketing website'
					image='/commonwealth.jpg'
					tools={[
						'TypeScript',
						'Next.js',
						'TailwindCSS',
						'ShadcnUI',
						'Zod',
						'NodeMailer',
						'CVA',
					]}
					source='https://github.com/TGennnaro/common-metal'
					demo='https://commonwealthmetal.com'
				/>
				<Project
					title='Pulsate'
					description='Inventory management application'
					image='/pulsate.png'
					tools={[
						'TypeScript',
						'Next.js',
						'TailwindCSS',
						'ShadcnUI',
						'Prisma',
						'NextAuth',
						'Stripe',
						'Zod',
						'CVA',
					]}
					source='https://github.com/TGennnaro/lfhrs-inventory'
					demo='https://pulsate.cloud'
				/>
				<Project
					title='CourseHawk'
					description='Professor rating database'
					image='/coursehawk.png'
					tools={[
						'TypeScript',
						'React.js',
						'TailwindCSS',
						'NextUI',
						'Pocketbase',
						'Puppeteer',
						'RateMyProfessors API',
					]}
					source='https://github.com/TGennnaro/CourseHawk'
					demo='https://coursehawk.vercel.app/'
				/>
			</section>
		</main>
	);
}
