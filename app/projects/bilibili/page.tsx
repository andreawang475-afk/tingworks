import Link from "next/link";

export default function BilibiliPage() {
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
        <p className="text-[#FF6B35] font-medium text-sm mb-2">自媒体 / 二次元 · 2022–2026</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">B站少女动漫频道</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          发现赛道空白，运营少女动漫向 B站账号，
          通过分析解说与二创内容建立垂直受众。
        </p>
      </section>

      {/* 封面 + 跳转 B站主页 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <a
          href="https://space.bilibili.com/183555549"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="/bilibili-cover.png"
            alt="碎嘴子lua B站频道"
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
            访问 B站频道主页 →
          </p>
        </a>
      </section>

      {/* 数据亮点 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "131.6万+", label: "累计播放量" },
            { num: "5023", label: "粉丝数" },
            { num: "162", label: "投稿数" },
            { num: "24.9万", label: "单条最高播放" },
          ].map((d) => (
            <div key={d.label} className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="text-2xl font-bold text-[#FF6B35]">{d.num}</p>
              <p className="text-xs text-gray-400 mt-1">{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 信息网格 */}
      <section className="max-w-6xl mx-auto px-8 pb-12 grid md:grid-cols-3 gap-8">
        {/* 左侧正文 */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>UP主（策划 / 剪辑 / 文案 / 运营）</strong>，
              从选题、脚本、配音、剪辑到发布、互动、数据分析，全部独立完成。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">运营策略</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>赛道选择：</strong>
                瞄准"少女动漫解说"这一长期被低估的空白赛道，
                避开主流番剧内卷区，精准吸引核心受众。
              </li>
              <li>
                <strong>内容定位：</strong>
                以"挖宝古早少女番"为母题，用"冷圈雷达"人设建立差异化辨识度，
                让观众形成"找冷门好番就看碎嘴子"的心智。
              </li>
              <li>
                <strong>选题机制：</strong>
                深度理解二次元圈层文化与社区互动机制，通过粉丝群投票、
                评论区征集决定下一期解说对象，把观众变成"共创者"。
              </li>
              <li>
                <strong>数据驱动：</strong>
                持续复盘播放曲线与完播率，验证"冲突性剧情 + 灰色表达挖掘"
                类内容数据表现显著优于常规盘点，据此迭代选题库。
              </li>
              <li>
                <strong>社群运营：</strong>
                建立粉丝群提升粘性与活跃度，在日常互动中收集观众观点，
                反哺内容策划，形成"内容→讨论→新内容"的正向飞轮。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>运营 4 年，累计播放 <strong>131.6 万+</strong>，粉丝 <strong>5000+</strong></li>
              <li>单条最高播放 <strong>24.9 万</strong>（「少女番挖宝 17」系列）</li>
              <li>跑通"小众赛道 + 深度内容 + 社群共创"的自媒体增长模型</li>
              <li>沉淀出一套可复用的二次元内容选题与用户运营方法论</li>
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
                <dd>自媒体 / 二次元</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">运营时长</dt>
                <dd>4 年</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">年份</dt>
                <dd>2022–2026</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">角色</dt>
                <dd>UP主</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["自媒体", "二次元", "内容分享", "中视频"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">代表作</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              「少女番挖宝」系列 · 162 条投稿<br/>
              单条峰值 24.9 万播放
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
