export default function GlowCircle({
	top,
	left,
	center = false,
	opacity = 1.0,
	percent = false,
}:
	| {
			top: number;
			left: number;
			center?: boolean;
			opacity?: number;
			percent?: boolean;
	  }
	| {
			top?: number;
			left?: number;
			center: true;
			opacity?: number;
			percent?: boolean;
	  }) {
	const unit = percent ? '%' : 'px';
	return (
		<div
			className='rounded-full w-48 h-48 bg-primary-light absolute -z-50 blur-[140px]'
			style={{
				top: center ? '50%' : `${top + unit}`,
				left: center ? '50%' : `${left + unit}`,
				transform: center ? 'translate(-50%, -50%)' : undefined,
				opacity: opacity,
			}}
		/>
	);
}
