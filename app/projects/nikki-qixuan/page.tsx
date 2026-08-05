import Link from "next/link";

export default function nikki-qixuan Page() {
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
          负责联动活动主题制定、主视觉与周边设计、主题车巡游策划，
          深度参与创意策划与品牌方执行对接。
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
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-[#FF6B35] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <p className="absolute bottom-5 left-5 text-white text-sm font-medium drop-shadow">
            在小红书查看联动详情 →
          </p>
        </a>
      </section>

      {/* 数据亮点 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "1.1万+", label: "小红书主KV获赞" },
            { num: "9000+", label: "联动首周预售量" },
            { num: "4 城", label: "主题车巡游" },
            { num: "全流程", label: "舆情应对参与" },
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
              作为叠纸游戏《无限暖暖》市场品牌实习生，
              深度参与《无限暖暖》× 伊利绮炫冰淇淋跨界联动项目。
              负责活动主题制定、主视觉与周边设计、主题车巡游活动策划，
              并全程跟进创意策划与品牌方执行对接。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>联动策划</strong>，
              主导活动主题与主视觉创意方向，协调品牌方与设计团队推进周边落地，
              并参与线下巡游活动的全流程执行与舆情危机应对。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">执行过程</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>活动主题与主视觉：</strong>
                制定联动核心主题，主导主视觉（KV）创意方向，
                协调品牌方与设计团队完成周边设计与生产落地。
              </li>
              <li>
                <strong>主题车巡游：</strong>
                策划广州、南京、重庆、北京四城应援餐车巡游活动，
                统筹路线规划、现场执行与社媒同步宣发。
              </li>
              <li>
                <strong>品牌方执行对接：</strong>
                作为项目接口人，跟进创意策划到物料交付的全流程，
                确保双方需求对齐与按时上线。
              </li>
              <li>
                <strong>舆情危机应对：</strong>
                联动周边材质与宣传不符问题出现后，
                跟进统一口径拟定、推动品牌方发布道歉公告并给出解决方案全流程。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>小红书官方账号发布的联动主 KV 获赞 <strong>1.1 万+</strong></li>
              <li>联动首周小红书预售量 <strong>9000+</strong></li>
              <li>四城主题车巡游顺利落地，线上线下联动传播闭环</li>
              <li>完整经历"策划 → 执行 → 危机应对"的品牌联动全生命周期</li>
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
                <dd>品牌联动 / 市场策划</dd>
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
                <dd>联动策划</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["品牌联动", "KV 策划", "线下活动", "舆情应对"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">关键数据</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              小红书 KV 1.1 万赞<br />
              首周预售 9000+
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
