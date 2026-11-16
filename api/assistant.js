export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });
  const { action, email } = req.body || {};
  const subject = email?.subject || 'this conversation';
  const sender = email?.sender || 'the sender';
  const summary = email?.summary || '';
  if (action === 'draft') {
    return res.status(200).json({ result: `Hi ${sender.split(' ')[0]},\n\nThanks for reaching out. I’ve reviewed your message about “${subject}”. I’ll check the details and get back to you shortly.\n\nBest,\nAlex` });
  }
  if (action === 'ask') {
    return res.status(200).json({ result: `Based on the current demo inbox, “${subject}” is about: ${summary} Suggested next step: review the latest message and confirm the owner before replying.` });
  }
  return res.status(200).json({ result: `Summary: ${summary}\n\nSuggested owner: ${email?.owner || 'Needs review'}. This demo uses rule-based sample classifications; connect an LLM to enable true contextual analysis.` });
}