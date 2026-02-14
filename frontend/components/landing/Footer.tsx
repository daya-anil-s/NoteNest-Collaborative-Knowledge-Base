"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { Section, Container } from "@/components/ui";
import { COLORS } from "@/lib/design-tokens";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-beige py-20 rounded-t-[3rem] mt-20">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <span className="text-3xl font-serif font-bold text-brand-beige">
                NoteNest
              </span>
            </Link>
            <p className="text-brand-beige/60 max-w-xs leading-relaxed font-medium">
              Open-source knowledge base for high-performance teams. Built with love and caffeine.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-beige/40">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Features</Link></li>
              <li><Link href="#roadmap" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Roadmap</Link></li>
              <li><Link href="/changelog" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Changelog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-beige/40">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Documentation</Link></li>
              <li><Link href="/api" className="text-brand-beige/80 hover:text-white transition-colors font-medium">API Reference</Link></li>
              <li><Link href="/guide" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Guide</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-beige/40">Community</h4>
            <ul className="space-y-3">
              <li><Link href="https://github.com" className="text-brand-beige/80 hover:text-white transition-colors font-medium">GitHub</Link></li>
              <li><Link href="https://discord.com" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Discord</Link></li>
              <li><Link href="/blog" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-beige/40">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Privacy</Link></li>
              <li><Link href="/terms" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Terms</Link></li>
              <li><Link href="/cookies" className="text-brand-beige/80 hover:text-white transition-colors font-medium">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-beige/40 font-medium">
          <p>© 2026 NoteNest. Open Source Quest.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>by open source contributors.</span>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
