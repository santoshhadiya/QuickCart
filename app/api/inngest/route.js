const { serve } = require("inngest/next");
const { inngest,syncUserCreation, syncUserUpdation, syncUserDeletion } = require('@/config/inngest');

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
