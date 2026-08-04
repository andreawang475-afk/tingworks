import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  cover: string;
  year: string;
  highlight: string;
};

const projects: Project[] = [
  {
    slug: "infinity-nikki-x-yili",
    title: "无限暖暖 × 伊利绮炫联动",
    subtitle: "品牌营销项目",
    role: "市场品牌实习",
    tags: ["品牌联动", "市场", "视觉"],
    cover: "/nikki-qixuan.png",
    year: "2026",
    highlight: "联动 KV 小红书获 1.1 万赞",
  },
  {
    slug: "eden",
    title: "《逃离伊甸园》",
    subtitle: "AIGC 剧情短片",
    role: "编剧 + 视频制作",
    tags: ["AIGC", "短片", "编剧"],
    cover: "/eden.jpg",
    year: "2025",
    highlight: "首届「海峡杯」数字出版技能大赛三等奖",
  },
  {
    slug: "coffee",
    title: "《咖香漫归途》",
    subtitle: "华侨主题纪录片",
    role: "策划 + 录音",
    tags: ["纪录片", "策划", "采访"],
    cover: "/coffee.png",
    year: "2026",
    highlight: "GREAT 湾区青年影视训练营 · 人文湾区",
  },
  {
    slug: "bilibili",
    title: "B站少女动漫频道",
    subtitle: "自媒体内容创作",
    role: "博主（文案/配音/剪辑）",
    tags: ["自媒体", "视频", "内容运营"],
    cover:"/bilibili-cover.png",
    year: "2022–2026",
    highlight: "单条最高播放 24.9 万 · 累计 130 万+",
  },
  {
    slug: "golden-hour",
    title: "《金时醇酿馆》",
    subtitle: "游戏内容宣发 · 抽象广告视频",
    role: "策划（分镜 / 对接）",
    tags: ["游戏宣发", "品牌内容", "视频策划"],
    cover: "/golden-hour.png",
    year: "2026",
    highlight: "无限暖暖 2.8 版本前瞻直播中场播出，介绍游戏内POI",
  },
];

export default function ProjectsPage() {
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
          <Link href="/projects" className="text-[#FF6B35] font-medium">作品集</Link>
          <Link href="/contact" className="hover:text-[#FF6B35]">联系</Link>
        </div>
      </nav>

      {/* 标题区 */}
      <section className="max-w-6xl mx-auto px-8 pt-12 pb-8">
        <p className="text-[#FF6B35] font-medium text-sm mb-2">PROJECTS · 2026</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">作品集</h1>
        <p className="text-gray-600 max-w-2xl">
          涵盖 AIGC 短片、纪录片、自媒体运营与游戏品牌联动，
          点击卡片查看项目详情。
        </p>
      </section>

      {/* 项目卡片网格 */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4"
            >
              {/* 封面 */}
              <div className="rounded-xl overflow-hidden aspect-video bg-gray-100 mb-4">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 信息 */}
              <div className="px-1">
                <div className="flex items-baseline justify-between mb-1">
                  <h2 className="text-xl font-bold">{p.title}</h2>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{p.subtitle} · {p.role}</p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 亮点 */}
                <p className="text-sm text-[#FF6B35] font-medium">{p.highlight}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8">
        © 2026 tingworks · 用影像讲述故事
      </footer>
    </main>
  );
}
