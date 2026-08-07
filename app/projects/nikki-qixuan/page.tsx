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
          无限暖暖 × 绮炫冰淇淋联动
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          从 0 到 1 策划「星河坠入绮境」跨界联动——
          统筹 KV 设计、周边开发、线下巡游与社媒传播全链路。
        </p>
      </section>

      {/* 封面图（纯展示，无外链） */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/nikki-qixuan.png"
            alt="无限暖暖×绮炫冰淇淋联动主视觉"
            className="w-full h-full object-cover"
          />
          {/* 半透明遮罩 + 标签 */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <p className="text-white text-sm font-medium drop-shadow">
                主视觉 · 「星河坠入绮境」
              </p>
              <p className="text-white/70 text-xs mt-1">
                无限暖暖 × 绮炫冰淇淋 跨界联动
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
              起宣主KV帖全网 2.6 万赞
            </span>
          </div>
        </div>
      </section>

      {/* 数据亮点 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "2.6万+", label: "全网点赞" },
            { num: "9000+", label: "首周预售量" },
            { num: "4 城", label: "应援餐车巡游" },
            { num: "全流程", label: "舆情危机处理" },
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
              在叠纸游戏《无限暖暖》市场品牌实习期间，独立负责与绮炫冰淇淋的
              跨界联动全案策划。项目以「星河坠入绮境」为主题，线上发售联名冰淇淋礼包
              （含游戏道具兑换码及限定周边），线下在广州、南京、重庆、北京
              四城启动应援餐车巡游，打通游戏社群与快消零售的传播闭环。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">我的角色</h2>
            <p className="text-gray-600 leading-relaxed">
              担任 <strong>联动策划与执行负责人</strong>，
              从 0 到 1 制定活动主题与主视觉方向，统筹周边设计与主题车巡游活动落地，
              并深度参与品牌方创意对接与社媒传播全流程。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">执行过程</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>
                <strong>活动全案策划：</strong>
                主导制定「星河坠入绮境」活动主题，明确线上礼包售卖 +
                线下餐车巡游的双线传播策略，并完成整体项目排期与资源协调。
              </li>
              <li>
                <strong>KV 与周边设计统筹：</strong>
                负责主视觉创意方向，跟进联名 KV 的设计迭代与品牌方审核，
                同步统筹联动周边的设计开发与打样验收。
              </li>
              <li>
                <strong>线下巡游活动执行：</strong>
                策划广州、南京、重庆、北京四城应援餐车巡游方案，
                协调场地报批、物料运输与现场执行，确保线下体验与游戏调性统一。
              </li>
              <li>
                <strong>社媒传播与互动维护：</strong>
                在小红书等平台发布联动情报与应援内容，监控评论区舆情，
                实时回应玩家与消费者的疑问，维护品牌口碑与社区氛围。
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">危机公关与舆情处理</h2>
            <p className="text-gray-600 leading-relaxed">
              联动周边材质与宣传不符的舆情出现后，第一时间跟进内部沟通，
              推动统一对外口径的拟定；协调品牌方发布道歉公告并给出解决方案，
              全程跟进售后处理与用户反馈闭环，有效遏制负面舆情的进一步扩散。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">成果与复盘</h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              <li>全网联动起宣帖获 <strong>2.6 万+ 赞</strong></li>
              <li>联动首周小红书预售量突破 <strong>9000+</strong></li>
              <li>四城应援餐车巡游顺利落地，线下打卡氛围热烈</li>
              <li>成功处理周边材质舆情危机，完整跑通「预防-应对-善后」的公关闭环</li>
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
                <dd>2026.06 – 2026.07</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">年份</dt>
                <dd>2026</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">角色</dt>
                <dd>联动策划与执行</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {["品牌联名", "社交媒体", "KV 策划", "线下活动", "危机公关"].map((t) => (
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
