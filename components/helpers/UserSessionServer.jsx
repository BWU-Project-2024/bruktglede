// components/UserSession.server.jsx

import { readUserSession } from "@/lib/supabase/actions";

export default function UserSessionServer() {
  const { data: { session } } = readUserSession();
  return session;
}
