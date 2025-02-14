"use client"

import { useState } from "react"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
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
    <div className="flex justify-center items-center p-4 mt-20 mb-20">
      <div className="w-full max-w-md p-6 space-y-4  rounded-lg">
        <h2 className="text-large-semi mb-6 uppercase text-center">FORGOT PASSWORD?</h2>
        <p className="text-sm text-black text-center">
        Provide email
        </p>

        {message && <p className="text-sm text-red-500 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <Input 
              label="Email"
              name="email"
              type="email"
              title="Enter a valid email address."
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" isLoading={loading} className="bg-[#008080] rounded-lg hover:bg-[#3c9696] z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover mt-6 w-full text-white">
            {loading ? "Sending..." : "Send Email"}
          </Button>
        </form>
        <div className=" text-center mt-6">
        <span className="text-center text-ui-fg-base text-small-regular mt-2">Remember password?
      <LocalizedClientLink 
        href="/account" 
        className="text-ui-fg-base text-small-regular underline mt-4"
      >
        Log in
      </LocalizedClientLink>
      .
      </span>
      </div>
      </div>
    </div>
  )
}