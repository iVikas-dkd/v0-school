"use server"

import nodemailer from "nodemailer"

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "Indiainternationalschool29@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // This should be set in your environment variables
  },
})

// Type for contact form data
type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

// Type for admission form data
type AdmissionFormData = {
  studentName: string
  parentName: string
  phone: string
  email: string
  classApplying: string
  medium: string
  transportRequired: string
}

// Function to send contact form email
export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !phone || !message) {
      return { success: false, message: "All fields are required" }
    }

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "Indiainternationalschool29@gmail.com",
      to: "Indiainternationalschool29@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    // Send email
    if (process.env.NODE_ENV === "production") {
      await transporter.sendMail(mailOptions)
    } else {
      // In development, just log the email content
      console.log("Email would be sent in production:", mailOptions)
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}

// Function to send admission form email
export async function sendAdmissionEmail(formData: FormData) {
  try {
    const studentName = formData.get("student-name") as string
    const parentName = formData.get("parent-name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const classApplying = formData.get("class-applying") as string
    const medium = formData.get("medium") as string
    const transportRequired = formData.get("transport-required") as string

    // Validate form data
    if (!studentName || !parentName || !phone || !classApplying || !medium || !transportRequired) {
      return { success: false, message: "All fields are required" }
    }

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "Indiainternationalschool29@gmail.com",
      to: "Indiainternationalschool29@gmail.com",
      subject: "New Admission Enquiry",
      html: `
        <h1>New Admission Enquiry</h1>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Class Applying For:</strong> ${classApplying}</p>
        <p><strong>Medium:</strong> ${medium}</p>
        <p><strong>Transportation Required:</strong> ${transportRequired}</p>
      `,
    }

    // Send email
    if (process.env.NODE_ENV === "production") {
      await transporter.sendMail(mailOptions)
    } else {
      // In development, just log the email content
      console.log("Email would be sent in production:", mailOptions)
    }

    return { success: true, message: "Your admission enquiry has been submitted successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to submit enquiry. Please try again later." }
  }
}
