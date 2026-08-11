import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cihhelwihtlffacustkh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpaGhlbHdpaHRsZmZhY3VzdGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NTI1NzMsImV4cCI6MjA5MDUyODU3M30.ZgRMHC_pnl7DqCOHtZNdqsURNNGQHGDThnanIhuZloc';

export const supabase = createClient(supabaseUrl, supabaseKey);