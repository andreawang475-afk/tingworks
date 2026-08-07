import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F7]">
      {/* 头部导航 */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-lg font-bold text-[#1A1A1A]">
          tingworks
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/about" className="hover:text-[#FF6B35]">关于</Link>
          <Link href="/experience" className="hover:text-[#FF6B35]">经历</Link>
          <Link href="/projects" className="hover:text-[#FF6B35] font-medium">作品集</Link>
          <Link href="/contact" className="hover:text-[#FF6B35]">联系</Link>
        </nav>
      </header>

      {/* 主内容区 */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-xs text-[#FF6B35] font-medium mb-2">PROJECTS · 2026
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">作品集
            <p className="text-gray-500 max-w-md">涵盖游戏品牌联动、 AIGC 短片、自媒体运营与纪录片，点击卡片查看项目详情。
          </div>
        </div>

        {/* 作品卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. 无限暖暖 × 必胜客联动 */}
          <Link href="/projects/pizzahut" className="group">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/pizzahut-cover.jpg"
                  alt="无限暖暖 × 必胜客联动 PV"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">品牌营销 · 2026
                  <p className="font-bold text-base leading-tight">无限暖暖 × 必胜客联动 PV
                  <p className="text-xs text-white/80 mt-0.5">微博首日播放 66 万
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">无限暖暖 × 必胜客联动
                <p className="text-sm text-gray-500 mb-2">品牌营销 · 2026 · 叠纸游戏
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">品牌联名</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">PV 创作</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">线下活动</span>
                </div>
              </div>
            </div>
          </Link>

          {/* 2. 逃离伊甸园 */}
          <Link href="/projects/eden" className="group">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/eden.jpg"
                  alt="逃离伊甸园"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">AIGC 短片 · 2025
                  <p className="font-bold text-base leading-tight">《逃离伊甸园》
                  <p className="text-xs text-white/80 mt-0.5">编剧 + 视频制作 · 海峡杯三等奖
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">《逃离伊甸园》
                <p className="text-sm text-gray-500 mb-2">AIGC 剧情短片 · 编剧 + 视频制作
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">AIGC</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">短片</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">编剧</span>
                </div>
              </div>
            </div>
          </Link>

          {/* 3. 绮炫联动 */}
          <Link href="/projects/qixuan" className="group">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/nikki-qixuan.png"
                  alt="无限暖暖 × 伊利绮炫冰淇淋联动"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">品牌营销项目 · 市场品牌实习
                  <p className="font-bold text-base leading-tight">无限暖暖 × 伊利绮炫冰淇淋联动
                  <p className="text-xs text-white/80 mt-0.5">联动 KV 小红书获 1.1 万赞
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">无限暖暖 × 伊利绮炫冰淇淋联动
                <p className="text-sm text-gray-500 mb-2">品牌营销项目 · 市场品牌实习
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">品牌联动</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">市场</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">视觉</span>
                </div>
              </div>
            </div>
          </Link>

          {/* 4. B站频道 */}
          <Link href="/projects/bilibili-channel" className="group">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/bilibili-cover.png"
                  alt="B站少女动漫频道"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">自媒体内容创作 · 博主（文案/配音/剪辑）
                  <p className="font-bold text-base leading-tight">B站少女动漫频道
                  <p className="text-xs text-white/80 mt-0.5">单条最高播放 24.9 万 · 累计 130 万+
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">B站少女动漫频道
                <p className="text-sm text-gray-500 mb-2">自媒体内容创作 · 博主（文案/配音/剪辑）
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">自媒体</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">视频</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">内容运营</span>
                </div>
              </div>
            </div>
          </Link>

          {/* 5. 金时醇酿馆 */}
          <Link href="/projects/golden-hour" className="group">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/golden-hour.png"
                  alt="金时醇酿馆"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">游戏内容宣发 · 抽象广告视频 · 策划（分镜 / 对接）
                  <p className="font-bold text-base leading-tight">《金时醇酿馆》
                  <p className="text-xs text-white/80 mt-0.5">无限暖暖 2.6 版本前瞻直播中场播出，介绍游戏内PCI
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">《金时醇酿馆》
                <p className="text-sm text-gray-500 mb-2">游戏内容宣发 · 抽象广告视频 · 策划（分镜 / 对接）
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">游戏宣发</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">品牌内容</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">视频策划</span>
                </div>
              </div>
            </div>
          </Link>

          {/* 6. 咖香漫归途 */}
          <Link href="/projects/coffee-return" className="group">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/coffee.png"
                  alt="咖香漫归途"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-white/80">华侨主题纪录片 · 策划 + 录音
                  <p className="font-bold text-base leading-tight">《咖香漫归途》
                  <p className="text-xs text-white/80 mt-0.5">GREAT 湾区青年影视训练营 · 人文湾区
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">《咖香漫归途》
                <p className="text-sm text-gray-500 mb-2">华侨主题纪录片 · 策划 + 录音
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">纪录片</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">策划</span>
                  <span className="bg-[#FFF1EA] text-[#FF6B35] text-xs px-2 py-1 rounded-full">采录</span>
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
