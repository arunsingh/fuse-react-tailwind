### RFC-005: Voice Generator & Support Chat AI

Voice Generator (TTS)
- MVP: Web Speech API (SpeechSynthesis) fallback; pluggable provider interface
- Controls: voice, accent/locale, pitch, rate; persona presets
- Persistence: last used settings per user

Support Chat
- Chat UI with model switcher: gpt-oss-2, gpt-oss-120B, claude, groq, other OSS LLMs
- Provider abstraction and MSW-mocked endpoints; streaming UI placeholder
- Handover: email/helpdesk escalation with transcript

Privacy & Security
- PII redaction hooks; logging controls; rate-limiting docs


