'use client';

import { useActionState, useEffect, useRef } from 'react';
import { sendMessage, type ContactState } from '@/app/actions/contact';
import styles from './ContactForm.module.css';

const INITIAL: ContactState = { status: 'idle', message: '' };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className={styles.form} noValidate>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            name="name"
            type="text"
            className={styles.input}
            placeholder="Your name"
            required
            disabled={pending}
            autoComplete="name"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="you@example.com"
            required
            disabled={pending}
            autoComplete="email"
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Subject <span className={styles.optional}>(optional)</span></span>
        <input
          name="subject"
          type="text"
          className={styles.input}
          placeholder="What's it about?"
          disabled={pending}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea
          name="body"
          className={styles.textarea}
          placeholder="Tell me what you're working on…"
          rows={5}
          required
          disabled={pending}
        />
      </label>

      <div className={styles.footer}>
        {state.message && (
          <p
            className={`${styles.feedback} ${
              state.status === 'success' ? styles.feedbackSuccess : styles.feedbackError
            }`}
            role="status"
            aria-live="polite"
          >
            {state.status === 'success' ? '✓ ' : '✕ '}{state.message}
          </p>
        )}

        <button
          type="submit"
          className={styles.submit}
          disabled={pending}
          aria-busy={pending}
        >
          {pending ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send message →'
          )}
        </button>
      </div>

    </form>
  );
}
