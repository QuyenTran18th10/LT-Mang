"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Github, Mail, Upload, X, Coffee, Code2, Zap, Cpu, Wrench, FileJson } from "lucide-react"

const myInfo = {
  name: "Trần Văn Quyến",
  role: "Full-stack Developer",
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
  const [avatarImage, setAvatarImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageData = event.target?.result as string
        setAvatarImage(imageData)
        localStorage.setItem("userAvatar", imageData)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveAvatar = () => {
    setAvatarImage(null)
    localStorage.removeItem("userAvatar")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${myInfo.email}`
  }

  const [mounted, setMounted] = useState(false)
  if (!mounted) {
    const savedAvatar = localStorage.getItem("userAvatar")
    if (savedAvatar) {
      setAvatarImage(savedAvatar)
    }
    setMounted(true)
  }

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
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center group cursor-pointer overflow-hidden">
                  {avatarImage ? (
                    <>
                      <img
                        src={avatarImage || "/placeholder.svg"}
                        alt={myInfo.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Upload className="h-5 w-5 text-white" />
                        <X className="h-5 w-5 text-white cursor-pointer" onClick={handleRemoveAvatar} />
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-primary-foreground">{myInfo.name.charAt(0)}</span>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Upload className="h-5 w-5 text-white" />
                      </div>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    disabled={isUploading}
                    className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                  />
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

                <div className="flex items-center gap-4 pt-4 justify-center">
                  <a
                    href={myInfo.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <button
                    onClick={handleEmailClick}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    title={myInfo.email}
                  >
                    <Mail className="h-6 w-6" />
                  </button>
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
