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
		"Spectacular Design & Merch Solutions helps Australian businesses with affordable design, print ads, and merchandise. Fast turnaround, quality finish. Call 0432 520 943 or chat on Messenger.",
	openGraph: {
		title: "Spectacular Design & Merch Solutions",
		description:
			"Affordable design, print ads, and merchandise for Australian businesses. Fast turnaround and quality finish.",
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
			desc: "Build a brand that looks consistent everywhere.",
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
			desc: "Print-ready artwork that communicates clearly.",
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
			desc: "Memorable items your customers use every day.",
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
			desc: "Make products shelf-ready and on-brand.",
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
			desc: "Premium packs for teams, clients, and events.",
			items: ["Gift sets", "Welcome packs", "Event swag", "Custom bundles"],
			icon: GiftIcon,
		},
		{
			title: "Custom Requests",
			desc: "Tell us the idea and we will make it real.",
			items: ["One-off prints", "Limited drops", "Urgent jobs", "Unique materials"],
			icon: CustomIcon,
		},
	];

	const printItems = [
		"Flyers and postcards",
		"Menus and price lists",
		"Posters and window signage",
		"Event banners",
		"Brochures and catalogues",
		"Packaging sleeves",
	];

	const merchChips = [
		"Apparel",
		"Drinkware",
		"Stickers",
		"Gifts",
		"Uniforms",
		"Eco packs",
	];

	const processSteps = [
		{
			title: "Brief",
			text: "Tell us your goals, sizes, quantities, and timeline.",
		},
		{
			title: "Mockup",
			text: "We design and share a clear mockup for review.",
		},
		{
			title: "Approve",
			text: "Confirm artwork, finishes, and costs before production.",
		},
		{
			title: "Print / Deliver",
			text: "We print, quality-check, then deliver or arrange pickup.",
		},
	];

	const portfolio = [
		{ label: "Logo Set", tone: "from-emerald-500/30 via-teal-300/20 to-white" },
		{ label: "Poster", tone: "from-amber-500/30 via-orange-300/20 to-white" },
		{ label: "Packaging", tone: "from-sky-500/30 via-cyan-300/20 to-white" },
		{ label: "Uniform", tone: "from-rose-500/30 via-pink-300/20 to-white" },
		{ label: "Sticker", tone: "from-lime-500/30 via-emerald-300/20 to-white" },
		{ label: "Menu", tone: "from-indigo-500/30 via-blue-300/20 to-white" },
	];

	const testimonials = [
		{
			quote:
				"Fast turnaround and clear communication. Our new cafe menus look premium.",
			name: "Emma Clarke, Sydney",
		},
		{
			quote: "Great value for money and the quality is spot on. Highly recommend.",
			name: "Liam O'Connor, Melbourne",
		},
		{
			quote:
				"They handled design and merch in one go. Super easy for our small team.",
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
			a: "Yes, reasonable revisions are included to make sure you are happy with the result.",
		},
		{
			q: "Do you have minimum print quantities?",
			a: "Minimums vary by product and material. We will recommend the most cost-effective option.",
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
		<div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-slate-50 text-slate-900 font-['Sora','Trebuchet_MS','Verdana',sans-serif]">
			<header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
				<div className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
								<Image
									src="/dms-logo.png"
									alt="SpectacularDMS logo"
									width={40}
									height={40}
									priority
									className="h-10 w-10 object-contain"
								/>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">
									SpectacularDMS
								</p>
								<p className="text-lg font-['Playfair_Display','Georgia',serif] font-semibold">
									Spectacular Design &amp; Merch Solutions
								</p>
							</div>
						</div>
						<nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="transition hover:text-slate-900"
								>
									{item.label}
								</a>
							))}
						</nav>
						<div className="flex flex-wrap items-center gap-3">
							<a
								href="tel:0432520943"
								className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
							>
								Call 0432 520 943
							</a>
							<a
								href="https://m.me/SpectacularDMS"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
							>
								Chat on Messenger
							</a>
						</div>
					</div>
				</div>
			</header>

			<main>
				<section className="relative overflow-hidden">
					<div className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.16),_transparent_60%)] blur-2xl" />
					<div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),_transparent_60%)] blur-2xl" />
					<div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
						<div className="space-y-6">
							<p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
								Design • Print Ads • Merchandise
							</p>
							<h1 className="text-4xl font-['Playfair_Display','Georgia',serif] font-semibold leading-tight text-slate-900 md:text-5xl">
								Professional design, print, and merch for Australian businesses.
							</h1>
							<div className="space-y-4 text-base leading-relaxed text-slate-700">
								<p>
									Welcome to Spectacular Design &amp; Merch Solutions! We aim to offer Design
									and Merchandising solutions at an affordable price. Ever had amazing ideas
									but find it difficult to spend the time to bring it to fruition? We are
									here to help.
								</p>
								<p className="text-sm uppercase tracking-[0.2em] text-slate-500">
									Friendly, responsive, and built for Australia.
								</p>
							</div>
							<div className="flex flex-wrap gap-3">
								<a
									href="tel:0432520943"
									className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
								>
									Call 0432 520 943
								</a>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
								>
									Chat on Messenger
								</a>
							</div>
							<div className="flex flex-wrap gap-3 text-sm">
								<span className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">
									Affordable
								</span>
								<span className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">
									Fast turnaround
								</span>
								<span className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">
									Quality finish
								</span>
							</div>
						</div>
						<div className="relative">
							<div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
								<h2 className="text-xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Why SpectacularDMS?
								</h2>
								<ul className="mt-4 space-y-4 text-sm text-slate-700">
									<li className="flex items-start gap-3">
										<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900" />
										Dedicated support with Johnny Kim.
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900" />
										Clear mockups before printing.
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900" />
										Flexible quantities for small and bulk runs.
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900" />
										Design + print + merch in one place.
									</li>
								</ul>
								<div className="mt-6 rounded-2xl bg-slate-900 px-5 py-4 text-sm text-white">
									<p className="font-semibold">Ready to start today?</p>
									<p className="text-slate-200">Call 0432 520 943 or chat on Messenger.</p>
								</div>
							</div>
							<div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-3xl bg-slate-900/10 lg:block" />
						</div>
					</div>
				</section>

				<section id="services" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Services</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Everything you need, handled in-house.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-slate-600">
								From design to print and merchandise, we keep your brand consistent and
								polished.
							</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{services.map((service) => {
								const Icon = service.icon;
								return (
									<div
										key={service.title}
										className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
									>
										<div className="flex items-center gap-4">
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
												<Icon className="h-6 w-6" />
											</div>
											<div>
												<h3 className="text-lg font-semibold text-slate-900">
													{service.title}
												</h3>
												<p className="text-sm text-slate-600">{service.desc}</p>
											</div>
										</div>
										<ul className="mt-4 grid gap-2 text-sm text-slate-600">
											{service.items.map((item) => (
												<li key={item} className="flex items-center gap-2">
													<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
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

				<section id="print" className="scroll-mt-24 bg-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Print</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Print that looks sharp in hand.
								</h2>
								<p className="mt-4 text-sm text-slate-600">
									Popular print items for cafes, retail stores, and events across Australia.
									We manage layout, proofing, and print-ready files.
								</p>
								<ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
									{printItems.map((item) => (
										<li key={item} className="flex items-center gap-2">
											<span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />
											{item}
										</li>
									))}
								</ul>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
								>
									Request a quote
								</a>
							</div>
							<div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-lg">
								<h3 className="text-2xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Print ads that convert.
								</h3>
								<p className="mt-3 text-sm text-slate-200">
									We help you choose sizes, paper stock, and finishes that look premium while
									staying affordable.
								</p>
								<div className="mt-6 grid gap-4 text-sm">
									<div className="rounded-2xl bg-white/10 p-4">
										<p className="font-semibold">Best for promotions</p>
										<p className="text-slate-200">Seasonal sales, grand openings, and events.</p>
									</div>
									<div className="rounded-2xl bg-white/10 p-4">
										<p className="font-semibold">Consistent branding</p>
										<p className="text-slate-200">Every piece matches your look and feel.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="merch" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Merch</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Merch that gets remembered.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-slate-600">
								Pick from proven categories or ask for custom ideas that match your brand.
							</p>
						</div>
						<div className="mt-6 flex flex-wrap gap-2">
							{merchChips.map((chip) => (
								<span
									key={chip}
									className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600"
								>
									{chip}
								</span>
							))}
						</div>
						<div className="mt-8 grid gap-6 md:grid-cols-2">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold">Popular merch examples</h3>
								<ul className="mt-4 grid gap-2 text-sm text-slate-600">
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
										Apparel: tees, uniforms, hoodies
									</li>
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
										Drinkware: mugs, cups, bottles
									</li>
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
										Stickers, decals, and labels
									</li>
									<li className="flex items-center gap-2">
										<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
										Corporate gifts and event packs
									</li>
								</ul>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold">Need help with options?</h3>
								<p className="mt-4 text-sm text-slate-600">
									Check out our range of Merchandising options. For pricing, availability,
									labeling/decoration, ingredient (edible goods), and more please inquire using
									FB Messenger!
								</p>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
								>
									Chat on Messenger
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="process" className="scroll-mt-24 bg-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Process</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									A simple, reliable workflow.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-slate-600">
								We keep you informed at every step so there are no surprises.
							</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
							{processSteps.map((step, index) => (
								<div
									key={step.title}
									className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
								>
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
										{index + 1}
									</div>
									<h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
									<p className="mt-2 text-sm text-slate-600">{step.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="portfolio" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Recent work highlights.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-slate-600">
								A mix of design, print, and merchandise projects for local businesses.
							</p>
						</div>
						<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{portfolio.map((tile) => (
								<div
									key={tile.label}
									className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${tile.tone} p-6 shadow-sm`}
								>
									<div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
										<div className="absolute inset-0 bg-slate-900/10" />
									</div>
									<div className="relative flex h-40 flex-col justify-between">
										<span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
											SpectacularDMS
										</span>
										<h3 className="text-xl font-semibold text-slate-900">{tile.label}</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-slate-900 text-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-300">Pricing</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Transparent quotes, tailored to you.
								</h2>
								<p className="mt-4 text-sm text-slate-200">
									We do not offer fixed pricing because every job is different. Pricing
									depends on quantity, material, labelling/decoration, edible labelling
									requirements, and timeline.
								</p>
							</div>
							<div className="rounded-3xl bg-white/10 p-6">
								<p className="text-lg font-semibold">Need a quick quote?</p>
								<p className="mt-2 text-sm text-slate-200">
									Message us on Messenger for a quick quote.
								</p>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
								>
									Chat on Messenger
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Testimonials</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Clients who keep coming back.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-slate-600">
								We focus on value, responsiveness, and consistent quality.
							</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							{testimonials.map((item) => (
								<div
									key={item.name}
									className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
								>
									<p className="text-sm text-slate-600">"{item.quote}"</p>
									<p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="faq" className="scroll-mt-24">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">FAQ</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Answers before you ask.
								</h2>
							</div>
							<p className="max-w-lg text-sm text-slate-600">
								Quick responses to the most common questions.
							</p>
						</div>
						<div className="mt-10 grid gap-4">
							{faqs.map((faq) => (
								<details
									key={faq.q}
									className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
								>
									<summary className="cursor-pointer text-sm font-semibold text-slate-900">
										{faq.q}
									</summary>
									<p className="mt-3 text-sm text-slate-600">{faq.a}</p>
								</details>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="scroll-mt-24 bg-white">
					<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
						<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
							<div>
								<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Contact</p>
								<h2 className="mt-2 text-3xl font-['Playfair_Display','Georgia',serif] font-semibold">
									Lets build something spectacular.
								</h2>
								<p className="mt-4 text-sm text-slate-600">
									Contact person: Johnny Kim. Call or message anytime for a quick response.
								</p>
								<div className="mt-6 grid gap-3 text-sm text-slate-700">
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
									<p className="text-sm text-slate-500">ABN: 35 422 477 055</p>
								</div>
								<div className="mt-6 flex flex-wrap gap-3">
									<a
										href="tel:0432520943"
										className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
									>
										Call 0432 520 943
									</a>
									<a
										href="https://m.me/SpectacularDMS"
										target="_blank"
										rel="noreferrer"
										className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
									>
										Chat on Messenger
									</a>
								</div>
							</div>
							<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
								<form className="grid gap-4">
									<input id="contact-sent" type="checkbox" className="peer hidden" />
									<div>
										<label className="text-sm font-semibold text-slate-700" htmlFor="name">
											Name
										</label>
										<input
											id="name"
											name="name"
											required
											className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-400"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label className="text-sm font-semibold text-slate-700" htmlFor="phone">
											Phone
										</label>
										<input
											id="phone"
											name="phone"
											required
											className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-400"
											placeholder="Your phone number"
										/>
									</div>
									<div>
										<label className="text-sm font-semibold text-slate-700" htmlFor="request">
											Request
										</label>
										<textarea
											id="request"
											name="request"
											required
											rows={4}
											className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-400"
											placeholder="What do you need?"
										/>
									</div>
									<label
										htmlFor="contact-sent"
										className="inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
									>
										Send request
									</label>
									<p className="hidden text-sm text-emerald-600 peer-checked:block">
										Thanks! We will get back to you shortly.
									</p>
									<p className="text-xs text-slate-500">
										This form shows a success message locally (no backend submission).
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-slate-200 bg-slate-950 text-white">
				<div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
					<div className="grid gap-8 md:grid-cols-2">
						<div>
							<p className="text-xs uppercase tracking-[0.35em] text-slate-400">SpectacularDMS</p>
							<p className="mt-2 text-2xl font-['Playfair_Display','Georgia',serif] font-semibold">
								Spectacular Design &amp; Merch Solutions
							</p>
							<p className="mt-2 text-sm text-slate-300">
								Design, print ads, and merchandise made easy for Australian businesses.
							</p>
							<p className="mt-4 text-sm text-slate-400">ABN: 35 422 477 055</p>
						</div>
						<div className="space-y-4">
							<div className="flex flex-wrap gap-3">
								<a
									href="tel:0432520943"
									className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
								>
									Call 0432 520 943
								</a>
								<a
									href="https://m.me/SpectacularDMS"
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white"
								>
									Chat on Messenger
								</a>
							</div>
							<div className="text-sm text-slate-400">
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
					className="rounded-full bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-lg"
				>
					Call
				</a>
				<a
					href="https://m.me/SpectacularDMS"
					target="_blank"
					rel="noreferrer"
					className="rounded-full border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg"
				>
					Messenger
				</a>
			</div>
		</div>
	);
}
