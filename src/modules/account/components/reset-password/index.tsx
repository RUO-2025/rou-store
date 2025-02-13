"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const BACKEND_URL = process.env.MEDUSA_BACKEND_URL || "http://localhost:9000";
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Both password fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/customer/emailpass/update?token=${token}`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Password reset successfully!");
        router.push("/account"); // Redirect after success
      } else {
        alert("Couldn't reset password. Try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>
        <label className="block text-sm font-medium text-gray-700">New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          required
        />
        <label className="block text-sm font-medium text-gray-700 mt-3">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
        <p className="mt-4 text-center text-sm">
          <LocalizedClientLink href="/account" className="text-blue-600 hover:underline">
            Back to Account
          </LocalizedClientLink>
        </p>
      </form>
    </div>
  );
}