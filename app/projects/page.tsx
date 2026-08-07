import Link from "next/link";

export default function ProjectsPage() {
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

      {/* 作品集区域 */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <p className="text-[#FF6B35] font-medium text-sm mb-2">
          PROJECTS · 2026
        </p>
        <h1 className="text-4xl font-bold mb-4">作品集</h1>
        <p className="text-gray-600 mb-10 max-w-xl">
          涵盖游戏品牌联动、AIGC 短片、自媒体运营与纪录片，点击卡片查看项目详情。
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 1. 必胜客 PV */}
          <Link href="/projects/pizzahut" className="group block">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/pizzahut-cover.jpg"
                  alt="无限暖暖 × 必胜客联动 PV"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">品牌营销 · 2026</p>
                  <p className="font-bold text-base leading-tight">
                    无限暖暖 × 必胜客联动 PV
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    微博首日播放 66 万+
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  品牌营销 · 2026 · 叠纸游戏
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    品牌联名
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    PV 创作
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    线下活动
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 2. 逃离伊甸园 */}
          <Link href="/projects/eden" className="group block">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/eden.jpg"
                  alt="逃离伊甸园"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">AIGC 短片 · 2025</p>
                  <p className="font-bold text-base leading-tight">
                    《逃离伊甸园》
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    编剧 + 视频制作 · 海峡杯三等奖
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  AIGC 短片 · 编剧 + 视频制作
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    AIGC
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    短片
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    编剧
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 3. 绮炫联动 */}
          <Link href="/projects/nikki-qixuan" className="group block">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/nikki-qixuan.png"
                  alt="无限暖暖 × 伊利绮炫冰淇淋联动"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">品牌营销 · 2026</p>
                  <p className="font-bold text-base leading-tight">
                    无限暖暖 × 绮炫冰淇淋联动
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    小红书获赞 1.1 万+
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  品牌营销 · 市场品牌实习
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    品牌联动
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    市场
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    视觉
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 4. B站频道 */}
          <Link href="/projects/bilibili" className="group block">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/bilibili-cover.png"
                  alt="B站少女动漫频道"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">自媒体运营 · 2022–2026</p>
                  <p className="font-bold text-base leading-tight">
                    B站少女动漫频道
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    累计播放 130 万+
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  自媒体运营 · 内容创作
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    自媒体
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    视频
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    内容运营
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 5. 金时醇酿馆 */}
          <Link href="/projects/golden-hour" className="group block">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/golden-hour.png"
                  alt="金时醇酿馆"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">游戏宣发 · 2026</p>
                  <p className="font-bold text-base leading-tight">
                    《金时醇酿馆》
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    2.8 版本前瞻直播播出
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  游戏宣发 · 视频策划
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    游戏宣发
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    品牌内容
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    视频策划
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 6. 咖香漫归途 */}
          <Link href="/projects/coffee" className="group block">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/coffee.png"
                  alt="咖香漫归途"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">纪录片 · 2025</p>
                  <p className="font-bold text-base leading-tight">
                    《咖香漫归途》
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    人文湾区 · 湾区青年影视训练营
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  纪录片 · 策划 + 录音
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    纪录片
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    策划
                  </span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">
                    采录
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 底部 */}
      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
