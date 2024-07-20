import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function ProtectedLayout({children}: {
    children: React.ReactNode;
}){
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return redirect("/login");
    }

    
    return <div>

    </div>
}