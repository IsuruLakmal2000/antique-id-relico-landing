import Link from "next/link";
import { Search, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brown-dark text-cream pt-16 pb-8 border-t border-gold/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                                <Search className="w-5 h-5 text-brown-dark" />
                            </div>
                            <span className="text-xl font-serif font-bold text-gold tracking-wide">Relico</span>
                        </Link>
                        <p className="text-cream/60 text-sm leading-relaxed">
                            The world's most advanced AI-powered antique identifier. Discover the hidden value in your home.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-gold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-cream/60">
                            <li><Link href="#" className="hover:text-gold transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">API</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Download</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-gold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-cream/60">
                            <li><Link href="#" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-gold mb-6">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/40">
                    <p>&copy; {new Date().getFullYear()} Relico Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
