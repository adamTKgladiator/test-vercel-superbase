const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://cermhmxqjwfdmlyonbhf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcm1obXhxandmZG1seW9uYmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTg1MzUsImV4cCI6MjA2NjE3NDUzNX0.BxHiy7PBGyTm9yVvMOIaYItAHebDJxuXaVt5xVQnPjQ'

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = { supabase }
