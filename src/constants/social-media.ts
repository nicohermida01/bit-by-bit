import type { SocialMedia } from '@/types/social-media'
import { instagramLink, XLink } from '@/constants/urls'

export const socialMedia: SocialMedia[] = [
	{
		title: 'Instagram',
		media: 'instagram',
		url: instagramLink,
	},
	{
		title: 'X',
		media: 'x',
		url: XLink,
	},
]
