import { PencilLine } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-14 text-slate-300">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.3fr_1fr_1fr]">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <PencilLine className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-bold text-white">BusinessBlog</h3>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-slate-400">
                        Your source for business insights, industry news, and corporate success
                        stories from around the world.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm text-primary">
                        Quick Links
                    </h3>
                    <div className="ms-2 flex flex-col gap-3 text-xs text-slate-400">
                        <a href="/" className="hover:text-white">
                            Home
                        </a>
                        <a href="/blog" className="hover:text-white">
                            Blog
                        </a>
                        <a href="/contact" className="hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm text-primary">
                        Contact
                    </h3>
                    <div className="ms-2 flex flex-col gap-3 text-xs text-slate-400">
                        <span>📍 123 Business Ave</span>
                        <span>📞 New York, NY 10001</span>
                        <span>✉️ hello@businessblog.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
