"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Navbar } from "@/components/navbar"
import { Award, FileText } from "lucide-react"

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  imageUrl: string
  fileType: "image" | "pdf"
}

export default function CertificationsPage() {
  const [certifications] = useState<Certification[]>([
    {
      id: "1",
      name: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy & OpenEDG JavaScript Institute",
      date: "11/19/2025",
      imageUrl: "/javascript-essentials-1.jpg",
      fileType: "image",
    },
    {
      id: "2",
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "11/25/2025",
      imageUrl: "/networking-basics.jpg",
      fileType: "image",
    },
    {
      id: "3",
      name: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy & OpenEDG JavaScript Institute",
      date: "11/25/2025",
      imageUrl: "/javascript-essentials-2.jpg",
      fileType: "image",
    },
  ])

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/formal-certificate.png"
                          }}
                        />
                      )}
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
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/formal-certificate.png"
                    }}
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
