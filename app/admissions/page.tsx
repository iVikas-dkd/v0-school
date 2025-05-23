"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendAdmissionEmail } from "../actions/send-email"
import { Loader2 } from "lucide-react"

export default function Admissions() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const [formData, setFormData] = useState({
    classApplying: "",
    medium: "english",
    transportRequired: "no",
  })

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const result = await sendAdmissionEmail(formData)
      setFormStatus(result)

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("admissionForm") as HTMLFormElement
        form.reset()
        setFormData({
          classApplying: "",
          medium: "english",
          transportRequired: "no",
        })
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, classApplying: value }))
    const formElement = document.getElementById("admissionForm") as HTMLFormElement
    const hiddenInput = formElement.querySelector('input[name="class-applying"]') as HTMLInputElement
    if (hiddenInput) {
      hiddenInput.value = value
    }
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admissions</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="p-6 bg-gradient-to-br from-red-50 to-yellow-50">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Admission Open for 2025-26</h2>
            <div className="space-y-4">
              <div className="bg-purple-700 text-white py-2 px-4 rounded-md">
                <h3 className="text-lg">
                  Class-Nursery To 10th <span className="text-yellow-300">(Hindi Medium)</span>
                </h3>
              </div>

              <div className="bg-purple-700 text-white py-2 px-4 rounded-md">
                <h3 className="text-lg">
                  11th To 12th <span className="text-yellow-300">(Maths, Bio., Arts, Commerce)</span>
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Transportation Facility</h3>
              <p className="mb-4">Safe and reliable transportation available for students from various locations.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Contact for Admission</h3>
              <p className="text-lg">9425979097, 9826014296</p>
              <p className="text-lg">Email: Indiainternationalschool29@gmail.com</p>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Admission Enquiry Form</h2>
            <form id="admissionForm" action={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-name">
                  Student Name <span className="text-red-500">*</span>
                </Label>
                <Input id="student-name" name="student-name" placeholder="Enter student's full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="parent-name">
                  Parent/Guardian Name <span className="text-red-500">*</span>
                </Label>
                <Input id="parent-name" name="parent-name" placeholder="Enter parent's full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Contact Number <span className="text-red-500">*</span>
                </Label>
                <Input id="phone" name="phone" placeholder="Enter your mobile number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <Label>
                  Class Applying For <span className="text-red-500">*</span>
                </Label>
                <input type="hidden" name="class-applying" value={formData.classApplying} />
                <Select onValueChange={handleSelectChange} value={formData.classApplying} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nursery">Nursery</SelectItem>
                    <SelectItem value="kg">KG</SelectItem>
                    <SelectItem value="1">Class 1</SelectItem>
                    <SelectItem value="2">Class 2</SelectItem>
                    <SelectItem value="3">Class 3</SelectItem>
                    <SelectItem value="4">Class 4</SelectItem>
                    <SelectItem value="5">Class 5</SelectItem>
                    <SelectItem value="6">Class 6</SelectItem>
                    <SelectItem value="7">Class 7</SelectItem>
                    <SelectItem value="8">Class 8</SelectItem>
                    <SelectItem value="9">Class 9</SelectItem>
                    <SelectItem value="10">Class 10</SelectItem>
                    <SelectItem value="11">Class 11</SelectItem>
                    <SelectItem value="12">Class 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>
                  Medium <span className="text-red-500">*</span>
                </Label>
                <input type="hidden" name="medium" value={formData.medium} />
                <RadioGroup
                  defaultValue="english"
                  value={formData.medium}
                  onValueChange={(value) => handleRadioChange("medium", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english">English Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hindi" id="hindi" />
                    <Label htmlFor="hindi">Hindi Medium</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>
                  Transportation Required <span className="text-red-500">*</span>
                </Label>
                <input type="hidden" name="transport-required" value={formData.transportRequired} />
                <RadioGroup
                  defaultValue="no"
                  value={formData.transportRequired}
                  onValueChange={(value) => handleRadioChange("transportRequired", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="transport-yes" />
                    <Label htmlFor="transport-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="transport-no" />
                    <Label htmlFor="transport-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formStatus && (
                <div
                  className={`p-3 rounded ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
