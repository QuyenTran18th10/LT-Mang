"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  difficulty: string
}

interface BlogSearchProps {
  posts: BlogPost[]
  onFilterChange: (filteredPosts: BlogPost[]) => void
}

export function BlogSearch({ posts, onFilterChange }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const categories = ["Tất cả", ...Array.from(new Set(posts.map((post) => post.category)))]

  useEffect(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.difficulty.toLowerCase().includes(query),
      )
    }

    onFilterChange(filtered)
  }, [searchQuery, selectedCategory, posts, onFilterChange])

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
              selectedCategory === category
                ? "bg-teal-600 text-white border border-teal-600"
                : "bg-transparent text-foreground border border-input hover:border-foreground/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-3 bg-secondary rounded-lg border border-teal-600/30 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 p-1 hover:bg-muted rounded-md transition-colors"
            aria-label="Clear search"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  )
}
