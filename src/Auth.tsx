import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      alert("Please enter both email and password");
      setLoading(false);
      return;
    }

    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) alert(error.message);
      else if (data.user?.identities?.length === 0) {
        alert("An account with this email already exists.");
      } else {
        alert("Check your email for the confirmation link!");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) alert(error.message);
      navigate("/");
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading" : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Need an account? Sign Up"}
      </button>
    </div>
  );
}
