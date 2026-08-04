import Link from "next/link";

export default function CoffeePage() {
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
        <p className="text-[#FF6B35] font-medium text-sm mb-2">纪录片 · 2026</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">《咖香漫归途》</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          从光影到田园，用咖啡豆营造侨乡新滋味——
          记录一位香港摄影师回到故乡台山，用咖啡重新定义"回家"的故事。
        </p>
      </section>

      {/* 视频区：封面 + 跳转 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <a
          href="https://m.yangshipin.cn/portrait_video?vid=p000092tl47&serverFrom=510103&pageContext=btype%3Dforum%26cpid%3D41462448274849351%26ctype%3Dcpid%26from%3D100013%26state%3Dinit%26ts%3D1773717531%26vid%3Dp000092tl47"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="/coffee.png"
            alt="咖香漫归途"
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
            在央视频观看完整版 →
          </p>
        </a>
      </section>

      {/* 项目背景 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">项目背景</h2>
          <p className="text-gray-600 leading-relaxed">
            本片为参加 <strong>2025 冬季 GREAT 湾区青年影视训练营</strong>
            「人文湾区 · 台山印象」活动时创作，主题为<strong>侨胞回乡创业</strong>。
            纪录片的主人公 <strong>陈健科</strong> 曾是一名香港商业摄影师，
            五年前带着三百颗来自埃塞俄比亚的咖啡种子回到故乡台山。
            他在乡野间试种咖啡，与科研机构合作育种，
            用拼豆技艺提升产业价值，更计划打造咖啡文化展示馆与培训基地，
            吸引年轻人返乡。
          </p>
        </div>
      </section>

      {/* 信息网格 */}
      <section className="max-w-6xl mx-auto px-8 pb-12 grid md:grid-cols-3 gap-8">
        {/* 左侧正文 */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>策划</strong>。前期参与拍摄对象的寻找和勘场，
              设计每次的采访提纲（包括主人公及其朋友、学生）。
              拍摄时负责录音和整理文字稿件，用于后期剪辑与归档。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">创作过程</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>寻人：</strong>
                在台山当地多方走访，
                筛选出既有"侨"的身份辨识度、又有真实创业故事的主人公。
              </li>
              <li>
                <strong>勘场：</strong>
                提前踩点咖啡店与计划中的文化展示馆选址，
                评估光线、动线、环境音，为拍摄日程做优先级排序。
              </li>
              <li>
                <strong>采访设计：</strong>
                围绕"为何回乡""咖啡与侨乡的连接""对年轻一代的期待"三条主线，
                分别为陈健科本人、他的朋友与学生设计差异化提纲，
                让人物弧光从多个视角自然浮现。
              </li>
              <li>
                <strong>现场录音与归档：</strong>
                拍摄期间负责同期声采集，回程后整理逐字稿，
                为剪辑师提供结构化的素材索引与时间码标注。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>入选 GREAT 湾区青年影视训练营「人文湾区 · 台山印象」展映</li>
              <li>完整经历一部纪录短片从选题、勘场、采访到归档的全流程</li>
              <li>锻炼提升了沟通与协作能力</li>
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
                <dd>纪录片</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">时长</dt>
                <dd>4 分半</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">年份</dt>
                <dd>2026</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">角色</dt>
                <dd>策划</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["纪录片", "短片", "策划", "华侨"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">活动归属</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              2025 冬季 GREAT 湾区青年影视训练营<br />
              「人文湾区 · 台山印象」
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
