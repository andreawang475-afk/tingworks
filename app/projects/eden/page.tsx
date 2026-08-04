import Link from "next/link";

export default function EdenPage() {
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
        <p className="text-[#FF6B35] font-medium text-sm mb-2">AIGC 短片 · 2025</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">《逃离伊甸园》</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          一部围绕「选择面对真实」展开的 AIGC 剧情短片——
          从剧本到画面，用 AI 工具完成从 0 到 1 的影像创作实验。
        </p>
      </section>

      {/* 视频区：封面 + 跳转优酷 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <a
          href="https://v.youku.com/v_show/id_XNjUwMDM2MzM4OA==.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="/eden.jpg"
            alt="逃离伊甸园"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* 遮罩 */}
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
          {/* 播放按钮 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-[#FF6B35] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* 提示文字 */}
          <p className="absolute bottom-5 left-5 text-white text-sm font-medium drop-shadow">
            在优酷观看完整版 →
          </p>
        </a>
      </section>

      {/* 信息网格 */}
      <section className="max-w-6xl mx-auto px-8 pb-12 grid md:grid-cols-3 gap-8">
        {/* 左侧正文 */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>编剧 + 视频制作</strong>。从选题、世界观搭建、分场大纲、
              对白打磨，到 AI 生图 / 生视频，参与全流程小组合作。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">创作过程</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>剧本瘦身：</strong>
                初稿是一部长片结构，经过反复取舍，把故事压缩到
                <strong> 5 分钟</strong>以内的短片节奏，只保留最核心的戏剧冲突。
              </li>
              <li>
                <strong>AIGC 工作流：</strong>
                用 AI 工具完成概念图、关键帧、镜头运动与风格统一，
                再在剪辑软件中做节奏与情绪调度。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>首届「海峡杯」数字出版技能大赛 · <strong>三等奖</strong></li>
              <li>熟悉各大 AIGC 工具与 AIGC 短片创作管线</li>
              <li>5 分钟短片在有限时长内完成起承转合与情绪闭环</li>
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
                <dd>AIGC 剧情短片</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">时长</dt>
                <dd>约 5 分钟</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">年份</dt>
                <dd>2025</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">角色</dt>
                <dd>编剧 / 制作</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["AIGC", "短片", "编剧", "制作"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
