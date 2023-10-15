import { cn } from '@/lib/utils';
import { Building2, MapPin, User } from 'lucide-react';

export default function ExperienceEntry({
	title,
	company,
	location,
	startDate,
	endDate,
	description,
	className,
	last = false,
}: {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	className?: string;
	last?: boolean;
}) {
	const lineHeight = last ? 'h-[calc(100%_-_16px)]' : 'h-[calc(100%_+_64px)]';
	return (
		<div className={cn('grid grid-cols-12 gap-x-4 mb-16', className)}>
			<div className='col-span-12 mb-2 lg:col-span-2 lg:mb-0 min-w-max'>
				<span className='text-foreground-light text-base'>
					{startDate} - {endDate}
				</span>
			</div>
			<div className='relative lg:block hidden'>
				<div
					className={`mx-auto w-0 mt-3 border border-l border-foreground-light ${lineHeight}`}
				/>
				<div className='absolute top-[9px] left-[calc(50%_-_6px)] rounded-full border-2 border-foreground-light w-3 aspect-square bg-background' />
			</div>
			<div className='col-span-12 lg:col-span-8'>
				<ul>
					<li className='flex gap-2 items-center font-semibold leading-normal'>
						<User />
						{title}
					</li>
					<li className='flex gap-2 items-center leading-normal mt-2'>
						<Building2 />
						{company}
					</li>
					<li className='flex gap-2 items-center leading-normal mt-2 mb-6'>
						<MapPin />
						{location}
					</li>
					{description.map((desc, i) => (
						<li key={i} className='mt-2 text-foreground-light leading-normal'>
							{desc}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
