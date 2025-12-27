"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Github, Mail, Coffee, Code2, Zap, Cpu, Wrench, FileJson } from "lucide-react"

const myInfo = {
  name: "Trần Văn Quyến",
  role: "Full-stack Developer",
  avatar: "/avatar.png",
  bio: "Đam mê lập trình Java và JavaScript. Có kinh nghiệm xây dựng các ứng dụng web với Spring Boot, React và Next.js.",
  skills: [
    { name: "Java", icon: Coffee },
    { name: "JavaScript", icon: FileJson },
    { name: "React", icon: Zap },
    { name: "Next.js", icon: Code2 },
    { name: "Spring Boot", icon: Wrench },
    { name: "TypeScript", icon: Cpu },
  ],
  github: "https://github.com/QuyenTran18th10",
  email: "quyentrannn1810@gmail.com",
}

export default function ProfilePage() {
  const [avatarImage] = useState<string | null>(myInfo.avatar)

  const handleEmailClick = () => {
    window.location.href = `mailto:${myInfo.email}`
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Về tôi</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Xin chào! Tôi là một lập trình viên đam mê học hỏi và chia sẻ kiến thức về Java và JavaScript.
            </p>
          </div>

          {/* Mission */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="py-8 space-y-4">
              <h2 className="text-2xl font-bold text-center">Mục tiêu của tôi</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
                Tạo ra một nơi chia sẻ kiến thức lập trình chất lượng bằng tiếng Việt, giúp những người mới bắt đầu dễ
                dàng tiếp cận với Java và JavaScript. Tôi tin rằng việc học lập trình sẽ trở nên dễ dàng hơn khi có
                những tài liệu chất lượng và hướng dẫn chi tiết.
              </p>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Thông tin cá nhân</h2>

            <Card className="max-w-2xl mx-auto hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {avatarImage ? (
                    <img
                      src={avatarImage || "/placeholder.svg"}
                      alt={myInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-primary-foreground">{myInfo.name.charAt(0)}</span>
                  )}
                </div>

                <CardTitle className="text-2xl text-center">{myInfo.name}</CardTitle>
                <p className="text-base text-muted-foreground text-center">{myInfo.role}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed text-center">{myInfo.bio}</p>

                <div>
                  <h3 className="text-sm font-semibold mb-3 text-center">Kỹ năng</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {myInfo.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon
                      return (
                        <Badge key={skillIndex} variant="secondary" className="text-sm flex items-center gap-1">
                          <IconComponent className="h-4 w-4" />
                          {skill.name}
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                {/* Email Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <a
                    href={`mailto:${myInfo.email}`}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground font-medium">Email</p>
                      <p className="text-sm font-medium break-all">{myInfo.email}</p>
                    </div>
                  </a>

                  {/* GitHub Card */}
                  <a
                    href={myInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <Github className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground font-medium">GitHub</p>
                      <p className="text-sm font-medium break-all">{myInfo.github.replace("https://", "")}</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-semibold">Chất lượng</h3>
                <p className="text-sm text-muted-foreground">
                  Mỗi bài viết đều được nghiên cứu kỹ lưỡng và kiểm tra cẩn thận để đảm bảo thông tin chính xác.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-semibold">Dễ hiểu</h3>
                <p className="text-sm text-muted-foreground">
                  Sử dụng ngôn ngữ đơn giản, ví dụ thực tế để người mới bắt đầu cũng có thể theo dõi được.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-semibold">Cập nhật</h3>
                <p className="text-sm text-muted-foreground">
                  Thường xuyên cập nhật kiến thức mới và best practices trong lập trình Java & JavaScript.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
