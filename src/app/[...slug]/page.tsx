import Link from 'next/link';

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join('/');
  const title = slug[slug.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="pt-20 min-h-[85vh] flex flex-col items-center justify-center bg-[#F7F3EA] px-4 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-8 border border-gray-100">
        <span className="text-4xl">🚧</span>
      </div>
      <span className="inline-block px-4 py-1 bg-amber-100 text-[#B87333] text-xs font-bold tracking-widest uppercase rounded-full mb-6">Development</span>
      <h1 className="text-4xl md:text-6xl font-bold text-[#071A2F] mb-6" style={{fontFamily:'Outfit,sans-serif'}}>{title}</h1>
      <p className="text-lg text-[#59636D] max-w-xl mx-auto mb-10 leading-relaxed">
        The detailed page for <span className="font-semibold text-[#1E293B]">/{path}</span> is currently being drafted with the latest engineering data and specifications. Check back soon for the full update!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="px-8 py-4 bg-[#071A2F] text-white font-bold rounded-xl hover:bg-[#0B2545] transition-colors shadow-lg">
          Return to Home
        </Link>
        <Link href="/contact" className="px-8 py-4 bg-white border border-gray-200 text-[#071A2F] font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
          Contact Sales Team
        </Link>
      </div>
    </div>
  );
}
