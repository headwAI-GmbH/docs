import { SidebarBanner } from "@site/src/components/Sponsors/SidebarBanner";
import { useEffect, useState } from "react";

export const SidebarBanners = () => {
	const items = [
		{
			imgSrc: "/sponsors/banners/n8n-banner.png",
			mobileImgSrc: "/sponsors/banners/n8n-banner-mobile.png",
			url: "https://n8n.io/",
			name: "n8n",
			description: "Does your interface have a backend yet? Try n8n",
		},

		{
			imgSrc: "/sponsors/banners/n8n-banner.png",
			mobileImgSrc: "/sponsors/banners/n8n-banner-mobile.png",
			url: "https://n8n.io/",
			name: "n8n",
			description: "Does your interface have a backend yet? Try n8n",
		},
		{
			imgSrc: "/sponsors/banners/tailscale-banner.png",
			mobileImgSrc: "/sponsors/banners/tailscale-banner-mobile.png",
			url: "https://tailscale.com/blog/self-host-a-local-ai-stack/?utm_source=OpenWebUI&utm_medium=paid-ad-placement&utm_campaign=OpenWebUI-Docs",
			name: "Tailscale",
			description: "Connect self-hosted AI to any device with Tailscale",
		},

		{
			imgSrc: "/sponsors/banners/tailscale-banner.png",
			mobileImgSrc: "/sponsors/banners/tailscale-banner-mobile.png",
			url: "https://tailscale.com/blog/self-host-a-local-ai-stack/?utm_source=OpenWebUI&utm_medium=paid-ad-placement&utm_campaign=OpenWebUI-Docs",
			name: "Tailscale",
			description: "Connect self-hosted AI to any device with Tailscale",
		},

		{
			imgSrc: "/sponsors/banners/placeholder.png",
			mobileImgSrc: "/sponsors/banners/placeholder-mobile.png",
			url: "https://forms.gle/92mvG3ESYj47zzRL9",
			name: "Open WebUI",
			description:
				"The top banner spot is reserved for Emerald+ Enterprise sponsors",
		},
	];

	// Randomly select an item to display
	const [selectedItemIdx, setSelectedItemIdx] = useState(
		Math.floor(Math.random() * items.length)
	);

	useEffect(() => {
		// After mounting update every 5 seconds
		setInterval(() => {
			setSelectedItemIdx(Math.floor(Math.random() * items.length));
		}, 10000); // 10000 ms = 10 seconds
	}, []);

	return <SidebarBanner item={items[selectedItemIdx]} />;
};
