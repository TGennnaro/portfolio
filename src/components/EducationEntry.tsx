import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Badge from './Badge';

export default function EducationEntry({
	startDate,
	endDate,
	lines,
	coursework,
	className,
	last = false,
}: {
	startDate: string;
	endDate: string;
	lines: { Icon: LucideIcon; text: React.ReactNode }[];
	coursework: string[];
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
					{lines.map(({ Icon, text }, i) => (
						<li key={i} className='flex gap-2 items-center mt-2 leading-normal'>
							<Icon />
							{text}
						</li>
					))}
					<li className='mt-8 uppercase text-xs text-foreground-light leading-normal'>
						Relevant course work
					</li>
					<ul className='flex gap-2 flex-wrap mt-2'>
						{coursework.map((work, i) => (
							<li key={i}>
								<Badge key={i}>{work}</Badge>
							</li>
						))}
					</ul>
				</ul>
			</div>
		</div>
	);
}
