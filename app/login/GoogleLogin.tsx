"use client";

import { createClient } from "@/utils/supabase/client";

export const GoogleLogin = () => {
    
    return <div onClick={async () => {
      const supabase = createClient();
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `http://localhost:3000/auth/callback`,
        },
      })
  
    }}>google login</div>;
  }