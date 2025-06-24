
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-8">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" className="rounded-full bg-slate-800 border-slate-600 text-white placeholder:text-gray-400" />
              </div>
              <Button type="submit" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Subscribe</Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2024 Zero Code Challenge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
