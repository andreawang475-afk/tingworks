import Link from "next/link";

export default function ExperiencePage() {
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

      {/* 标题区 */}
      <section className="max-w-6xl mx-auto px-8 pt-10 pb-8">
        <p className="text-[#FF6B35] font-medium text-sm mb-2">EXPERIENCE</p>
        <h1 className="text-5xl font-bold leading-tight mb-3">经历</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          品牌营销 · AIGC 内容创作 · 社媒传播运营
        </p>
      </section>

      {/* 时间轴 */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="relative border-l-2 border-orange-200 pl-8 space-y-12">
          {/* 叠纸游戏 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#FF6B35] ring-4 ring-orange-100" />
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold">叠纸游戏《无限暖暖》市场品牌实习生</h2>
                <span className="text-xs text-gray-400">2026.05 – 2026.08</span>
              </div>
              <ul className="space-y-2 text-gray-600 leading-relaxed text-sm list-disc pl-5">
                <li>
                  <strong>伊利绮炫冰淇淋联动策划：</strong>
                  负责制定活动主题、主视觉与周边设计、主题车巡游活动，深度参与创意策划与执行对接。《无限暖暖》小红书发布的联动主 KV 贴获赞 1.1 万+。
                </li>
                <li>
                  <strong>必胜客联动策划：</strong>
                  负责联动 EP 脚本撰写，参与 EP 原画与视频制作全流程。撰写联动召回电话文案并参与录音监棚。
                </li>
                <li>
                  <strong>BW 展会线下活动：</strong>
                  参与展台设计与搭建，对接摄影师完成首日返图与终日回顾视频，负责周边发放与现场秩序维持。
                </li>
              </ul>
            </div>
          </div>

          {/* 欢娱影视 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#FF6B35] ring-4 ring-orange-100" />
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold">欢娱影视品牌公关部实习生</h2>
                <span className="text-xs text-gray-400">2025.06 – 2025.08</span>
              </div>
              <ul className="space-y-2 text-gray-600 leading-relaxed text-sm list-disc pl-5">
                <li>
                  <strong>「光影拾遗计划」品牌活动：</strong>
                  参与策划与内容撰写，联动新华社等主流媒体与 10 余省文旅部门。活动宣传片全平台阅读量 220 万+，获中国驻 7 国使领馆转发。
                </li>
                <li>
                  <strong>AI 转向调研：</strong>
                  独立完成《临江仙》通告 AI 引用率调研，覆盖豆包等主流大模型，输出分析报告并提出「分平台内容优化、关键词规避」等落地策略。
                </li>
              </ul>
            </div>
          </div>

          {/* 亮天文化 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#FF6B35] ring-4 ring-orange-100" />
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold">亮天文化互动营销部实习生</h2>
                <span className="text-xs text-gray-400">2024.01 – 2024.03</span>
              </div>
              <ul className="space-y-2 text-gray-600 leading-relaxed text-sm list-disc pl-5">
                <li>
                  运营 Facebook、小红书、微信公众号等国内外社媒矩阵，参与 4 次线下活动与 3 次广告营销策划，撰写 5 篇宣传文稿。
                </li>
              </ul>
            </div>
          </div>

          {/* 校园经历 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-gray-100" />
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold">校园经历</h2>
                <span className="text-xs text-gray-400">2019 – 2026</span>
              </div>
              <ul className="space-y-2 text-gray-600 leading-relaxed text-sm list-disc pl-5">
                <li>
                  <strong>科研与学术（清华大学）：</strong>
                  参与「新时期以来北京题材影视创作研究」课题项目，负责撰写第三章《文化记忆、人物谱系与时代精神表达》；撰写《2026 年文旅蓝皮书》中《沉浸式演艺的创新路径与融合发展》一节；毕业论文设计聚焦文旅微短剧产业。
                </li>
                <li>
                  <strong>Bilibili 动漫自媒体（2022.08 – 2026.05）：</strong>
                  独立完成动漫剧情解说与角色分析的文案撰写与剪辑制作，累计发布 81 条视频，总播放量 120 万，累计获赞 3.7 万，单条视频最高播放量 24.9 万。
                </li>
                <li>
                  <strong>浙江大学融媒体中心短视频团队部长（2020.10 – 2022.06）：</strong>
                  统筹浙大官方社媒账号运营，连续 16 周保障每周 3 条短视频选题产出。
                </li>
              </ul>
            </div>
          </div>

          {/* 荣誉奖项 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-gray-100" />
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-xl font-bold">荣誉奖项</h2>
              </div>
              <ul className="space-y-2 text-gray-600 leading-relaxed text-sm list-disc pl-5">
                <li>首届「海峡杯」数字出版技能大赛 · 三等奖</li>
                <li>2022 年中国大学生广告艺术节学院奖 · 优秀奖</li>
                <li>2021 年浙江大学「学业进步标兵」荣誉称号</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
