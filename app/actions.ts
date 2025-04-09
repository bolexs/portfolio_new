"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { error: "Invalid form data" }
  }

  // Here you would typically send an email or save to a database
  // For now, we'll simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "Message sent successfully!" }
}
