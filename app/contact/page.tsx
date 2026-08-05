import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1A1A1A]">
      {/* 导航 */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-lg">
          tingworks
        </Link>
        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="/about" className="hover:text-[#FF6B35]">关于</Link>
          <Link href="/experience" className="hover:text-[#FF6B35]">经历</Link>
          <Link href="/projects" className="hover:text-[#FF6B35]">作品集</Link>
          <Link href="/contact" className="hover:text-[#FF6B35]">联系</Link>
        </div>
      </nav>

      {/* 标题区 */}
      <section className="max-w-6xl mx-auto px-8 pt-10 pb-8">
        <p className="text-[#FF6B35] font-medium text-sm mb-2">CONTACT</p>
        <h1 className="text-5xl font-bold leading-tight mb-3">联系我</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          如果你对品牌营销、内容策划或 AIGC、影像创作感兴趣，欢迎随时联系 ✉️
        </p>
      </section>

      {/* 联系方式卡片 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* 邮箱 */}
          <a
            href="mailto:823015664@qq.com"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">邮箱</p>
                <p className="font-medium group-hover:text-[#FF6B35] transition-colors">
                  823015664@qq.com
                </p>
              </div>
            </div>
          </a>

          {/* 微信 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 3C4.36 3 1 5.92 1 9.5c0 2.15 1.15 4.04 2.93 5.27L3 17l2.66-1.42c.9.27 1.86.42 2.84.42.23 0 .46-.01.68-.03C9.45 15.6 8.5 12.78 8.5 9.5 8.5 6.46 10.96 3 8.5 3zm6 0c-3.59 0-6.5 2.92-6.5 6.5 0 3.28.95 6.1 2.68 7.97l-.18.03c.82.03 1.62.08 2.32.08 3.03 0 5.68-2.92 5.68-6.5C18.5 5.92 15.59 3 12.5 3z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">微信</p>
                <p className="font-medium">Andrea13626537556</p>
              </div>
            </div>
          </div>

          {/* 位置 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">所在地</p>
                <p className="font-medium">中国 · 北京 / 上海</p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm text-center">
          <p className="text-gray-600 leading-relaxed">
            可以添加我的微信或者发邮件 ☕<br/>
            通常会在 <strong>24 小时内</strong>回复。
          </p>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
