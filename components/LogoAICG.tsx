import Image from 'next/image'
import LogoSVG from '../public/Logo-ai-component-generator.svg'

export default function LogoAICG({ isDark }) {
	return (<>
		{isDark ? <Image
			src={LogoSVG}
			width={400}
			height={200}
			alt={'Logo AI components generator'}
			className="invert hue-rotate-180"
		>
		</Image> : <Image
			src={LogoSVG}
			width={400}
			height={200}
			alt={'Logo AI components generator'}
		>
		</Image>}
	</>)
}
