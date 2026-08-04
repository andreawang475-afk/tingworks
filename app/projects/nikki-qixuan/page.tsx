import Link from "next/link";

export default function NikkiQixuanPage() {
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
        <p className="text-[#FF6B35] font-medium text-sm mb-2">品牌营销 · 2026</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          无限暖暖 × 绮炫联动
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          当星河坠入绮境——《无限暖暖》× 绮炫冰淇淋联动项目，
          用浓醇甜蜜打通游戏与快消的跨界想象。
        </p>
      </section>

      {/* 封面 + 跳转小红书 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <a
          href="https://www.xiaohongshu.com/explore/6a3bcdb6000000001700b12c?xsec_token=AB5AiJ_D6sInRuK_gTMihFGP_rwI_ncZjhuKr-YYF0-h8=&xsec_source=pc_feed"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="/nikki-qixuan.png"
            alt="无限暖暖×绮炫联动"
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
            在小红书查看联动详情 →
          </p>
        </a>
      </section>

      {/* 数据亮点 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "1.1万+", label: "小红书点赞" },
            { num: "2600+", label: "评论互动" },
            { num: "4 城", label: "应援餐车巡游" },
            { num: "6/26", label: "联动开启日" },
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
            <h2 className="text-2xl font-bold mb-3">项目背景</h2>
            <p className="text-gray-600 leading-relaxed">
              作为市场品牌实习生，参与《无限暖暖》× 绮炫冰淇淋跨界联动项目。
              项目以"星河坠入绮境"为主题，线上发售联名冰淇淋礼包
              （含游戏道具兑换码及限定周边），线下在广州、南京、重庆、北京
              四城启动应援餐车巡游，打通游戏社群与快消零售的传播闭环。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>品牌营销项目执行</strong>，
              参与联动 KV 创意策划、社交媒体内容发布与互动维护、
              用户反馈收集与传播数据复盘。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">执行过程</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>KV 创意策划：</strong>
                参与联动主视觉"星河坠入绮境"的概念讨论与落地对接，
                将游戏美术风格与绮炫品牌调性融合，确保跨平台视觉统一。
              </li>
              <li>
                <strong>社交媒体运营：</strong>
                在小红书等平台发布联动情报与应援内容，
                配合话题 #无限暖暖绮炫联动 #星河坠入绮境 进行传播。
              </li>
              <li>
                <strong>用户互动与社群维护：</strong>
                实时监控评论区舆情，回应玩家与消费者的疑问与反馈，
                维护品牌口碑与社区氛围。
              </li>
              <li>
                <strong>数据复盘：</strong>
                  跟踪发布内容的曝光、点赞、评论与收藏数据，
                  为后续联动活动优化投放策略提供依据。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>小红书联动笔记获 <strong>1.1 万+ 赞</strong>，2600+ 条评论互动</li>
              <li>四城应援餐车巡游顺利落地，线下打卡氛围热烈</li>
              <li>完成从 KV 策划到社媒执行再到数据复盘的完整品牌联动闭环</li>
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
                <dd>品牌营销 / 跨界联动</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">周期</dt>
                <dd>2026 年 6–7 月</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">年份</dt>
                <dd>2026</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">角色</dt>
                <dd>品牌营销实习</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["品牌联名", "社交媒体", "KV 策划", "互动运营"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">联动主题</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              「星河坠入绮境」<br />
              线上联名礼包 + 四城应援餐车巡游
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
