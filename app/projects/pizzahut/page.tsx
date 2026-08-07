import Link from "next/link";

export default function PizzahutPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1A1A1A] font-sans">
      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-lg font-bold tracking-tight">
          tingworks
        </Link>
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

      {/* 项目内容 */}
      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link
          href="/projects"
          className="text-sm text-gray-400 hover:text-[#FF6B35]"
        >
          ← 返回作品集
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-3">
          无限暖暖 × 必胜客联动
        </h1>
        <p className="text-[#FF6B35] font-medium mb-8">
          品牌营销 · 2026 · 叠纸游戏
        </p>

        {/* B站视频嵌入 */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
          <div className="aspect-video">
            <iframe
              src="https://player.bilibili.com/player.html?isOutside=true&aid=117042103453674&bvid=BV15sMk6vEdV&cid=40617708450&p=1"
              className="w-full h-full"
              scrolling="no"
              border={0}
              frameBorder="no"
              framespacing="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* 项目介绍 */}
        <div className="max-w-none">
          <h2 className="text-2xl font-bold mb-4">项目背景</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            联动 PV 作为《无限暖暖》与必胜客跨界联动的核心视觉物料，
            兼顾 IP 调性与餐饮消费场景的趣味性。
          </p>

          <h2 className="text-2xl font-bold mb-4">我的职责</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
            <li>独立撰写联动 PV 脚本，把控叙事节奏与情绪曲线</li>
            <li>全程跟进原画绘制与视频制作，确保视觉风格统一</li>
            <li>撰写联动召回电话文案，参与录音监棚优化情绪感染力</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">项目数据</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-[#FF6B35]">66万+</div>
              <div className="text-xs text-gray-500 mt-1">微博首日播放</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">项目亮点</h2>
          <p className="text-gray-700 leading-relaxed">
            将游戏版本剧情与必胜客的美食场景无缝衔接，在有限时长内完成品牌记忆植入。
          </p>
        </div>
      </section>

      {/* 底部 */}
      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
