import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ArrowRight, BookOpen, Code2, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Học lập trình Java & JavaScript
            <span className="block text-primary mt-2">cùng QBlog</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Khám phá kiến thức lập trình qua các bài viết chi tiết, dễ hiểu về Java và JavaScript. Nơi chia sẻ kinh
            nghiệm và học hỏi từ cộng đồng.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/blog">
                Xem bài viết
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/profile">Về tôi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Nội dung chất lượng</h3>
              <p className="text-muted-foreground">
                Các bài viết được biên soạn kỹ lưỡng, từ cơ bản đến nâng cao về Java và JavaScript.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Ví dụ thực tế</h3>
              <p className="text-muted-foreground">
                Code mẫu rõ ràng, dễ hiểu giúp bạn áp dụng ngay vào dự án thực tế.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Cộng đồng học tập</h3>
              <p className="text-muted-foreground">
                Kết nối với những người đam mê lập trình, cùng nhau phát triển kỹ năng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <CardContent className="py-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Sẵn sàng bắt đầu học?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Khám phá hơn 9 bài viết về Java và JavaScript, được viết bằng tiếng Việt để dễ dàng tiếp cận.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/blog">
                Khám phá ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
