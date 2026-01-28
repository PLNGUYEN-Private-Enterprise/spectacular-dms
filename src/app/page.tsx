import type { Metadata } from "next";
import Image from "next/image";

type IconProps = { className?: string };

const DesignIcon = ({ className }: IconProps) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M4 20h16" />
		<path d="M6 16l10-10 2 2-10 10H6v-2z" />
		<path d="M14 6l4 4" />
	</svg>
);

const PrintIcon = ({ className }: IconProps) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M6 9V4h12v5" />
		<rect x="5" y="9" width="14" height="8" rx="2" />
		<path d="M7 17v3h10v-3" />
		<path d="M8 13h4" />
	</svg>
);

const MerchIcon = ({ className }: IconProps) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M4 7l4-3 4 3 4-3 4 3" />
		<path d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
		<path d="M9 12h6" />
	</svg>
);

const LabelIcon = ({ className }: IconProps) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M20 10v6a2 2 0 0 1-2 2H8l-4-4V6a2 2 0 0 1 2-2h6z" />
		<path d="M12 4l8 8" />
		<circle cx="8.5" cy="8.5" r="1.5" />
	</svg>
);

const GiftIcon = ({ className }: IconProps) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M4 8h16v12H4z" />
		<path d="M4 8h16v4H4z" />
		<path d="M12 8v12" />
		<path d="M12 8c0-2.2-1.8-4-4-4 0 2.2 1.8 4 4 4zm0 0c0-2.2 1.8-4 4-4 0 2.2-1.8 4-4 4" />
	</svg>
);

const CustomIcon = ({ className }: IconProps) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M12 2l2.1 4.4 4.9.7-3.5 3.4.8 4.9L12 13.8 7.7 15.4l.8-4.9L5 7.1l4.9-.7L12 2z" />
		<path d="M6 20h12" />
	</svg>
);

export const metadata: Metadata = {
	title:
		"Spectacular Design & Merch Solutions | Design, Print Ads, Merchandise",
	description:
		"Affordable design, print ads, and merchandise for Australian businesses. Call 0432 520 943 or chat on Messenger.",
	openGraph: {
		title: "Spectacular Design & Merch Solutions",
		description:
			"Affordable design, print ads, and merchandise for Australian businesses.",
		type: "website",
	},
};

