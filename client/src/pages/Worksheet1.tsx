import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { useFormData } from "@/contexts/FormContext";

const personalityOptions = [
  { label: "專業信頼", value: "professional", en: "Professional" },
  { label: "親切友善", value: "friendly", en: "Friendly" },
  { label: "高端精緻", value: "luxury", en: "Luxury" },
  { label: "經濟實惠", value: "affordable", en: "Affordable" },
  { label: "創新前衛", value: "innovative", en: "Innovative" },
  { label: "經典傳統", value: "classic", en: "Classic" },
  { label: "簡約現代", value: "minimalist", en: "Minimalist" },
  { label: "溫暖親民", value: "warm", en: "Warm" },
];

export default function Worksheet1() {
  const { formData, updateFormData } = useFormData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePersonality = (value: string) => {
    const current = formData.worksheet1_personalityKeywords;
    if (current.includes(value)) {
      updateFormData(
        "worksheet1_personalityKeywords",
        current.filter(k => k !== value)
      );
    } else {
      updateFormData("worksheet1_personalityKeywords", [...current, value]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 返回首頁
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="蕉您來好康農場 Logo" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">蕉您來好康農場</h1>
                <p className="text-sm text-slate-500">工作單 1 - 品牌快照與痛點</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              識別落地｜工作單 1：品牌快照與痛點
            </h2>
            <p className="text-lg text-slate-600">
              透過系統化的問題，深入理解您的品牌現狀、目標受眾、競爭優勢與品牌個性。
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="mb-12 bg-blue-50 border-blue-200 p-6">
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">💡</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">填寫說明</h3>
                <p className="text-slate-700">
                  請用簡短、具體的詞句填寫所有空格。如果還沒有品牌名稱，可以先取一個工作暱稱（暫定名）。每個答案請控制在 1-2 行內。
                </p>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <div className="space-y-8">
            {/* A. Brand Status */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  A
                </div>
                <h3 className="text-2xl font-bold text-slate-900">品牌現狀與核心</h3>
              </div>
              <p className="text-slate-600 mb-4">主要產品／服務是什麼？目前處於什麼階段？</p>
              <textarea
                value={formData.worksheet1_brandStatus}
                onChange={(e) => updateFormData("worksheet1_brandStatus", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                placeholder="例如：我們提供有機香蕉，目前在建立線上銷售平台..."
              />
            </Card>

            {/* B. Target Audience */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  B
                </div>
                <h3 className="text-2xl font-bold text-slate-900">目標受眾 (Target Audience)</h3>
              </div>
              <p className="text-slate-600 mb-4">最想吸引的客戶是誰？（年齡、職業、生活方式）</p>
              <textarea
                value={formData.worksheet1_targetAudience}
                onChange={(e) => updateFormData("worksheet1_targetAudience", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-24"
                placeholder="例如：25-45 歲的健康飲食愛好者，重視食品安全和永續農業..."
              />
            </Card>

            {/* C. Competitive Advantage */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  C
                </div>
                <h3 className="text-2xl font-bold text-slate-900">競爭優勢與價值</h3>
              </div>
              <p className="text-slate-600 mb-4">為什麼客戶會選擇我們而不是別人？最核心的特色是？</p>
              <textarea
                value={formData.worksheet1_competitiveAdvantage}
                onChange={(e) => updateFormData("worksheet1_competitiveAdvantage", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-24"
                placeholder="例如：100% 有機認證、在地小農合作、新鮮直送..."
              />
            </Card>

            {/* D. Brand Personality */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  D
                </div>
                <h3 className="text-2xl font-bold text-slate-900">品牌個性關鍵字</h3>
              </div>
              <p className="text-slate-600 mb-6">請勾選 3-5 個符合品牌未來形象的形容詞：</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {personalityOptions.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.worksheet1_personalityKeywords.includes(option.value)}
                      onChange={() => togglePersonality(option.value)}
                      className="w-4 h-4 rounded border-slate-300"
                    />
                    <span className="text-slate-700">
                      {option.label} <span className="text-xs text-slate-500">({option.en})</span>
                    </span>
                  </label>
                ))}
              </div>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-16 pt-12 border-t border-slate-200">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 返回首頁
              </Button>
            </Link>
            <Link href="/worksheet/2">
              <Button className="gap-2">
                下一步 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
