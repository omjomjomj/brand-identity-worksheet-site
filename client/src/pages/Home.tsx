import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Lightbulb, Palette, Zap } from "lucide-react";

export default function Home() {
  const worksheets = [
    {
      id: 1,
      title: "品牌快照與痛點",
      description: "定義品牌現狀、目標受眾、競爭優勢與品牌個性關鍵字",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "視覺風格三軸與關鍵字",
      description: "建立視覺風格的三個維度：色彩、字體、元素",
      icon: Palette,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 3,
      title: "設計師簡報快照",
      description: "濃縮品牌策略成一頁式簡報，供設計師參考",
      icon: Lightbulb,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "AI 提示詞小抄",
      description: "使用 AI 工具輔助品牌策略制定的提示詞範本",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="蕉您來好康農場 Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">蕉您來好康農場</h1>
              <p className="text-sm text-slate-500">Good Deals & Joy Farm</p>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            系統化打造<br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              專業品牌識別
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            透過四份結構化工作單，從品牌定位、視覺風格、設計簡報到 AI 應用，
            完整建立您的品牌識別系統。
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/worksheet/1">
              <Button size="lg" className="gap-2">
                開始工作 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Worksheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {worksheets.map((worksheet) => {
            const Icon = worksheet.icon;
            return (
              <Link key={worksheet.id} href={`/worksheet/${worksheet.id}`}>
                <div className="group h-full cursor-pointer">
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${worksheet.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        工作單 {worksheet.id}
                      </h3>
                      <h4 className="text-lg font-semibold text-slate-700 mb-2">
                        {worksheet.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {worksheet.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300">
                      進入工作單 <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-blue-100 p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            工作單特色
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">結構化設計</h4>
              <p className="text-slate-600">
                清晰的步驟引導，幫助您系統化思考品牌策略
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">視覺化工具</h4>
              <p className="text-slate-600">
                互動式表單與視覺化展示，讓品牌策略一目瞭然
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">AI 輔助</h4>
              <p className="text-slate-600">
                提供 AI 提示詞範本，加速品牌策略制定過程
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center text-slate-600">
            <p className="mb-2">
              © 2024 Brand Identity Workshop. All rights reserved.
            </p>
            <p className="text-sm">
              系統化打造專業品牌識別 | Systematically Build Professional Brand Identity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