export default function Page() {
	const navItems = [
		{ label: "Services", href: "#services" },
		{ label: "Print", href: "#print" },
		{ label: "Merch", href: "#merch" },
		{ label: "Process", href: "#process" },
		{ label: "Portfolio", href: "#portfolio" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Contact", href: "#contact" },
	];

	const services = [
		{
			title: "Graphic / Branding Design",
			desc: "Cohesive, professional branding.",
			items: [
				"Logos",
				"Brand kits",
				"Business cards",
				"Signage",
				"Social creatives",
			],
			icon: DesignIcon,
		},
		{
			title: "Print Ads & Print Design",
			desc: "Print-ready visuals that sell.",
			items: [
				"Flyers",
				"Brochures",
				"Posters",
				"Banners",
				"Menus",
				"Packaging",
			],
			icon: PrintIcon,
		},
		{
			title: "Merchandise",
			desc: "Practical items customers love.",
			items: [
				"T-shirts / uniforms",
				"Caps",
				"Tote bags",
				"Mugs / cups",
				"Stickers",
				"Corporate gifts",
			],
			icon: MerchIcon,
		},
		{
			title: "Labels / Decoration",
			desc: "Shelf-ready labels and finishes.",
			items: [
				"Product labels",
				"Decals",
				"Stickers",
				"Print + decoration options",
				"Edible goods labelling support",
			],
			icon: LabelIcon,
		},
		{
			title: "Corporate Gifts",
			desc: "Premium packs for teams and clients.",
			items: ["Gift sets", "Welcome packs", "Event swag", "Custom bundles"],
			icon: GiftIcon,
		},
		{
			title: "Custom Requests",
			desc: "Unique materials and one-offs.",
			items: ["One-off prints", "Limited drops", "Urgent jobs", "Special finishes"],
			icon: CustomIcon,
		},
	];

	const printItems = [
		"Flyers and postcards",
		"Menus and price lists",
		"Posters and window signage",
		"Event banners",
		"Brochures and catalogues",
	];

	const merchChips = ["Apparel", "Drinkware", "Stickers", "Gifts", "Uniforms"];

	const processSteps = [
		{
			title: "Brief",
			text: "Share goals, sizes, quantities, and timeline.",
		},
		{
			title: "Mockup",
			text: "We design and send a clear preview.",
		},
		{
			title: "Approve",
			text: "Confirm artwork, finishes, and costs.",
		},
		{
			title: "Print / Deliver",
			text: "We produce, check, then deliver or pickup.",
		},
	];

	const portfolio = [
		{ label: "Logo Set", tone: "from-[#00AEEF]/25 via-white to-white" },
		{ label: "Poster", tone: "from-[#E4007F]/20 via-white to-white" },
		{ label: "Packaging", tone: "from-[#FDE100]/30 via-white to-white" },
		{ label: "Uniform", tone: "from-[#00AEEF]/20 via-white to-white" },
		{ label: "Sticker", tone: "from-[#E4007F]/20 via-white to-white" },
		{ label: "Menu", tone: "from-[#2f2f2f]/10 via-white to-white" },
	];

	const testimonials = [
		{
			quote: "Fast turnaround and clear updates. The menus looked premium.",
			name: "Emma Clarke, Sydney",
		},
		{
			quote: "Great value and the quality is spot on. Easy to work with.",
			name: "Liam O'Connor, Melbourne",
		},
		{
			quote: "Design and merch handled together. Smooth process end-to-end.",
			name: "Sophie Nguyen, Brisbane",
		},
	];

	const faqs = [
		{
			q: "What is the turnaround time?",
			a: "Most jobs are completed within 3-7 business days after approval. Rush jobs can be discussed.",
		},
		{
			q: "Are revisions included?",
			a: "Yes. Reasonable revisions are included to get it right.",
		},
		{
			q: "Do you have minimum print quantities?",
			a: "Minimums vary by product and material. We will recommend the best option.",
		},
		{
			q: "Do you offer delivery or pickup?",
			a: "Both are available. We can arrange delivery across Australia or organise pickup.",
		},
		{
			q: "Can you help with edible goods labelling?",
			a: "We can support label layout, but ingredient lists and nutrition info must be provided by the customer.",
		},
	];

	return (
		<div className="min-h-screen bg-[#f8f9fb] text-[#2b2b2b] font-['Sora','Trebuchet_MS','Verdana',sans-serif]">
			<header className="sticky top-0 z-50 border-b border-[#00AEEF]/20 bg-white/90 backdrop-blur">
				<div className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-3">
							<div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00AEEF]/30">
								<Image
									src="/dms-logo.png"
									alt="SpectacularDMS logo"
									width={44}
									height={44}
									priority
									className="h-11 w-11 object-contain"
								/>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#7a7a7a]">
									SpectacularDMS
								</p>
								<p className="text-lg font-['Playfair_Display','Georgia',serif] font-semibold">
									Spectacular Design &amp; Merch Solutions
								</p>
							</div>
						</div>
						<nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#4a4a4a]">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="transition hover:text-[#E4007F]"
								>
									{item.label}
								</a>
							))}
						</nav>
						<div className="flex flex-wrap items-center gap-3">
							<a
								href="tel:0432520943"
								className="rounded-full bg-[#00AEEF] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0094c7]"
							>
								Call 0432 520 943
							</a>
							<a
								href="https://m.me/SpectacularDMS"
								target="_blank"
								rel="noreferrer"
								className="rounded-full bg-[#E4007F] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#c7006f]"
							>
								Chat on Messenger
							</a>
						</div>
					</div>
				</div>
			</header>

			<main>
				<section className="relative overflow-hidden">
					<div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,_rgba(0,174,239,0.2),_transparent_60%)] blur-2xl" />
					<div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,_rgba(228,0,127,0.18),_transparent_60%)] blur-2xl" />
					<div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
						<div className="space-y-4">
							<p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6b6b6b]">
								Design • Print Ads • Merchandise
							</p>
							<h1 className="text-4xl font-['Playfair_Display','Georgia',serif] font-semibold leading-tight text-[#1f1f1f] md:text-5xl">
								Professional design, print, and merch for Australian businesses.
							</h1>
							<p className="text-sm leading-relaxed text-[#4a4a4a]">
								Welcome to Spectacular Design &amp; Merch Solutions! We aim to offer Design
								and Merchandising solutions at an affordable price. Ever had amazing ideas
								but find it difficult to spend the time to bring it to fruition? We are
								here to help!
							</p>
							<div className="flex flex-wrap gap-3">
								<a
									href="tel:0432520943"
									className="rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0094c7]"
								>
									Call 0432 520 943
								</a>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="rounded-full bg-[#E4007F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c7006f]"
								>
									Chat on Messenger
								</a>
							</div>
							<div className="flex flex-wrap gap-2 text-xs">
								<span className="rounded-full bg-[#FDE100] px-3 py-1 font-semibold text-[#2b2b2b] shadow-sm">
									Affordable
								</span>
								<span className="rounded-full bg-white px-3 py-1 font-semibold text-[#2b2b2b] shadow-sm">
									Fast turnaround
								</span>
								<span className="rounded-full bg-white px-3 py-1 font-semibold text-[#2b2b2b] shadow-sm">
									Quality finish
								</span>
							</div>
						</div>
						<div className="rounded-3xl border border-[#00AEEF]/20 bg-white p-6 shadow-sm">
							<h2 className="text-lg font-['Playfair_Display','Georgia',serif] font-semibold text-[#1f1f1f]">
								Quick snapshot
							</h2>
							<ul className="mt-4 space-y-3 text-sm text-[#4a4a4a]">
								<li className="flex items-start gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-[#00AEEF]" />
									Design + print + merch under one roof.
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-[#E4007F]" />
									Clear mockups and approvals before production.
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-[#2f2f2f]" />
									Australian-focused support with Johnny Kim.
								</li>
							</ul>
							<div className="mt-5 rounded-2xl bg-[#f2f2f2] px-4 py-3 text-xs text-[#4a4a4a]">
								ABN: 35 422 477 055
							</div>
						</div>
					</div>
				</section>

				<section id="services" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Services</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Everything you need, simplified.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-[#4a4a4a]">
								Fast, consistent outputs for Australian brands.
							</p>
						</div>
						<div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
							{services.map((service) => {
								const Icon = service.icon;
								return (
									<div
										key={service.title}
										className="rounded-2xl border border-[#00AEEF]/15 bg-white p-5 shadow-sm"
									>
										<div className="flex items-center gap-3">
											<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00AEEF] text-white">
												<Icon className="h-6 w-6" />
											</div>
											<div>
												<h3 className="text-base font-semibold text-[#1f1f1f]">
													{service.title}
												</h3>
												<p className="text-xs text-[#4a4a4a]">{service.desc}</p>
											</div>
										</div>
										<ul className="mt-3 grid gap-2 text-xs text-[#4a4a4a]">
											{service.items.map((item) => (
												<li key={item} className="flex items-center gap-2">
													<span className="h-1.5 w-1.5 rounded-full bg-[#E4007F]" />
													{item}
												</li>
											))}
										</ul>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section id="print" className="scroll-mt-24 bg-[#f4fbff]">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Print</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Print that looks sharp in hand.
								</h2>
								<p className="mt-3 text-sm text-[#4a4a4a]">
									Popular print items for cafes, retail stores, and events across Australia.
								</p>
								<ul className="mt-4 grid gap-2 text-sm text-[#4a4a4a] sm:grid-cols-2">
									{printItems.map((item) => (
										<li key={item} className="flex items-center gap-2">
											<span className="inline-flex h-2 w-2 rounded-full bg-[#00AEEF]" />
											{item}
										</li>
									))}
								</ul>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="mt-5 inline-flex items-center justify-center rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0094c7]"
								>
									Request a quote
								</a>
							</div>
							<div className="rounded-3xl border border-[#00AEEF]/20 bg-white p-6 shadow-sm">
								<h3 className="text-xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Print ads that convert.
								</h3>
								<p className="mt-3 text-sm text-[#4a4a4a]">
									We help you choose sizes, paper stock, and finishes that look premium while
									staying affordable.
								</p>
								<div className="mt-4 grid gap-3 text-sm">
									<div className="rounded-2xl bg-[#f8f9fb] p-4">
										<p className="font-semibold">Best for promotions</p>
										<p className="text-[#4a4a4a]">Seasonal sales, launches, and events.</p>
									</div>
									<div className="rounded-2xl bg-[#f8f9fb] p-4">
										<p className="font-semibold">Consistent branding</p>
										<p className="text-[#4a4a4a]">Every piece matches your brand system.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="merch" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Merch</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Merch that gets remembered.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-[#4a4a4a]">
								Pick proven categories or ask for custom ideas.
							</p>
						</div>
						<div className="mt-5 flex flex-wrap gap-2">
							{merchChips.map((chip) => (
								<span
									key={chip}
									className="rounded-full border border-[#E4007F]/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#4a4a4a]"
								>
									{chip}
								</span>
							))}
						</div>
						<div className="mt-6 grid gap-5 md:grid-cols-2">
							<div className="rounded-2xl border border-[#E4007F]/15 bg-white p-5 shadow-sm">
								<h3 className="text-base font-semibold">Popular merch examples</h3>
								<ul className="mt-3 grid gap-2 text-sm text-[#4a4a4a]">
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-[#E4007F]" />
										Apparel: tees, uniforms, hoodies
									</li>
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-[#E4007F]" />
										Drinkware: mugs, cups, bottles
									</li>
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-[#E4007F]" />
										Stickers, decals, and labels
									</li>
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-[#E4007F]" />
										Corporate gifts and event packs
									</li>
								</ul>
							</div>
							<div className="rounded-2xl border border-[#00AEEF]/15 bg-white p-5 shadow-sm">
								<h3 className="text-base font-semibold">Need help with options?</h3>
								<p className="mt-3 text-sm text-[#4a4a4a]">
									Check out our range of Merchandising options. For pricing, availability,
									labeling/decoration, ingredient (edible goods), and more please inquire using
									FB Messenger!
								</p>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E4007F] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c7006f]"
								>
									Chat on Messenger
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="process" className="scroll-mt-24 bg-[#fff9db]">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Process</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									A simple, reliable workflow.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-[#4a4a4a]">
								Short approvals, clear delivery.
							</p>
						</div>
						<div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
							{processSteps.map((step, index) => (
								<div
									key={step.title}
									className="rounded-2xl border border-[#2f2f2f]/10 bg-white p-5 shadow-sm"
								>
									<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f2f2f] text-xs font-semibold text-white">
										{index + 1}
									</div>
									<h3 className="mt-3 text-base font-semibold">{step.title}</h3>
									<p className="mt-2 text-xs text-[#4a4a4a]">{step.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="portfolio" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Portfolio</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Recent work highlights.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-[#4a4a4a]">
								Design, print, and merch projects for local businesses.
							</p>
						</div>
						<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
							{portfolio.map((tile) => (
								<div
									key={tile.label}
									className={`group relative overflow-hidden rounded-2xl border border-[#2f2f2f]/10 bg-gradient-to-br ${tile.tone} p-5 shadow-sm`}
								>
									<div className="relative flex h-28 flex-col justify-between">
										<span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]">
											SpectacularDMS
										</span>
										<h3 className="text-lg font-semibold text-[#1f1f1f]">
											{tile.label}
										</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-[#2f2f2f] text-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#f5f5f5]">Pricing</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Transparent quotes, tailored to you.
								</h2>
								<p className="mt-3 text-sm text-[#e0e0e0]">
									We do not offer fixed pricing because every job is different. Pricing
									depends on quantity, material, labelling/decoration, edible labelling
									requirements, and timeline.
								</p>
							</div>
							<div className="rounded-2xl bg-white/10 p-5">
								<p className="text-lg font-semibold">Need a quick quote?</p>
								<p className="mt-2 text-sm text-[#e0e0e0]">
									Message us on Messenger for a quick quote.
								</p>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E4007F] px-5 py-2 text-sm font-semibold text-white"
								>
									Chat on Messenger
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Testimonials</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Clients who keep coming back.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-[#4a4a4a]">
								Value, responsiveness, and consistent quality.
							</p>
						</div>
						<div className="mt-6 grid gap-5 md:grid-cols-3">
							{testimonials.map((item) => (
								<div
									key={item.name}
									className="rounded-2xl border border-[#2f2f2f]/10 bg-white p-5 shadow-sm"
								>
									<p className="text-sm text-[#4a4a4a]">"{item.quote}"</p>
									<p className="mt-3 text-sm font-semibold text-[#1f1f1f]">{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="faq" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">FAQ</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Answers before you ask.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-[#4a4a4a]">
								Quick responses to the most common questions.
							</p>
						</div>
						<div className="mt-6 grid gap-4">
							{faqs.map((faq) => (
								<details
									key={faq.q}
									className="rounded-2xl border border-[#2f2f2f]/10 bg-white p-4 shadow-sm"
								>
									<summary className="cursor-pointer text-sm font-semibold text-[#1f1f1f]">
										{faq.q}
									</summary>
									<p className="mt-3 text-sm text-[#4a4a4a]">{faq.a}</p>
								</details>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="scroll-mt-24 bg-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
						<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">Contact</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Lets build something spectacular.
								</h2>
								<p className="mt-3 text-sm text-[#4a4a4a]">
									Contact person: Johnny Kim. Call or message anytime for a quick response.
								</p>
								<div className="mt-5 grid gap-3 text-sm text-[#4a4a4a]">
									<a className="font-semibold" href="tel:0432520943">
										Call 0432 520 943
									</a>
									<a className="font-semibold" href="mailto:spectaculardms@gmail.com">
										spectaculardms@gmail.com
									</a>
									<a
										className="font-semibold"
										href="https://facebook.com/SpectacularDMS"
										target="_blank"
										rel="noreferrer"
									>
										Facebook: @SpectacularDMS
									</a>
									<p className="text-sm text-[#6b6b6b]">ABN: 35 422 477 055</p>
								</div>
								<div className="mt-5 flex flex-wrap gap-3">
									<a
										href="tel:0432520943"
										className="rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0094c7]"
									>
										Call 0432 520 943
									</a>
									<a
										href="https://m.me/SpectacularDMS"
										target="_blank"
										rel="noreferrer"
										className="rounded-full bg-[#E4007F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c7006f]"
									>
										Chat on Messenger
									</a>
								</div>
							</div>
							<div className="rounded-3xl border border-[#2f2f2f]/10 bg-white p-6 shadow-sm">
								<form className="grid gap-4">
									<input id="contact-sent" type="checkbox" className="peer hidden" />
									<div>
										<label className="text-sm font-semibold text-[#4a4a4a]" htmlFor="name">
											Name
										</label>
										<input
											id="name"
											name="name"
											required
											className="mt-2 w-full rounded-xl border border-[#2f2f2f]/20 px-4 py-2 text-sm outline-none transition focus:border-[#00AEEF]"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label className="text-sm font-semibold text-[#4a4a4a]" htmlFor="phone">
											Phone
										</label>
										<input
											id="phone"
											name="phone"
											required
											className="mt-2 w-full rounded-xl border border-[#2f2f2f]/20 px-4 py-2 text-sm outline-none transition focus:border-[#00AEEF]"
											placeholder="Your phone number"
										/>
									</div>
									<div>
										<label className="text-sm font-semibold text-[#4a4a4a]" htmlFor="request">
											Request
										</label>
										<textarea
											id="request"
											name="request"
											required
											rows={4}
											className="mt-2 w-full rounded-xl border border-[#2f2f2f]/20 px-4 py-2 text-sm outline-none transition focus:border-[#00AEEF]"
											placeholder="What do you need?"
										/>
									</div>
									<label
										htmlFor="contact-sent"
										className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0094c7]"
									>
										Send request
									</label>
									<p className="hidden text-sm text-emerald-600 peer-checked:block">
										Thanks! We will get back to you shortly.
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-[#2f2f2f]/10 bg-[#1f1f1f] text-white">
				<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-[#d6d6d6]">SpectacularDMS</p>
							<p className="mt-2 text-2xl font-['Playfair_Display','Georgia',serif] font-semibold">
								Spectacular Design &amp; Merch Solutions
							</p>
							<p className="mt-2 text-sm text-[#d6d6d6]">
								Design, print ads, and merchandise made easy for Australian businesses.
							</p>
							<p className="mt-4 text-sm text-[#d6d6d6]">ABN: 35 422 477 055</p>
						</div>
						<div className="space-y-4">
							<div className="flex flex-wrap gap-3">
								<a
									href="tel:0432520943"
									className="rounded-full bg-[#00AEEF] px-5 py-2 text-sm font-semibold text-white"
								>
									Call 0432 520 943
								</a>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="rounded-full bg-[#E4007F] px-5 py-2 text-sm font-semibold text-white"
								>
									Chat on Messenger
								</a>
							</div>
							<div className="text-sm text-[#d6d6d6]">
								<p>Contact person: Johnny Kim</p>
								<p>Phone: 0432 520 943</p>
								<p>Email: spectaculardms@gmail.com</p>
								<p>Facebook: @SpectacularDMS</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:hidden">
				<a
					href="tel:0432520943"
					className="rounded-full bg-[#00AEEF] px-4 py-3 text-xs font-semibold text-white shadow-lg"
				>
					Call
				</a>
				<a
					href="https://m.me/SpectacularDMS"
					target="_blank"
					rel="noreferrer"
					className="rounded-full bg-[#E4007F] px-4 py-3 text-xs font-semibold text-white shadow-lg"
				>
					Messenger
				</a>
			</div>
		</div>
	);
}
