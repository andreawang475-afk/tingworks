import Link from "next/link";

export default function GoldenHourPage() {
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

      {/* 返回链接 */}
      <div className="max-w-6xl mx-auto px-8 pt-6">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:text-[#FF6B35]"
        >
          ← 返回作品集
        </Link>
      </div>

      {/* 标题区 */}
      <section className="max-w-6xl mx-auto px-8 pt-6 pb-10">
        <p className="text-[#FF6B35] font-medium text-sm mb-2">游戏内容宣发 · 2026</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">《金时醇酿馆》</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          为《无限暖暖》2.8 版本「黄金尘」打造的游戏内容宣发短片——
          用一段慵懒的黄金时光，让玩家走进T1 POI“金时醇酿馆”。
        </p>
      </section>

      {/* 视频区：B站 iframe 嵌入 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
          <iframe
            src="https://player.bilibili.com/player.html?isOutside=true&aid=116911929034625&bvid=BV1VMN16AEY5&cid=39933447665&p=1"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* 信息网格 */}
      <section className="max-w-6xl mx-auto px-8 pb-12 grid md:grid-cols-3 gap-8">
        {/* 左侧正文 */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">项目背景</h2>
            <p className="text-gray-600 leading-relaxed">
              本片为《无限暖暖》2.8 版本「黄金尘」前瞻直播中的中场宣发内容，
              以"金时醇酿馆"为概念空间，向玩家介绍新版本的重要 POI 与氛围体验。
              视频需要同时满足<strong>品牌调性统一</strong>与
              <strong>玩家向内容传播</strong>两个目标。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>策划（分镜 / 对接）</strong>。
              负责将游戏宣发需求转化为可执行的分镜脚本，
              并作为内容侧接口与美术、配音、剪辑等多方协作推进。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">创作过程</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>分镜脚本：</strong>
                把抽象概念转译为具体镜头语言，标注景别、节奏、转场与音效点，
                让美术与剪辑团队拿到即可执行。
              </li>
              <li>
                <strong>多方对接：</strong>
                作为内容策划同步协调配音、美术、视频制作三方进度，
                把控版本迭代与反馈闭环，确保成片符合品牌调性。
              </li>
              <li>
                <strong>上线复盘：</strong>
                复盘执行过程中遇到的各种问题并沉淀SOP
                为后续版本宣发积累内容策略经验。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>作为中场内容在《无限暖暖》2.8 版本前瞻直播中播出</li>
              <li>独立完成从需求到分镜的策划闭环，协调多团队协作落地</li>
              <li>验证了"品牌概念 → 分镜脚本 → 玩家向短片"的宣发工作流</li>
            </ul>
          </div>
        </div>

        {/* 右侧信息卡 */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">项目信息</h3>
            <dl className="text-sm space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-400">类型</dt>
                <dd>游戏内容宣发</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">时长</dt>
                <dd>约 1 分钟</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">年份</dt>
                <dd>2026</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">角色</dt>
                <dd>策划（分镜 / 对接）</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["游戏宣发", "品牌内容", "创意策划", "分镜脚本"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">关联项目</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              《无限暖暖》2.8 版本「黄金尘」<br />
              前瞻直播 · 中场宣发短片
            </p>
          </div>
        </aside>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
