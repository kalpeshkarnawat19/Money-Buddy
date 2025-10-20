import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Description } from "@radix-ui/react-toast";
import { BookOpen, TrendingUp, PiggyBank, Receipt, Shield, CreditCard, Home, Briefcase, PiggyBankIcon, Wallet, CoinsIcon, CreditCardIcon, BanknoteIcon, TrendingDownIcon, ArrowDown01Icon, ArrowDownCircleIcon, ArrowUpCircleIcon, WalletCardsIcon } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Budgeting Basics",
    description: "Learn the 50/30/20 rule: allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment.",
    video: "https://youtu.be/T7JHfLGm_GY?si=UOP1xBwEK2t0dhJl ",
    icon: WalletCardsIcon,
    color: "text-primary",
  },
  {
    id: 2,
    title: "Building an Emergency Fund",
    description: "An emergency fund is a dedicated savings reserve set aside to cover unexpected expenses or financial emergencies. These can include unforeseen medical bills, urgent home or car repairs, job loss, or other unplanned financial burdens. The primary purpose of an emergency fund is to provide a financial safety net. Watch MoneyControl's Youtube video - Why you need an Emergency Fund.",
    video: "https://youtu.be/g-hir-4WzfU?si=BBvMaZKM6B4LfA7s",
    icon: Shield,
    color: "text-accent",
  },
  {
    id: 3,
    title: "Assets",
    description: "An asset is something that puts money in your pocket. Assets make you money — like rental properties, stocks, or a business you own. Try to build as many assets as possible in order to become Financially Independent",
    video: "https://youtu.be/g-hir-4WzfU?si=BBvMaZKM6B4LfA7s",
    icon: ArrowUpCircleIcon,
    color: "text-primary",
  },
 
  {
    id: 4,
    title: "Liabilites",
    description: "A liability is something that takes money out of your pocket. Liabilities cost you money — like loans, cars, or things that lose value over time. Ideally one should have no liability.",
    video:"https://youtu.be/qOz1a1aIWc0?si=1tpGKNo3GB2-rsRi",
    icon:  ArrowDownCircleIcon , 
    color: "text-destructive",
  },
  {
    id: 5,
    title: "Tax Planning Strategies",
    description: "Maximize deductions by keeping receipts for charitable donations, medical expenses, and business costs. Consider retirement contributions to reduce taxable income.",
    video:"https://youtu.be/tIJLoqdwev0?si=jXe83Eewx3cTSMEp",
    icon: Receipt,
    color: "text-primary",
  },
  {
    id: 6,
    title: "Investment Fundamentals",
    description: "Diversify across stocks, bonds, and real estate. Start with index funds for low fees. The power of compound interest means starting early is crucial for long-term wealth.",
    video:"https://youtu.be/qIw-yFC-HNU?si=hBzzR4w6geubnynQ",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    id: 7,
    title: "Retirement Planning",
    description: "Retirement planning is the process of setting aside money and investing wisely today to ensure a comfortable and financially secure life after you stop working. It involves estimating future expenses, choosing the right savings and investment options (like PPF,mutual funds,etc) to meet long-term goals.",
    video:"https://youtu.be/hRhKNiu6k7A?si=P_FqxSixES31Sai0",
    icon: Home,
    color: "text-success",
  },
  {
    id: 8,
    title: "Smart Saving Habits",
    description: "Automate savings transfers. Use separate accounts for different goals. Pay yourself first by saving before spending. Review and adjust savings rates quarterly.",
    video:"https://youtu.be/kywWhBXyFg0?si=9CDpDv834dvM2pQ6",
    icon: PiggyBank,
    color: "text-primary",
  },
   {
    id: 9,
    title: "Understanding Credit Scores",
    description: "Your credit score (300-850) affects loan rates. Pay bills on time, keep credit utilization below 30%, and maintain old accounts. Check your score regularly for free.",
    video:"https://youtu.be/YSihe9BEV5Q?si=Sn9oO3RcZDhnw7xT",
    icon: CreditCard,
    color: "text-success",
  },
];

export default function Finance101() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          Finance 101
        </h1>
        <p className="text-muted-foreground">Master the fundamentals of personal finance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <Card
              key={article.id}
              className="shadow-card hover:shadow-hover transition-all cursor-pointer group bg-gradient-card"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-secondary group-hover:scale-110 transition-transform ${article.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </div>
              </CardHeader>
             <CardContent>
  <div className="text-muted-foreground font-semibold text-sm leading-relaxed">
    <p>{article.description}</p>

    {/* Only show the link if it exists */}
    {article.video && (
      <a
        href={article.video.trim()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline block mt-2"
      >
        🎥  Wanna Learn this Topic in Depth..?
      </a>
    )}
  </div>
</CardContent>

            </Card>
          );
        })}
      </div>

      <Card className="mt-12 shadow-card bg-gradient-primary text-primary-foreground">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            <CardTitle className="text-2xl">Keep Learning!</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-primary-foreground/90 leading-relaxed">
            Financial literacy is a journey, not a destination. Start with one concept at a time, 
            apply it to your life, and gradually build your knowledge. Remember: small, consistent 
            steps lead to significant financial improvement over time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
