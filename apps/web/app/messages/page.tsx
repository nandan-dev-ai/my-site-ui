"use client";

import { useState } from 'react';

const contacts = [
  {
    id: 1,
    name: 'Aarav',
    status: 'Online',
    avatar: 'A',
    preview: 'Hey! Are we still meeting today?',
    unread: 2,
  },
  {
    id: 2,
    name: 'Mina',
    status: 'Active 5m ago',
    avatar: 'M',
    preview: 'The draft looks great. I sent a few edits.',
    unread: 0,
  },
  {
    id: 3,
    name: 'Noah',
    status: 'Offline',
    avatar: 'N',
    preview: 'Shared the latest mockups.',
    unread: 1,
  },
  {
    id: 4,
    name: 'Sara',
    status: 'Online',
    avatar: 'S',
    preview: 'Can you review the proposal before noon?',
    unread: 0,
  },
];

const chats: Record<number, Array<{ id: number; sender: 'me' | 'them'; text: string; time: string }>> = {
  1: [
    { id: 1, sender: 'them', text: 'Hey! Are we still meeting today?', time: '09:12' },
    { id: 2, sender: 'me', text: 'Yes, same time. I will send the update shortly.', time: '09:14' },
    { id: 3, sender: 'them', text: 'Perfect, I will be there.', time: '09:15' },
  ],
  2: [
    { id: 1, sender: 'them', text: 'The draft looks great. I sent a few edits.', time: '08:40' },
    { id: 2, sender: 'me', text: 'Thanks! I will review them right away.', time: '08:42' },
  ],
  3: [
    { id: 1, sender: 'them', text: 'Shared the latest mockups.', time: 'Yesterday' },
    { id: 2, sender: 'me', text: 'Great, I will look at them tonight.', time: 'Yesterday' },
  ],
  4: [
    { id: 1, sender: 'them', text: 'Can you review the proposal before noon?', time: '10:05' },
    { id: 2, sender: 'me', text: 'Absolutely, I will send my feedback soon.', time: '10:07' },
  ],
};

export default function MessagesPage() {
  const [activeContactId, setActiveContactId] = useState(1);
  const [draft, setDraft] = useState('');

  const activeContact = contacts.find((contact) => contact.id === activeContactId) ?? contacts[0];
  const activeMessages = chats[activeContactId] ?? [];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-transparent px-3 py-4 sm:px-4 lg:px-6 lg:py-6">
      <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-slate-200 bg-white/90 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="grid min-h-[74vh] overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50 lg:grid-cols-[280px_1fr]">
          <aside className="border-b border-slate-200 bg-white lg:border-b-0 lg:border-r">
            <div className="border-b border-slate-200 px-3 py-3">
              <h2 className="text-base font-semibold text-slate-900">Messages</h2>
              <p className="mt-1 text-sm text-slate-500">Your conversations</p>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setActiveContactId(contact.id)}
                  className={`flex w-full items-center gap-3 border-b border-slate-100 px-3 py-2.5 text-left transition ${
                    activeContactId === contact.id ? 'bg-indigo-50' : 'bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                    {contact.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate font-medium text-slate-900">{contact.name}</span>
                      {contact.unread > 0 ? (
                        <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[11px] font-semibold text-white">
                          {contact.unread}
                        </span>
                      ) : null}
                    </div>
                    <p className="truncate text-sm text-slate-500">{contact.preview}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="flex flex-col bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-3 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                  {activeContact.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{activeContact.name}</h3>
                  <p className="text-sm text-slate-500">{activeContact.status}</p>
                </div>
              </div>
              <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Active
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] p-3">
              {activeMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${
                      message.sender === 'me'
                        ? 'bg-slate-900 text-white'
                        : 'border border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`mt-1 text-[11px] ${message.sender === 'me' ? 'text-slate-300' : 'text-slate-400'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 bg-white p-2.5">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  onClick={() => {
                    if (!draft.trim()) return;
                    setDraft('');
                  }}
                  className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
