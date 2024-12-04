import { computed, Injectable, signal } from "@angular/core";
import { createBrowserClient } from "@supabase/ssr";

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  private supabase = createBrowserClient(import.meta.env['VITE_PUBLIC_SUPABASE_URL'], import.meta.env['VITE_PUBLIC_SUPABASE_ANON_KEY']);
  private session = signal<unknown>(null);
  readonly loggedIn = computed(() => !!this.session());

  constructor() {
    this.getSession().then(({ data: { session } }) => {
      this.session.set(session);
    });

    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.session.set(session);
    });
  }

  getSession() {
    return this.supabase.auth.getSession();
  }

  async logout() {
    await this.supabase.auth.signOut();
  }
}