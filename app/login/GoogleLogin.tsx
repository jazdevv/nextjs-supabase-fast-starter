"use client";

import { defaultUrl } from "@/utils/constants";
import { createClient } from "@/utils/supabase/client";

export const GoogleLogin = () => {
    
    return <div onClick={async () => {
      const supabase = createClient();
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${defaultUrl}/auth/callback`,
        },
      })
  
    }}>google login</div>;
  }