"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Navbar } from "@/components/navbar"
import { Upload, X, Award, FileText } from "lucide-react"

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  imageUrl: string
  fileType: "image" | "pdf"
}

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: "1",
      name: "Chứng chỉ mẫu",
      issuer: "Tổ chức cấp chứng chỉ",
      date: "12/2024",
      imageUrl: "/formal-certificate.png",
      fileType: "image",
    },
  ])

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedCerts = localStorage.getItem("userCertifications")
    if (savedCerts) {
      try {
        setCertifications(JSON.parse(savedCerts))
      } catch (error) {
        console.error("Failed to load certifications:", error)
      }
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("userCertifications", JSON.stringify(certifications))
    }
  }, [certifications, mounted])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const file = files[0]
    const isPdf = file.type === "application/pdf"
    const isImage = file.type.startsWith("image/")

    if (!isPdf && !isImage) {
      alert("Vui lòng chọn tệp PDF hoặc hình ảnh")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const base64Data = reader.result as string

      const newCert: Certification = {
        id: Date.now().toString(),
        name: file.name.replace(/\.[^/.]+$/, ""),
        issuer: "Nhập tên tổ chức",
        date: new Date().toLocaleDateString("vi-VN", { month: "2-digit", year: "numeric" }),
        imageUrl: base64Data, // Now stores Base64 string instead of blob URL
        fileType: isPdf ? "pdf" : "image",
      }

      setCertifications([...certifications, newCert])
    }
    reader.readAsDataURL(file)
  }

  const removeCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id))
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Award className="h-10 w-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Chứng chỉ của tôi</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Các chứng chỉ và thành tựu mà tôi đã đạt được trong hành trình học lập trình
            </p>
          </div>

          {/* Upload Button */}
          <div className="flex justify-center">
            <label htmlFor="cert-upload" className="cursor-pointer">
              <div className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Upload className="h-5 w-5" />
                <span className="font-medium">Upload Chứng chỉ</span>
              </div>
              <input
                id="cert-upload"
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Certifications Grid */}
          {certifications.length === 0 ? (
            <Card className="bg-muted/30">
              <CardContent className="py-12 text-center">
                <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Chưa có chứng chỉ nào. Hãy upload chứng chỉ đầu tiên!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <CardHeader className="relative p-0">
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                      {cert.fileType === "pdf" ? (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <FileText className="h-16 w-16 text-primary" />
                          <p className="text-sm text-muted-foreground font-medium">PDF Document</p>
                        </div>
                      ) : (
                        <img
                          src={cert.imageUrl || "/placeholder.svg"}
                          alt={cert.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeCertification(cert.id)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <CardTitle className="text-lg line-clamp-2">{cert.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                    {cert.fileType === "pdf" && (
                      <div className="pt-2">
                        <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                          PDF
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{selectedCert?.name}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                {selectedCert?.fileType === "pdf" ? (
                  <embed
                    src={selectedCert.imageUrl}
                    type="application/pdf"
                    className="w-full h-[600px] rounded-lg border"
                  />
                ) : (
                  <img
                    src={selectedCert?.imageUrl || "/placeholder.svg"}
                    alt={selectedCert?.name}
                    className="w-full h-auto rounded-lg border"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
