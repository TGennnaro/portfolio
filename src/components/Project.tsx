import Image from 'next/image';
import Badge from './Badge';
import Link from 'next/link';
import { Github, Radio } from 'lucide-react';

export default function Project({
	title,
	description,
	image,
	tools,
	source,
	demo,
	unfinished = false,
}: {
	title: string;
	description: string;
	image: string;
	tools: string[];
	source: string;
	demo: string;
	unfinished?: boolean;
}) {
	return (
		<div className='bg-[rgba(255,255,255,0.04)] rounded-xl border border-zinc-800 p-4 flex lg:flex-row flex-col gap-8 mt-8'>
			<Image
				src={image}
				alt={image}
				width={470}
				height={230}
				className='rounded-xl'
			/>
			<div className='flex flex-col w-full'>
				<span className='font-bold leading-normal'>{title}</span>
				<span className='leading-normal mt-2'>{description}</span>
				<ul className='flex gap-3 flex-wrap my-6'>
					{tools.map((tool) => (
						<li key={tool}>
							<Badge>{tool}</Badge>
						</li>
					))}
				</ul>
				<div className='mt-auto flex gap-1 items-center'>
					<Link
						href={source}
						target='_blank'
						className='p-1 hover:bg-white/10 rounded-lg transition-colors'
					>
						<Github className='w-8 h-8' />
					</Link>
					<Link
						href={demo}
						target='_blank'
						className='p-1 hover:bg-white/10 rounded-lg transition-colors'
					>
						<Radio className='w-8 h-8' />
					</Link>
					{unfinished && (
						<span className='ml-auto text-sm text-foreground-light'>
							Unfinished
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
