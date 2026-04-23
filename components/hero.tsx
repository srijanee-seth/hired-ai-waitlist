"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";

export function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (insertError) {
        setError(insertError.message);
      } else {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        AI-Powered Recruitment
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join our waitlist to get early access to the future of hiring. 
        Smart matching. Better candidates. Faster hiring.
      </p>
      
      {success ? (
        <div className="max-w-md mx-auto">
          <p className="text-lg font-semibold text-green-600">
            Thank you! ✓
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            We'll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="flex-1"
          />
          <Button 
            size="lg" 
            disabled={loading}
            type="submit"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
          {error && (
            <p className="text-sm text-red-600 col-span-full">{error}</p>
          )}
        </form>
      )}
    </section>
  );
}
