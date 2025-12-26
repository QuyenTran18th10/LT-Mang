"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            QBlog
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Trang chủ
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/blog" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Blog
            </Link>
            <Link
              href="/profile"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/profile" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Về tôi
            </Link>
            <Link
              href="/certifications"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/certifications" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Chứng chỉ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
