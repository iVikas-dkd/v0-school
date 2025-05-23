"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "../actions/send-email"
import { Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const result = await sendContactEmail(formData)
      setFormStatus(result)

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contactForm") as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <form id="contactForm" action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input id="email" name="email" type="email" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <Input id="phone" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
            </div>

            {formStatus && (
              <div
                className={`p-3 rounded ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {formStatus.message}
              </div>
            )}

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Address:</h3>
              <p>Indian International Higher Secondary School</p>
              <p>Kadwasa Chouraha, Dharadi</p>
              <p>Tehsil Singoli, District Neemuch</p>
              <p>Madhya Pradesh</p>
            </div>

            <div>
              <h3 className="font-bold">Phone Numbers:</h3>
              <p>9425979097</p>
              <p>9826014296</p>
            </div>

            <div>
              <h3 className="font-bold">Email:</h3>
              <p>Indiainternationalschool29@gmail.com</p>
            </div>

            <div>
              <h3 className="font-bold">Office Hours:</h3>
              <p>Monday to Saturday: 8:00 AM to 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
