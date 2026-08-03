import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1A1A1A]">
      {/* 顶部导航 */}
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

      {/* 主体内容 */}
      <section className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* 左侧文字 */}
        <div>
          <p className="text-[#FF6B35] font-medium text-sm mb-3">
            ABOUT · 2026
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            嗨，我是王婷婷
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            我关注品牌、市场与 AIGC 内容创作，
            也喜欢用影像记录不同的故事。
            从短视频、纪录片式表达到AI辅助创作，
            我希望做出既有情绪、也有信息密度的作品。
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            清华大学传播学硕士 ｜ 浙江大学传播学学士。<br/>
            B站自媒体播放量 120万+，
            有原创影像作品与品牌、市场行业实习经历。
          </p>

          {/* 技能标签 */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "品牌传播",
              "视频策划",
              "剪辑制作",
              "AIGC",
              "内容运营",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full border border-gray-300 text-sm text-gray-600 bg-white"
              >
                {skill}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#E55520] transition-colors"
          >
            联系我 →
          </Link>
        </div>

        {/* 右侧雪景照 */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-4 rotate-1 hover:rotate-0 transition-transform">
            <img
              src="/snow.jpg"
              alt="雪景照"
              className="rounded-xl w-full object-cover aspect-[4/5]"
            />
            <p className="text-xs text-gray-400 mt-3 px-1">
              一些安静的瞬间，也是创作的起点。
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
