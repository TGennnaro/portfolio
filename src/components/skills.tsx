export function Skill({
	name,
	level,
}: {
	name: string;
	level: 'beginner' | 'intermediate' | 'advanced';
}) {
	const levelClass = {
		beginner: 'w-1/4 bg-orange-500',
		intermediate: 'w-2/3 bg-yellow-500',
		advanced: 'w-full bg-green-500',
	};
	return (
		<div className='relative lg:col-span-4 border border-zinc-800 p-4 flex flex-col gap-4 rounded-xl overflow-hidden bg-[rgba(255,255,255,0.04)] hover:bg-accent/20 hover:border-accent/40 transition-colors'>
			<span className='text-3xl font-bold'>{name}</span>
			<div className='w-full h-2 bg-zinc-600 rounded-lg'>
				<div className={`${levelClass[level]} h-full rounded-lg`}></div>
			</div>
			<span className='text-base leading-snug text-foreground-light'>
				{level.charAt(0).toUpperCase() + level.slice(1)}
			</span>
		</div>
	);
}

export function SkillSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className='mt-20'>
			<div className='text-3xl mb-8 font-bold flex items-center'>
				<h2 className='shrink-0'>{title}</h2>
				<hr className='ml-8 w-full border-zinc-700' />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4'>
				{children}
			</div>
		</div>
	);
}
