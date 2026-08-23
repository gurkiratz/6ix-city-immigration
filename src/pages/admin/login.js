import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { getSupabaseBrowser } from "@utils/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const supabase = getSupabaseBrowser();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    setIsSubmitting(false);

    if (signInError) {
      setError("Incorrect email or password.");
      return;
    }

    const next = typeof router.query.next === "string" ? router.query.next : "/admin";
    router.push(next);
  };

  return (
    <>
      <Head>
        <title>Sign In | 6ix City Immigration Inc.</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/immigration.css" />
      </Head>
      <div className="immigration-page" style={{ minWidth: "auto", maxWidth: "420px" }}>
        <div className="modal-content" style={{ margin: "80px auto 0" }}>
          <h2>Admin Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "var(--color-error)" }}>{error}</p>}
            <div className="modal-actions">
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
