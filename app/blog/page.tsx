"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Calendar, Zap } from "lucide-react"
import { BlogSearch } from "@/components/blog-search"

const blogPosts = [
  {
    id: 1,
    title: "Giới thiệu về Java: Ngôn ngữ lập trình hướng đối tượng",
    excerpt:
      "Tìm hiểu về Java - một trong những ngôn ngữ lập trình phổ biến nhất thế giới, cùng với các đặc điểm nổi bật và ứng dụng thực tế.",
    category: "Java",
    date: "15/12/2024",
    difficulty: "Cơ bản",
  },
  {
    id: 2,
    title: "Hiểu về OOP trong Java: Class và Object",
    excerpt:
      "Khám phá các khái niệm cơ bản của lập trình hướng đối tượng trong Java, bao gồm class, object và các nguyên lý SOLID.",
    category: "Java",
    date: "16/12/2024",
    difficulty: "Cơ bản",
  },
  {
    id: 3,
    title: "Exception Handling trong Java: Try-Catch và Best Practices",
    excerpt:
      "Cách xử lý ngoại lệ hiệu quả trong Java, từ cơ bản đến nâng cao với try-catch-finally và custom exceptions.",
    category: "Java",
    date: "17/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 4,
    title: "Java Collections Framework: List, Set, Map",
    excerpt:
      "Hướng dẫn chi tiết về Collections Framework trong Java, các loại collection và khi nào nên sử dụng từng loại.",
    category: "Java",
    date: "18/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 5,
    title: "Multithreading trong Java: Lập trình đa luồng",
    excerpt:
      "Tìm hiểu về lập trình đa luồng trong Java, cách tạo và quản lý threads, đồng bộ hóa và tránh race conditions.",
    category: "Java",
    date: "19/12/2024",
    difficulty: "Nâng cao",
  },
  {
    id: 6,
    title: "JavaScript ES6+: Var, Let, Const và Arrow Functions",
    excerpt:
      "Khám phá các tính năng mới của JavaScript ES6+ bao gồm let/const, arrow functions, template literals và destructuring.",
    category: "JavaScript",
    date: "20/12/2024",
    difficulty: "Cơ bản",
  },
  {
    id: 7,
    title: "Asynchronous JavaScript: Promises và Async/Await",
    excerpt:
      "Hướng dẫn chi tiết về lập trình bất đồng bộ trong JavaScript với Promises, async/await và cách xử lý errors.",
    category: "JavaScript",
    date: "21/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 8,
    title: "DOM Manipulation: Tương tác với HTML bằng JavaScript",
    excerpt: "Cách thao tác với Document Object Model (DOM) để tạo các trang web động và tương tác với người dùng.",
    category: "JavaScript",
    date: "22/12/2024",
    difficulty: "Cơ bản",
  },
  {
    id: 9,
    title: "JavaScript Modules: Import/Export và Code Organization",
    excerpt: "Tổ chức code JavaScript hiệu quả với ES6 modules, import/export và các best practices cho dự án lớn.",
    category: "JavaScript",
    date: "23/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 10,
    title: "Event Handling trong JavaScript: Click, Submit, và More",
    excerpt: "Xử lý sự kiện trong JavaScript - từ event listeners cơ bản đến event delegation và custom events.",
    category: "JavaScript",
    date: "24/12/2024",
    difficulty: "Cơ bản",
  },
  {
    id: 11,
    title: "Java Streams API: Xử lý dữ liệu hàm thực",
    excerpt:
      "Khám phá Java Streams API - một cách mạnh mẽ và hiệu quả để xử lý dữ liệu collections với functional programming style.",
    category: "Java",
    date: "25/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 12,
    title: "RESTful API với Java Spring Boot",
    excerpt:
      "Học cách xây dựng RESTful API bằng Spring Boot, từ cơ bản đến các features nâng cao như validation, error handling.",
    category: "Java",
    date: "26/12/2024",
    difficulty: "Nâng cao",
  },
  {
    id: 13,
    title: "React Hooks: useState, useEffect và Custom Hooks",
    excerpt:
      "Tìm hiểu React Hooks - cách quản lý state và side effects trong functional components cùng cách tạo custom hooks.",
    category: "JavaScript",
    date: "27/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 14,
    title: "TypeScript Basics: Type System và Interfaces",
    excerpt: "Giới thiệu TypeScript - ngôn ngữ superset của JavaScript với type system mạnh mẽ giúp code an toàn hơn.",
    category: "JavaScript",
    date: "28/12/2024",
    difficulty: "Trung bình",
  },
  {
    id: 15,
    title: "Web Performance Optimization: Caching và Minification",
    excerpt: "Tìm hiểu các kỹ thuật tối ưu hóa performance website bao gồm caching, minification, lazy loading và CDN.",
    category: "JavaScript",
    date: "29/12/2024",
    difficulty: "Nâng cao",
  },
]

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Khám phá các bài viết về Java và JavaScript - từ cơ bản đến nâng cao
            </p>
          </div>

          <BlogSearch posts={blogPosts} onFilterChange={setFilteredPosts} />

          <div className="grid gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {post.category}
                          </Badge>
                          <CardTitle className="text-2xl hover:text-primary transition-colors">{post.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4" />
                          {post.difficulty}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Không tìm thấy bài viết nào phù hợp</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
