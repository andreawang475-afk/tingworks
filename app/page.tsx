import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1A1A1A] font-sans">
      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <span className="text-lg font-bold tracking-tight">tingworks</span>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-[#FF6B35] transition-colors">
            关于
          </Link>
          <Link href="/experience" className="hover:text-[#FF6B35] transition-colors">
            经历
          </Link>
          <Link href="/projects" className="hover:text-[#FF6B35] transition-colors">
            作品集
          </Link>
          <Link href="/contact" className="hover:text-[#FF6B35] transition-colors">
            联系
          </Link>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧文字 */}
          <div>
            <p className="text-[#FF6B35] font-medium text-sm mb-3">
              PORTFOLIO · 2026
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
              用影像<br />讲述故事
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              品牌 · 市场 · AIGC 内容创作<br />
              清华大学传播学硕士 ｜ 浙江大学传播学学士
            </p>

            {/* 数据亮点 */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-[#FF6B35]">120万+</div>
                <div className="text-xs text-gray-500 mt-1">B站自媒体播放量</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35]">2部</div>
                <div className="text-xs text-gray-500 mt-1">原创影像作品</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35]">3段</div>
                <div className="text-xs text-gray-500 mt-1">行业实习经历</div>
              </div>
            </div>

            {/* CTA 按钮 */}
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#E55520] transition-colors"
              >
                查看作品 →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#1A1A1A] px-6 py-3 rounded-lg font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                联系我
              </Link>
            </div>
          </div>

          {/* 右侧视频封面拼贴 */}
          <div className="relative">
            {/* 必胜客 PV（无播放按钮） */}
            <div className="bg-white rounded-2xl shadow-lg p-3 rotate-2 hover:rotate-0 transition-transform">
              <Link href="/projects/pizzahut">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/pizzahut-cover.jpg"
                    alt="无限暖暖 × 必胜客联动 PV"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-white/80">品牌营销 · 2026</p>
                    <p className="font-bold text-base leading-tight">
                      无限暖暖 × 必胜客联动 PV
                    </p>
                    <p className="text-xs text-white/80 mt-0.5">
                      微博首日播放 66 万
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* 逃离伊甸园 */}
            <div className="bg-white rounded-2xl shadow-lg p-3 -rotate-2 mt-6 ml-8 hover:rotate-0 transition-transform">
              <Link href="/projects/eden">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/eden.jpg"
                    alt="逃离伊甸园"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-white/80">AIGC 短片 · 2025</p>
                    <p className="font-bold text-base leading-tight">
                      《逃离伊甸园》
                    </p>
                    <p className="text-xs text-white/80 mt-0.5">
                      编剧 + 视频制作 · 海峡杯三等奖
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
