"use client";

import { defaultUrl } from "@/utils/constants";
import { createClient } from "@/utils/supabase/client";
import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export const GoogleBtn: React.FC = () => {
  const onClick = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${defaultUrl}/auth/callback`,
      },
    });
  };

  return (
    <Button leftIcon={<Icon as={FcGoogle} />} colorScheme="red" onClick={onClick} className="border p-2.5 rounded-md">
      Continue with Google
    </Button>

  );
};
