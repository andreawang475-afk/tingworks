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
          无限暖暖 × 必胜客联动 PV
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
              frameBorder="no"
              allowFullScreen
            />
          </div>
        </div>

        {/* 数据卡片 */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#FF6B35]">66万+</div>
            <div className="text-xs text-gray-500 mt-1">微博首日播放</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#FF6B35]">82家</div>
            <div className="text-xs text-gray-500 mt-1">全国主题门店参与</div>
          </div>
        </div>

        {/* 正文：左右两栏，对齐绮炫页面 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 左栏：主体文字 */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">项目背景</h2>
              <p className="text-gray-700 leading-relaxed">
                《无限暖暖》2.8 下半版本更新之际，与必胜客展开跨界联动，目标明确：
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <span className="font-medium">暑期促活：</span>
                  游戏内以两套联动道具为钩子，驱动玩家登录兑换；游戏外依托线下主题门店，为玩家提供暑期线下社交场所与媒体发布契机，拉升社媒生态与话题互动。
                </li>
                <li>
                  <span className="font-medium">社区口碑与热度维持：</span>
                  游戏内免费赠送帽子散件、游戏外推出套餐精美周边，配合全国范围的线下活动，在社区内形成正向讨论；并在 2.8 下半版本更新高峰过后，持续填充话题、维持联动热度。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">我的职责</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  独立撰写《无限暖暖》× 必胜客联动 PV 脚本，全程跟进原画绘制与视频制作，确保内容贴合 IP 调性、叙事节奏与品牌诉求。
                </li>
                <li>
                  独立撰写用户召回电话文案，并参与录音监棚，优化文本表达与情绪感染力，提升触达效果。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">成果与复盘</h2>
              <p className="text-gray-700 leading-relaxed">
                联动 PV 上线首日即获得 66 万+ 微博播放量，全国 82 家必胜客门店同步落地主题门店活动。推出的实用周边（如下午茶杯碟套装、决策币等）在社媒平台收获玩家大量好评，验证了「IP + 餐饮」跨界联动在促活与口碑两端的双重价值。
              </p>
            </section>
          </div>

          {/* 右栏：侧边信息卡 */}
          <aside className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wide mb-3">
                项目信息
              </h3>
              <dl className="text-sm space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-500">类型</dt>
                  <dd className="text-gray-800">品牌营销 / 跨界联动</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">周期</dt>
                  <dd className="text-gray-800">2026.08</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">年份</dt>
                  <dd className="text-gray-800">2026</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">角色</dt>
                  <dd className="text-gray-800">联动策划与执行</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wide mb-3">
                标签
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-3 py-1 rounded-full">
                  品牌联名
                </span>
                <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-3 py-1 rounded-full">
                  PV 创作
                </span>
                <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-3 py-1 rounded-full">
                  线下活动
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wide mb-3">
                联动主题
              </h3>
              <p className="text-gray-800 font-medium">真正的黄金宴</p>
            </div>
          </aside>
        </div>
      </section>

      {/* 底部 */}
      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
