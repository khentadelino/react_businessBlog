import { ArrowUp, PencilLine } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <PencilLine size={18} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                BusinessBlog
                            </h3>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-slate-500">
                            Your source for business insights, industry trends, and innovation stories.
                            Stay ahead with expert analysis and in-depth reporting.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <a href="/" className="hover:text-white transition">
                                Home
                            </a>
                            <a href="/blog" className="hover:text-white transition">
                                Blog
                            </a>
                            <a href="/contact" className="hover:text-white transition">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <span>📍 123 Business Ave</span>
                            <span>📞 New York, NY 10001</span>
                            <span>✉️ hello@businessblog.com</span>
                        </div>
                    </div>

                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-slate-500">
                        © 2026 BusinessBlog. All rights reserved.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                    >
                        Back to top

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition group-hover:bg-primary group-hover:text-white">
                            <ArrowUp size={16} />
                        </span>
                    </button>

                </div>

            </div>
        </footer>
    )
}