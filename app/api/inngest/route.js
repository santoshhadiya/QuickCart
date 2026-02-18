import { serve } from "inngest/next";
import { 
  inngest, 
  syncUserCreation, 
  syncUserUpdation, 
  syncUserDeletion 
} from "@/config/inngest";

// This prevents the "Failed to collect page data" error
export const dynamic = 'force-dynamic';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation, 
    syncUserUpdation, 
    syncUserDeletion
  ],
});