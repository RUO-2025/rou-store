"use client"

import { useState } from "react"
import { Input } from "@medusajs/ui"
import { Button } from "@medusajs/ui"
// import { Card } from "@medusajs/ui"

export default function RequestResetPassword() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const Backed_URL = process.env.MEDUSA_BACKEND_URL || "http://localhost:9000";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) {
      setMessage("Email is required")
      return
    }

    setLoading(true)
    setMessage("")

    try {
      const response = await fetch(`${Backed_URL}/auth/customer/emailpass/reset-password`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email }),
      })

      if (response.ok) {
        setMessage("If an account exists with this email, you'll receive a reset link.")
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-4 shadow-lg bg-white rounded-lg">
        <h2 className="text-xl font-semibold text-center">Reset Password</h2>
        <p className="text-sm text-gray-600 text-center">
          Enter your email to receive a password reset link.
        </p>

        {message && <p className="text-sm text-red-500 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input 
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" isLoading={loading} className="w-full">
            {loading ? "Sending..." : "Request Password Reset"}
          </Button>
        </form>
      </div>
    </div>
  )
}